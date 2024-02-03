import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import banner1 from "../../Images/banner1.jpg";
import summary from "../../Images/9.jpg";
import crousel1 from "../../Images/frontend.jpg";
import crousel2 from "../../Images/backend.jpg";
import crousel3 from "../../Images/fullstack.jpg";
// import crousel4 from "../../Images/webdesigner.jpg";
// import crousel5 from "../../Images/webdeveloper.jpg";
import service from "../../Images/service.jpg";
import future from "../../Images/future.png";
function Landing() {
  return (
    <div className="landing-container">
      <div className="banner1">
        <img src={banner1} alt="Banner 1" />
        <Link to="/login">
          <button className="getstarted">Get Started</button>
        </Link>
      </div>

      <div className="summary">
        <div className="summary_image">
          <img src={summary} alt="summary" />
        </div>
        <div className="summary_text">
          <p>
            "Elevate your career with our comprehensive interview preparation
            platform. Tailored for frontend, backend, web, and full-stack
            developers, we offer expert insights, real-world scenarios, and
            interactive resources. Ace your technical interviews confidently and
            land your dream role. Start your journey to success with us today!"
          </p>
          <p>
            "Unlock your full potential with our dynamic interview preparation
            website, designed for aspiring developers. From mastering front-end
            intricacies to back-end brilliance, we provide a holistic approach
            for web and full-stack enthusiasts. Dive into our curated content,
            coding challenges, and strategic guidance to seamlessly navigate
            your technical interviews. Supercharge your career prospects now!"
          </p>
        </div>
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={crousel1} className="d-block mx-auto w-50" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={crousel3} className="d-block mx-auto w-50" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={crousel2} className="d-block mx-auto w-50" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          style={{ filter: "invert(100%)", border: "none" }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          style={{ filter: "invert(100%)", border: "none" }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="review">
        <h1>
          <u>Top Reviews</u>
        </h1>
        <div className="review_cards">
          <div
            className="card text-bg-primary mb-3"
            style={{ maxWidth: "22rem" }}
          >
            <div className="card-header">Deepak Kumar ⭐⭐⭐⭐⭐</div>
            <div className="card-body">
              <h5 className="card-title">Full Stack Developer</h5>
              <p className="card-text">
                "The Full Stack Developer Interview Preparation Course is a
                game-changer. It seamlessly blends frontend and backend
                intricacies, providing a holistic understanding. Real-world
                projects, comprehensive insights, and expert guidance."
              </p>
            </div>
          </div>
          <div
            className="card text-bg-success mb-3"
            style={{ maxWidth: "22rem" }}
          >
            <div className="card-header">Manas Ranjan ⭐⭐⭐⭐⭐</div>
            <div className="card-body">
              <h5 className="card-title">Backend Developer</h5>
              <p className="card-text">
                "The Backend Developer Interview Preparation Course is
                outstanding. It offers comprehensive coverage of backend
                technologies, hands-on coding challenges, and strategic
                insights. An invaluable resource for mastering backend
                development and excelling in technical interviews."
              </p>
            </div>
          </div>
          <div
            className="card text-bg-danger   mb-3"
            style={{ maxWidth: "22rem" }}
          >
            <div className="card-header">Bhabani ⭐⭐⭐⭐⭐</div>
            <div className="card-body">
              <h5 className="card-title">Frontend Developer</h5>
              <p className="card-text">
                "The Frontend Developer Interview Preparation Course is
                exceptional. It provides in-depth insights, real-world
                scenarios, and practical coding challenges, ensuring readiness
                for technical interviews. A must for anyone pursuing a
                successful career in frontend development.".
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="service">
        <h1>
          <u>Services</u>
        </h1>
        <div className="service_list">
          <div className="service_list_image">
            <img src={service} alt="service" />
          </div>
          <div className="service_list_text">
            <li>
              <span>👉</span>
              <span>Expert Insights</span>
            </li>
            <li>
              <span>👉</span>
              <span>Real-world Scenarios</span>
            </li>
            <li>
              <span>👉</span>
              <span>Comprehensive Content</span>
            </li>
            <li>
              <span>👉</span>
              <span>Interactive Resources</span>
            </li>
            <li>
              <span>👉</span>
              <span>Tailored Courses</span>
            </li>
          </div>
        </div>
      </div>
      <div className="Fetures">
        <h1>
          <u>Futures</u>
        </h1>
        <div className="future_section">
          <div className="Fetures_image">
            <img src={future} alt="future" />
          </div>
          <div className="Fetures_text">
            <li>
              <span>🚀</span>
              <span>Continuous Updates</span>
            </li>
            <li>
              <span>🚀</span>
              <span>Community Engagement</span>
            </li>
            <li>
              <span>🚀</span>
              <span>Career Support</span>
            </li>
            <li>
              <span>🚀</span>
              <span>New Courses</span>
            </li>
            <li>
              <span>🚀</span>
              <span>Feedback Integration</span>
            </li>
          </div>
        </div>
      </div>

      <div className="top_companies">
        <h1>
          <u>Top Companies</u>
        </h1>
        <div class="marquee-content">
          <div class="marquee-item">
            <img
              src="https://1000logos.net/wp-content/uploads/2021/09/Cognizant-Logo.jpg"
              alt="im1"
            />
          </div>
          <div class="marquee-item">
            <img
              src="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/05/Capgemini.gif"
              alt="im1"
            />
          </div>
          <div class="marquee-item">
            <img
              src="https://cdn-ukwest.onetrust.com/logos/8d84415b-1b52-4bc4-8d5f-ca9a8eccaf8a/f7db8968-fc22-4620-92ac-dc05c5d2aa15/02460a41-565e-4cac-80a7-449bc8f77a72/logo-infosys.png"
              alt="im1"
            />
          </div>
          <div class="marquee-item">
            <img
              src="https://mma.prnewswire.com/media/379251/4408314/Deloitte_Logo.jpg?p=facebook"
              alt="im1"
            />
          </div>
          <div class="marquee-item">
            <img
              src="https://storiesflistgv2.blob.core.windows.net/stories/2019/03/article_banner_press_release_26_03_19_v1-01.jpg"
              alt="im1"
            />
          </div>
          <div class="marquee-item">
            <img
              src="https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png"
              alt="im1"
            />
          </div>
          <div class="marquee-item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg"
              alt="im1"
            />
          </div>
          <div class="marquee-item">
            <img
              src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg"
              alt="im1"
            />
          </div>
          <div class="marquee-item">
            <img
              src="https://1000logos.net/wp-content/uploads/2021/09/Cognizant-Logo.jpg"
              alt="im1"
            />
          </div>
          <div class="marquee-item">
            <img
              src="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/05/Capgemini.gif"
              alt="im1"
            />
          </div>
          <div class="marquee-item">
            <img
              src="https://cdn-ukwest.onetrust.com/logos/8d84415b-1b52-4bc4-8d5f-ca9a8eccaf8a/f7db8968-fc22-4620-92ac-dc05c5d2aa15/02460a41-565e-4cac-80a7-449bc8f77a72/logo-infosys.png"
              alt="im1"
            />
          </div>
          <div class="marquee-item">
            <img
              src="https://mma.prnewswire.com/media/379251/4408314/Deloitte_Logo.jpg?p=facebook"
              alt="im1"
            />
          </div>
          <div class="marquee-item">
            <img
              src="https://storiesflistgv2.blob.core.windows.net/stories/2019/03/article_banner_press_release_26_03_19_v1-01.jpg"
              alt="im1"
            />
          </div>
          <div class="marquee-item">
            <img
              src="https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png"
              alt="im1"
            />
          </div>
          <div class="marquee-item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg"
              alt="im1"
            />
          </div>
          <div class="marquee-item">
            <img
              src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg"
              alt="im1"
            />
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="logo">
            <p>Interview Preparation</p>
          </div>
          <div className="contact_us">
            <span>
              <u>Contact Us</u>
            </span>
            <li>
              <span>Email: </span> dipuwithstudy@gmail.com
            </li>
            <a href="https://t.me/+rxtUeBKBcxo2Njhl">
              <li>
                <span>Telegram</span>
              </li>
            </a>
          </div>
        </div>
        <p className="copy_right">
          &copy; 2023 InterviewPreparation. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Landing;
