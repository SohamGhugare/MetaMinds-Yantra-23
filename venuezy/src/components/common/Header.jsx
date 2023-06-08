import React from 'react'
import Avatar from '@mui/material/Avatar';
import Logo from "../../assets/full_logo.png"

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white text-white">
      <div className="flex items-center">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="h-15" />
      </div>

      <div className="flex items-center">
        {/* User profile */}
        <Avatar src="/broken-image.jpg" />

        {/* User name */}
        <p className="ml-2 text-2xl text-black">Rahul Khatri</p>
      </div>
    </header>
  )
}

export default Header