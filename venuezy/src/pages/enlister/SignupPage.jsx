import React from 'react'
import Signup from '../../components/Auth/Doctor/Signup'
import Welcome from '../../components/common/Welcome'

const SignupPageDoc = () => {
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

export default SignupPageDoc