import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Pages/Shared/SocialLogin/SocialLogin';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [resetError, setResetError] = useState(false)
    const [isHide, setIsHide] = useState(false);
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(
        auth
      );


    const handleHideButton = () =>{
        setIsHide(!isHide);
    }
    const handleForgotPassword = async () =>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        setResetError(true);
    }
    useEffect(()=>{
        if(ResetError && resetError){
            toast(ResetError.message.split('auth/').join(''))
            setResetError(false);
            
        }
        else if(!ResetError && resetError){
            toast('password reset email has been sent successfully');
            setResetError(false);
        }
    },[ResetError,resetError])


    const handleUserLogIn = (e) =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    useEffect(()=>{
        if(user){
            navigate(from, { replace: true });
        }
    },[navigate,from,user]);

    return (
        <div className='registration-container login-contaner'>
            <div className='form-container mb-2'>
                <h1 className='text-center text-decoration-underline'>LogIn</h1>
                <form onSubmit={handleUserLogIn} className='form-style'>
                    <div className='input-container'>
                        <small className='d-block'>Your Email:</small>
                        <input ref={emailRef} type="email" name="email" placeholder='Type Your Email' required/>
                    </div>
                    <small className='text-danger'>{error?.message?.includes('not-found')?'*user not found':''}</small>
                    <div className='input-container'>
                        <small className='d-block'>Password:</small>
                        <input ref={passwordRef} type={isHide?'text':'password'} name="password" placeholder='Your Password' required/>
                    </div>
                    <small className='text-danger'>{error?.message?.includes('password')?'*wrong password':''}</small>
                    <button className='d-block mx-auto mt-4 extra-btn-style rounded-pill' type='submit'>LOGIN</button>
                    <small onClick={handleHideButton} className='hide-button'>{isHide?<AiFillEye />:<AiFillEyeInvisible />}</small>
                    <small className='forget-password-style' onClick={handleForgotPassword}>forgot password?</small>
                </form>
                <ToastContainer />
                <SocialLogin></SocialLogin>
            </div>   
            <Link to='/register' className='d-block text-center text-white'>create a new account.</Link>

        </div>
    );
};

export default Login;