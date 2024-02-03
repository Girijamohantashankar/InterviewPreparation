import React, { useState, useEffect } from "react";
import loginimage from "../../Images/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberUser, setRememberUser] = useState(false);

  useEffect(() => {
    // Load user credentials from localStorage if "Remember Me" was checked
    const storedEmail = localStorage.getItem("rememberedEmail");
    const storedPassword = localStorage.getItem("rememberedPassword");

    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberUser(true);
    }
  }, []);

  // Toast function
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const isButtonDisabled = !email.trim() || !password.trim();

  const postData = () => {
    if (!emailRegex.test(email)) {
      notifyA("Invalid email");
      return;
    }
    setLoading(true);

    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          notifyA(data.error);
        } else {
          notifyB("Login Successfully");
          console.log(data);
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));

          // Save user credentials to localStorage if "Remember Me" is checked
          if (rememberUser) {
            localStorage.setItem("rememberedEmail", email);
            localStorage.setItem("rememberedPassword", password);
          } else {
            // Clear stored credentials if "Remember Me" is unchecked
            localStorage.removeItem("rememberedEmail");
            localStorage.removeItem("rememberedPassword");
          }

          navigate("/home");
        }
        console.log(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup_image">
          <img src={loginimage} alt="signup" />
        </div>
        <div className="signup_form">
          <form>
            <h1>Login</h1>
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
            <div className="forget_remember">
              <div className="termandcon">
                <input
                  type="checkbox"
                  id="checkbox"
                  checked={rememberUser}
                  onChange={() => setRememberUser(!rememberUser)}
                />
                <label htmlFor="checkbox">Remember Me</label>
              </div>
              <div className="forget-pass">
                <span style={{ paddingLeft: "75px" }}>
                  {/* <Link to={"/forget"}>Forget Password</Link> */}
                  {/* <p>Forget Password</p> */}
                </span>
              </div>
            </div>

            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                postData();
              }}
              className={loading || isButtonDisabled ? "disabled" : ""}
              disabled={loading || isButtonDisabled}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
            <div className="idonthave">
              <span>
                I don't have an account <Link to="/signup"> Signup</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
