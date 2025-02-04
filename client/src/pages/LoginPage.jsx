import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const LoginPage = () => {
  return (
    <div>
        <SignIn redirectUrl="http://localhost:3000/" signUpUrl="/sign-up"  />
    </div>
  )
}

export default LoginPage