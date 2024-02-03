import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import course1 from "../../Images/html.png";
import course2 from "../../Images/css.png";
import course3 from "../../Images/javascript.png";
import course4 from "../../Images/jquery.png";
import course5 from "../../Images/bootstrap.png";
import course6 from "../../Images/php.png";
import course7 from "../../Images/react.png";
import course8 from "../../Images/angular.png";
import course9 from "../../Images/laravel.png";
import course10 from "../../Images/mysql.png";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="domain">
        <h1>Welcome To Your Dreams</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <img src={course1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">HTML/HTML5</h5>
                <p class="card-text">
                  Basic To Advance Interview Question Answer
                </p>
                <p class="card-text">Freshers To Experience</p>
                <Link to={"/html"}>
                  <button type="button" class="btn btn-success">
                    Start Preparation
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={course2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">CSS/CSS3</h5>
                <p class="card-text">
                  Basic To Advance Interview Question Answer
                </p>
                <p class="card-text">Freshers To Experience</p>
                <Link to={"/ssc"}>
                  <button type="button" class="btn btn-success">
                    Start Preparation
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={course3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Javascript</h5>
                <p class="card-text">
                  Basic To Advance Interview Question Answer
                </p>
                <p class="card-text">Freshers To Experience</p>
                <Link to={"/javascript"}><button type="button" class="btn btn-success">
                  Start Preparation
                </button></Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={course4} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">JQuery</h5>
                <p class="card-text">
                  Basic To Advance Interview Question Answer
                </p>
                <p class="card-text">Freshers To Experience</p>
                <button type="button" class="btn btn-success">
                  Start Preparation
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={course5} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Bootstrap</h5>
                <p class="card-text">
                  Basic To Advance Interview Question Answer
                </p>
                <p class="card-text">Freshers To Experience</p>
                <button type="button" class="btn btn-success">
                  Start Preparation
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={course6} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">PHP</h5>
                <p class="card-text">
                  Basic To Advance Interview Question Answer
                </p>
                <p class="card-text">Freshers To Experience</p>
                <Link to={"/php"}>
                <button type="button" class="btn btn-success">
                  Start Preparation
                </button>
                </Link>
                
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src={course9} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Laravel</h5>
                <p class="card-text">
                  Basic To Advance Interview Question Answer
                </p>
                <p class="card-text">Freshers To Experience</p>
                <Link to={"/laravel"}>
                <button type="button" class="btn btn-success">
                  Start Preparation
                </button>
                </Link>
                
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={course7} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">React Js</h5>
                <p class="card-text">
                  Basic To Advance Interview Question Answer
                </p>
                <p class="card-text">Freshers To Experience</p>
                <button type="button" class="btn btn-success">
                  Start Preparation
                </button>
              </div>
            </div>
          </div>






          <div class="col">
            <div class="card">
              <img src={course10} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">My SQL</h5>
                <p class="card-text">
                  Basic To Advance Interview Question Answer
                </p>
                <p class="card-text">Freshers To Experience</p>
                <Link to={"/mysql"}><button type="button" class="btn btn-success">
                  Start Preparation
                </button></Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={course8} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Angular</h5>
                <p class="card-text">
                  Basic To Advance Interview Question Answer
                </p>
                <p class="card-text">Freshers To Experience</p>
                <button type="button" class="btn btn-success">
                  Start Preparation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
