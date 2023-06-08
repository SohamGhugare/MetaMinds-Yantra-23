import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import userSchema from "../../../validation/userValidation"
import { registerFunc } from "../../../services/Apis"
import axios from "axios"

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState();
  const [uid, setUid] = useState();


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = {
      name,
      email,
      phoneNumber: Number(phone),
      password,
      uid
    };
    console.log(formData);

    const isValid = await userSchema.isValid(formData);
    console.log(isValid);

    if (isValid) {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json"
          }
        };
        const response = await axios.post(
          "http://localhost:8081/api/v1/users/create-user",
          formData,
          config
        );
        console.log(response)

        if (response.status === 200) {
          console.log("Signup successful");
        } else {
          console.log("Signup failed");
        }
        navigate("/home");

      } catch (error) {
        console.error("Error:", error.message);
      }
    }
  };



  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
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

          <label htmlFor="phone" className="block mb-2">
            Phone Number:
          </label>
          <input
            type="number"
            id="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md"
            onChange={(e) => setPhone(e.target.value)}

            required
          />

        </div>
        <div className="mb-4">

          <label htmlFor="uid" className="block mb-2">
            UID:
          </label>
          <input
            type="number"
            id="uid"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md"
            onChange={(e) => setUid(e.target.value)}

            required
          />

        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mx-auto w-full"
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
