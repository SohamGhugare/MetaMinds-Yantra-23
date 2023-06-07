import React from 'react'
import SignupVolunteer from '../../components/Auth/Volunteer/Signup'
import Welcome from '../../components/common/Welcome'

const SignupPageVolunteer = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1">
        <Welcome />
      </div>
      <div className="flex-1">
        <SignupVolunteer />
      </div>
    </div>
  )
}

export default SignupPageVolunteer