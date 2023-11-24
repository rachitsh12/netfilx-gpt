import React, { useEffect } from 'react'
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/Firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux'
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/GptSlice';


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user)
  const dispatch =  useDispatch()
  useEffect (()=>{
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid , email:email, displayName:displayName}));
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
      }
    });
    return ()=> unsubscribe();
    

  },[]);

  const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView());
  }

  const handleSignOut = () => {
    
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });

  }
  return (

    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className=' w-44'
        src={LOGO}
        alt='logo' />
      {user &&
      <div>
        <button onClick={handleGptSearchClick} className='py-2 px-4 m-2 bg-purple-800 text-white rounded-lg' >GPT Search</button>
        <button onClick={handleSignOut} className='text-white'>Sign Out</button>
      </div>}
    </div>


  )
}

export default Header