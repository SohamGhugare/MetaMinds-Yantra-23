import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/patient/SigninPage";
import SignupPage from "./pages/patient/SignupPage";
import SigninPageDoc from "./pages/doctor/SigninPage";
import SignupPageDoc from "./pages/doctor/SignupPage";
import Home from "./pages/Home";
import Hall from "./pages/Hall";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/patient/login" element={<SigninPage />} />
      <Route path="/patient/register" element={<SignupPage />} />
      <Route path="/doctor/login" element={<SigninPageDoc />} />
      <Route path="/doctor/register" element={<SignupPageDoc />} />
      <Route path="/home" element={<Home />} />
      <Route path="/halls" element={<Hall />} />
    </Routes>
  );
}

export default App;
