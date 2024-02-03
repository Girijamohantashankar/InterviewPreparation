import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import signupimage from "../../Images/signup.jpg";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  // toast function
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  const postData = () => {
    // checking email
    if (!emailRegex.test(email)) {
      notifyA("Invalid email");
      return;
    } else if (!passRegex.test(password)) {
      notifyA(
        "Password must contain at least 8 characters, including at least 1 number and 1 includes both lower and uppercase letters and special characters for example #,?,!"
      );
      return;
    } else if (password !== cPassword) {
      notifyA("Password and Confirm Password do not match");
      return;
    }
    setLoading(true);
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        cPassword: cPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          notifyA(data.error);
        } else {
          notifyB(data.message);
          navigate("/login");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup_image">
          <img src={signupimage} alt="signup" />
        </div>
        <div className="signup_form">
          <form>
            <h1>Signup</h1>
            <div className="input_field">
              <label htmlFor="name">Full Name</label>
              <input
                type="text" 
                placeholder="Enter Your Full Name"
                name="name"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="input_field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email id"
                name="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="input_field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="input_field">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                placeholder="Enter Your Confirm Password"
                name="cpassword"
                id="cpassword"
                value={cPassword}
                onChange={(e) => {
                  setCPassword(e.target.value);
                }}
              />
            </div>

            <div className="forget_remember">
              <div className="termandcon">
                <input type="checkbox" id="checkbox"  checked={agreeTerms} onChange={() => setAgreeTerms(!agreeTerms)}/>
                <label htmlFor="checkbox">I agree term&condition</label>
              </div>
              <div className="forget-pass">
                {/* <span>Forget Password</span> */}
              </div>
            </div>

            <button
              type="button" 
              className={(!agreeTerms || loading) ? 'disabled' : ''}
              onClick={() => {
                postData();
              }}
              disabled={!agreeTerms ||loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>

            <div className="idonthave">
              <span>
                I have an account <Link to="/login"> Login</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
