import { SignUp } from '@clerk/clerk-react'
import React from 'react'
import '../styles/SignUpPage.css'

const SignUpPage = () => {
  return (
    <div className='signup'>
      <div className="signup-container">
      <SignUp 
  redirectUrl="/login" 
  signInUrl="/login"
  appearance={{
    elements: {
      rootBox: { backgroundColor: "black" }
    }
  }}
/>

      </div>
    </div>
  );
};


export default SignUpPage