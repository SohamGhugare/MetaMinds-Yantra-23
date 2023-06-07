import { Link } from 'react-router-dom';

const Login = () => {
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
            IHP ID Number:
          </label>
          <input
            type="number"
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
          <label htmlFor="fullName" className="block mb-2">
            Aadhaar Number
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-xl mx-auto w-full"
        >
          Login
        </button>
        <Link to="/patient/register" className="mb-4">
          <text >Don't have an account Click Here!</text>
        </Link>
      </form>
    </div>



  );
};

export default Login;
