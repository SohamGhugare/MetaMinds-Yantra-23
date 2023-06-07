import {Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/user/SigninPage";
import SignupPage from "./pages/user/SignupPage";
import SigninPageDoc from "./pages/enlister/SigninPage";
import SignupPageDoc from "./pages/enlister/SignupPage";


function App() {
  return (
   
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/user/login" element={<SigninPage/>}/>
      <Route path="/user/register" element={<SignupPage/>}/>
      <Route path="/enlister/login" element={<SigninPageDoc/>}/>
      <Route path="/enlister/register" element={<SignupPageDoc/>}/>
    </Routes>
  
  );
}

export default App;