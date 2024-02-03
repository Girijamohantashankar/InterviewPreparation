import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { LoginContext } from "./context/LoginContext";
import Landing from "./Components/Landing/Landing";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Forgetpass from "./Components/Forget/Forgetpass";
import Home from "./Components/Home/Home";
import Thml from "./Components/HTML/Thml";
import Ssc from "./Components/CSS/Ssc";
import Javascript from "./Components/Javascript/Javascript";
import Php from "./Components/PHP/Php";
import Laravel from "./Components/Laravel/Laravel";
import Mysql from "./Components/MySql/Mysql";
import Coding from "./Components/Coding/Coding";


function App() {
  // const [userLogin, setUserLogin] = useState(false);
  // const [modalOpen, setModalOpen] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forget" element={<Forgetpass />}></Route>
        {/* <Route path="/navbar" element={<Navbar />}></Route> */}
        <Route path="/home" element={<Home />}></Route>
        <Route path="/html" element={<Thml />}></Route>
        <Route path="/ssc" element={<Ssc/>}></Route>
        <Route path="/javascript" element={<Javascript/>}></Route>
        <Route path="/php" element={<Php/>}></Route>
        <Route path="/laravel" element={<Laravel/>}></Route>
        <Route path="/mysql" element={<Mysql/>}></Route>
        <Route path="/coding" element={<Coding/>}></Route>
        
        
      </Routes>
      <ToastContainer theme="dark" />
    </BrowserRouter>
  );
}

export default App;
