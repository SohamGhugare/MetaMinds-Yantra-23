import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
<<<<<<< HEAD
import SigninPage from "./pages/user/SigninPage";
import SignupPage from "./pages/user/SignupPage";
import SigninPageDoc from "./pages/enlister/SigninPage";
import SignupPageDoc from "./pages/enlister/SignupPage";

=======
import SigninPage from "./pages/patient/SigninPage";
import SignupPage from "./pages/patient/SignupPage";
import SigninPageDoc from "./pages/doctor/SigninPage";
import SignupPageDoc from "./pages/doctor/SignupPage";
import Home from "./pages/Home";
import Hall from "./pages/Hall";
>>>>>>> a78d112fa54a88855b5358aa2e2306e5c2c511d7

function App() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<HomePage />}/>
      <Route path="/user/login" element={<SigninPage/>}/>
      <Route path="/user/register" element={<SignupPage/>}/>
      <Route path="/enlister/login" element={<SigninPageDoc/>}/>
      <Route path="/enlister/register" element={<SignupPageDoc/>}/>
=======
      <Route path="/" element={<HomePage />} />
      <Route path="/patient/login" element={<SigninPage />} />
      <Route path="/patient/register" element={<SignupPage />} />
      <Route path="/doctor/login" element={<SigninPageDoc />} />
      <Route path="/doctor/register" element={<SignupPageDoc />} />
      <Route path="/home" element={<Home />} />
      <Route path="/halls" element={<Hall />} />
>>>>>>> a78d112fa54a88855b5358aa2e2306e5c2c511d7
    </Routes>
  );
}

export default App;
