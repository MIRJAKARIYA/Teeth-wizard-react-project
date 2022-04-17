import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Pages/Shared/SocialLogin/SocialLogin';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [passwordError, setPassswordError] = useState('');
    const [isHide, setIsHide] = useState(false);
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


    const handleHideButton = () =>{
        setIsHide(!isHide);
    }

    const handleUserLogIn = async(e) =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
        setPassswordError('');
    }
    if(user){
        navigate('/home')
    }
    if(error){
        setPassswordError(error.message)
        return;
    }

    return (
        <div>
            <div className='form-container mb-2'>
                <h1 className='text-center'>LogIn</h1>
                <form onSubmit={handleUserLogIn} className='form-style'>
                    <div className='input-container'>
                        <small className='d-block'>Your Email:</small>
                        <input ref={emailRef} type="email" name="email" placeholder='Type Your Email' required/>
                    </div>
                    <div className='input-container'>
                        <small className='d-block'>Password:</small>
                        <input ref={passwordRef} type={isHide?'text':'password'} name="password" placeholder='Your Password' required/>
                    </div>
                    <small className='text-danger'>{passwordError}</small>
                    <button className='d-block mx-auto mt-4 extra-btn-style rounded-pill' type='submit'>REGISTER</button>
                    <small onClick={handleHideButton} className='hide-button'>{isHide?<AiFillEye />:<AiFillEyeInvisible />}</small>
                </form>
                <SocialLogin></SocialLogin>
            </div>
                
            <Link to='/register' className='d-block text-center'>creat a new account</Link>
        </div>
    );
};

export default Login;