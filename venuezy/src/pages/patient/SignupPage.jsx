import React from 'react'
import Signup from '../../components/Auth/Patient/Signup'
import Welcome from '../../components/common/Welcome'

const SignupPage = () => {
  return (
    <div className="flex h-screen">
            <div className="flex-1">
                <Welcome/>
            </div>
            <div className="flex-1">
                <Signup/>
            </div>
        </div>
  )
}

export default SignupPage