import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-full max-w-md">
        <h2 className="text-5xl font-bold mb-6">Register</h2>

        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-2">
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block mb-2">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block mb-2">
            License Number:
          </label>
          <input
            type="number"
            id="phoneNumber"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="phoneNumber"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">
            Set Password:
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md"
            required
          />
        </div>


        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mx-auto w-full"
        >
          Register
        </button>
        <Link to="/doctor/login" className="mb-4">
          <text >Already have an account Click Here!</text>
        </Link>
      </form>
    </div>


  )
}

export default Signup;
