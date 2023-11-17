import React from 'react'
import Header from './Header'
import { useState, useRef } from 'react'
import { checkValidData } from '../utils/Validate'

const Login = () => {
    const[isSignInForm, setSignInForm] = useState(true)
    const[errorMessage,setErrorMessage] = useState(null);

    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
    };

    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick =()=>{
      

      const message = checkValidData(email.current.value,password.current.value );
      setErrorMessage(message);
    };
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        alt='bgimage'/>
        </div>
        <form onSubmit={(e)=> e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4 '>{isSignInForm ? "Sign In": "Sign Up"}</h1>
            { !isSignInForm &&(
                <input type="text"
             placeholder='Full Name'
              className='p-4 my-4 w-full bg-gray-700' />)}
            <input ref={email} type="text" 
            placeholder='Email Address' 
            className='p-4 my-4 w-full bg-gray-700' />
            <input ref={password} type="password"
             placeholder='Password'
              className='p-4 my-4 w-full bg-gray-700' />

            <p className='text-red-500'>{errorMessage}</p>  
            <button onClick={handleButtonClick} className='p-4 my-4 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In": "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix?Sign Up Now ": "Already Registered?Sign In"}</p>

        </form>
    </div>
  )
}

export default Login