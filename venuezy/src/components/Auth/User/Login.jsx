import {useState} from "react";
import { Link } from 'react-router-dom';
import userSchema from "../../../validation/userValidation"

const Login = () => {

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (

    <div className="flex flex-row items-center justify-center h-screen">
      <form className="w-full max-w-md">
        <h2 className="text-5xl font-bold mb-6">Welcome Back</h2>

        <div className="mb-4">

          <label htmlFor="fullName" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="fullName"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md"
            onChange={(e)=> setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">

          <label htmlFor="fullName" className="block mb-2">
            Password:
          </label>
          <input
            type="password"
            id="fullName"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md"
            onChange={(e)=> setPassword(e.target.value)}
            required
          />
        </div>



        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-xl mx-auto w-full"
        >
          Login
        </button>
        <Link to="/user/register" className="mb-4">
          <text >Don't have an account Click Here!</text>
        </Link>
      </form>
    </div>



  );
};

export default Login;
