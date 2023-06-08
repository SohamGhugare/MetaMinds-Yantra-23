import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/user/SigninPage";
import SignupPage from "./pages/user/SignupPage";
import SigninPageEnlister from "./pages/enlister/SigninPageEnlister";
import SignupPageEnlister from "./pages/enlister/SigninPageEnlister";
import SigninPageVolunteer from "./pages/volunteer/SigninPageVolunteer";
import SignupPageVolunteer from "./pages/volunteer/SigninPageVolunteer";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Hall from "./pages/Hall";
import Enlist from "./pages/Enlist";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setTimeout(() => {
      setFadeIn(true);
    }, 2500);
  }, []);
  return (
    <div className={`app ${fadeIn ? "fade-in" : ""}`}>
      {loading ? (
        <div className="loading-screen">
          <h2 className="loading-text">Venuezy</h2>
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user/login" element={<SigninPage />} />
            <Route path="/user/register" element={<SignupPage />} />
            <Route path="/enlister/login" element={<SigninPageEnlister />} />
            <Route path="/enlister/register" element={<SignupPageEnlister />} />
            <Route path="/volunteer/login" element={<SigninPageVolunteer />} />
            <Route
              path="/volunteer/register"
              element={<SignupPageVolunteer />}
            />
            <Route path="/home" element={<Home />} />
            <Route path="/halls" element={<Hall />} />
            <Route path="/enlist" element={<Enlist />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
