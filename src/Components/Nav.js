import React, { useEffect, useState } from 'react'
// import firebase from 'firebase'
import {logout} from '../reducers/userSlice'
import './Nav.css'
import { useDispatch } from 'react-redux';
function Nav() {
    const[show, handleShow] = useState(false);
    const dispatch = useDispatch()
    const transitionNavbar = () =>{
        if(window.scrollY > 100){
            handleShow(true)
        }
        else{
            handleShow(false)
        }
    }

useEffect(()=>{
    window.addEventListener("scroll", transitionNavbar)

    return ()=>{
        window.removeEventListener("scroll", transitionNavbar)
    }
},[])

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className='nav_container'>
            <img src='/images/netflix.png' className='logo' />
            <img src='/images/logout.webp' className='nav_avatar' onClick={()=>{
              dispatch(logout())
            }}/>
        </div>
    </div>
  )
}

export default Nav