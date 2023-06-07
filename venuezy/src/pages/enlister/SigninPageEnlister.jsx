import React from 'react'
import Welcome from '../../components/common/Welcome'
import LoginEnlister from '../../components/Auth/Enlister/LoginEnlister'

const SigninPageEnlister = () => {
  return (
    <div className="flex h-screen">
            <div className="flex-1">
                <Welcome/>
            </div>
            <div className="flex-1">
                <LoginEnlister/>
            </div>
        </div>
  )
}

export default SigninPageEnlister