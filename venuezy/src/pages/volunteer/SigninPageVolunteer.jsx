import React from 'react'
import Welcome from '../../components/common/Welcome'
import LoginVolunteer from '../../components/Auth/Volunteer/LoginVolunteer'

const SigninPageVolunteer = () => {
  return (
    <div className="flex h-screen">
            <div className="flex-1">
                <Welcome/>
            </div>
            <div className="flex-1">
                <LoginVolunteer/>
            </div>
        </div>
  )
}

export default SigninPageVolunteer