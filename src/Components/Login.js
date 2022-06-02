import React, {useState} from 'react'
import './Login.css'
import SignUpScreen from './SignUpScreen'
function Login() {
    const[signin, setSignin] = useState(false);
    const showSignUp = (e) =>{
        e.preventDefault()
        setSignin(!signin)
    }
  return (
    <div className='login'>
        <div className='login_header'>
            <img src='/images/netflix.png' alt=''/>
                <button className='login_button'>
                    Sign In
                </button>
        </div>
      <div className='login_body'>
            {
                signin ? (<SignUpScreen/>) : (
                        <>
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h2>Watch Anywhere, Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                        <form>
                            <input type='text' placeholder='Enter Address'/>
                            <button onClick={showSignUp}>Get Started</button>

                        </form>
                        </>
                )
            }
          
</div>  
      <div className='login__gradient'>
      </div>
    </div>
  )
}

export default Login