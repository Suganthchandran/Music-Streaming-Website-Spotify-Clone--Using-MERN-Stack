import { SignIn } from '@clerk/clerk-react'
import React from 'react'
import '../styles/LoginPage.css'

const LoginPage = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <SignIn redirectUrl="http://localhost:3000/" signUpUrl="/sign-up"  />
        </div>
    </div>
  )
}

export default LoginPage