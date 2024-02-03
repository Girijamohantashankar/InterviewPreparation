import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [userInitial, setUserInitial] = useState("");
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && (storedUser.email || storedUser.name)) {
      const initial = (storedUser.email || storedUser.name)
        .charAt(0)
        .toUpperCase();
      setUserInitial(initial);
    }
  }, []);

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a
            class="navbar-brand"
            href="#"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                backgroundColor: "#ddd",
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                marginRight: "10px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              {userInitial}
            </span>
            <Link to={"/home"}>Interview Preparation</Link>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to={"/home"}>
                  <a class="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <Link to={"/coding"}>
                <a class="nav-link" aria-current="page">
                  Coding
                </a></Link>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">
                  Mock Test
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">
                  Resume
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">
                  Jobs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">
                  Certificate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
