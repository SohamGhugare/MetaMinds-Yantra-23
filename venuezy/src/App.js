import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/user/SigninPage";
import SignupPage from "./pages/user/SignupPage";
import SigninPageEnlister from "./pages/enlister/SigninPageEnlister";
import SignupPageEnlister from "./pages/enlister/SigninPageEnlister";
import SigninPageVolunteer from "./pages/volunteer/SigninPageVolunteer";
import SignupPageVolunteer from "./pages/volunteer/SigninPageVolunteer";
import Home from "./pages/Home";
import Hall from "./pages/Hall";
import Enlist from "./pages/Enlist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/login" element={<SigninPage />} />
      <Route path="/user/register" element={<SignupPage />} />
      <Route path="/enlister/login" element={<SigninPageEnlister />} />
      <Route path="/enlister/register" element={<SignupPageEnlister />} />
      <Route path="/volunteer/login" element={<SigninPageVolunteer />} />
      <Route path="/volunteer/register" element={<SignupPageVolunteer />} />
      <Route path="/home" element={<Home />} />
      <Route path="/halls" element={<Hall />} />
      <Route path="/enlist" element={<Enlist />} />
    </Routes>
  );
}

export default App;
