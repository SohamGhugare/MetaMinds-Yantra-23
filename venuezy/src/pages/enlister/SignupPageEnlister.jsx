import React from 'react'
import SignupEnlister from '../../components/Auth/Enlister/Signup'
import Welcome from '../../components/common/Welcome'

const SignupPageEnlister = () => {
  return (
    <div className="flex h-screen">
    <div className="flex-1">
        <Welcome/>
    </div>
    <div className="flex-1">
        <SignupEnlister/>
    </div>
</div>
  )
}

export default SignupPageEnlister