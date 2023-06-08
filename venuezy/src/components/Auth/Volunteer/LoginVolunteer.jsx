import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password
    };
    console.log(formData);
    navigate('/home');
  };

  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-5xl font-bold mb-6">Welcome Back</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md"
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="on"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-xl mx-auto w-full"
        >
          Login
        </button>
        <Link to="/user/register" className="mb-4">
          <p>Don't have an account? Click Here!</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
