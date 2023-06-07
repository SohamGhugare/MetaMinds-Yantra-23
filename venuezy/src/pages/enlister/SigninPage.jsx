import React from 'react'
import Welcome from '../../components/common/Welcome'
import Login from '../../components/Auth/Doctor/Login'

const SigninPageDoc = () => {
    return (
        <div className="flex h-screen">
            <div className="flex-1">
                <Welcome/>
            </div>
            <div className="flex-1">
                <Login/>
            </div>
        </div>
    )
}

export default SigninPageDoc