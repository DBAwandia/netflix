import React, { useRef } from 'react'
import { auth } from './firebase'
import './SignUpScreen.css'
function SignUpScreen() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (e) =>{
    e.preventDefault()
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
      ).then(authUser =>{
        console.log(authUser)
      }).catch(errors =>{
        alert(errors.message)
      })
  }
  const signIn = (e) =>{
    e.preventDefault()
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then(authUser =>{
      console.log(authUser)
    }).catch( errors =>{
      alert(errors.message)
    })
  }
  return (
    <div className='SignUpScreen'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type='email' placeholder='Email'/>
            <input ref={passwordRef} type='password' placeholder='Password'/>
            <button onClick={signIn}>Sign In</button>

            <h4> New to Netflix<span onClick={register}>Sign Up Now.</span></h4>
        </form>
    </div>
  )
}

export default SignUpScreen