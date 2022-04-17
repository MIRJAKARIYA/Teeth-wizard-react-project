import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Pages/Shared/SocialLogin/SocialLogin';
import './Register.css';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [updateProfile] = useUpdateProfile(auth);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const [passwordMatchError, setPassswordMatchError] = useState('');
    const [passwordError, setPasswordError] = useState('')
    const [isHide, setIsHide] = useState(false);
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});

    const handleHideButton = () =>{
        setIsHide(!isHide);
    }

    const handleUserCreation = async (e) =>{
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        setPassswordMatchError('');
        setPasswordError('');
        if(password !== confirmPassword){
            setPassswordMatchError("*password did'nt match");
            return;
        }
        
        if(password.length < 6 || password.length>10){
            if(password.length<6){
                setPasswordError('*password is too short(>=6)');
                return;
            }
            else{
                setPasswordError('*password is very long(<=10)');
                return;
            }
        }
        const isExistsNumber = /^(?=.*[0-9])/.test(password);
        if(!isExistsNumber){
            setPasswordError('password must have at least one number');
            return;
        }
        const isExistsSpecialCharacter = /^(?=.*[!@#$%^&*])/.test(password);
        if(!isExistsSpecialCharacter){
            setPasswordError('password must have at least one special character');
            return;
        }
        const isExistsOneSmallLetter = /^(?=.*[a-z])/.test(password);
        if(!isExistsOneSmallLetter){
            setPasswordError('password must have at least one small letter');
            return;
        }
        const isExistsOneUpperLetter = /^(?=.*[A-Z])/.test(password);
        if(!isExistsOneUpperLetter){
            setPasswordError('password must have at least one upper case letter');
            return;
        }
        setPassswordMatchError('');
        setPasswordError('');
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({displayName: name});
    }
    useEffect(()=>{
        if(user){
            console.log(user)
            navigate('/login')
        }
    },[navigate,user])


    return (
        <div className='registration-container'>
            <div className='form-container mb-2'>
                <h1 className='text-center'>Register</h1>
                <form onSubmit={handleUserCreation} className='form-style'>
                    <div className='input-container'>
                        <small className='d-block'>Your Name:</small>
                        <input ref={nameRef} type="text" name='name' placeholder='Type Your Name' required/>
                    </div>
                    <div className='input-container'>
                        <small className='d-block'>Your Email:</small>
                        <input ref={emailRef} type="email" name="email" placeholder='Type Your Email' required/>
                    </div>
                    <div className='input-container'>
                        <small className='d-block'>Password:</small>
                        <input ref={passwordRef} type={isHide?'text':'password'} name="password" placeholder='Your Password' required/>
                    </div>
                    <small className='text-danger'>{passwordError}</small>
                    <div className='input-container'>
                        <small className='d-block'>Confirm Password:</small>
                        <input ref={confirmPasswordRef} type={isHide?'text':'password'} name="ConfirmPassword" placeholder='Confirm Password' required/>
                    </div>
                    <small className='text-danger'>{passwordMatchError}</small>
                    <button className='d-block mx-auto mt-4 extra-btn-style rounded-pill' type='submit'>REGISTER</button>
                    <small onClick={handleHideButton} className='hide-button'>{isHide?<AiFillEye />:<AiFillEyeInvisible />}</small>
                </form>
                <SocialLogin></SocialLogin>
            </div>
                
            <Link to='/login' className='d-block text-center text-white'>already have an account?</Link>
        </div>
    );
};

export default Register;