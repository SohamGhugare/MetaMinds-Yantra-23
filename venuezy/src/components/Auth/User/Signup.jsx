import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import userSchema from "../../../validation/userValidation"
import { registerFunc } from "../../../services/Apis"

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = {
      name,
      email,
      password,
      phoneNumber: Number(phone)
    };

    const isValid = await userSchema.isValid(formData);
    console.log(isValid);

    if (isValid) {
      try {
        console.log(formData);
        const config = {
          "Content-type": "application/json"
        };
        const data = await registerFunc(formData, config);
        console.log(data);
      } catch (error) {
        console.log(error);
      }

    }
  }


  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-full max-w-md">
        <h2 className="text-5xl font-bold mb-6">Register</h2>

        <div className="mb-4">

          <label htmlFor="fullName" className="block mb-2">
            Name:
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">

          <label htmlFor="fullName" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="fullName"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md"
            onChange={(e) => setEmail(e.target.value)}

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
            onChange={(e) => setPassword(e.target.value)}

            required
          />
        </div>
        <div className="mb-4">

          <label htmlFor="fullName" className="block mb-2">
            Phone Number:
          </label>
          <input
            type="number"
            id="fullName"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md"
            onChange={(e) => setPhone(e.target.value)}

            required
          />

        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mx-auto w-full"
          onClick={handleSubmit}
        >
          Register
        </button>
        <Link to="/user/login" className="mb-4">
          <text >Already have an account Click Here!</text>
        </Link>
      </form>
    </div>


  )
}

export default Signup;
