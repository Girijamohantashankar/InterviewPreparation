import React, { useState } from "react";
import "./Laravel.css";
import Navbar from "../Navbar/Navbar";

function Laravel() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [completedAccordions, setCompletedAccordions] = useState([]);

  const handleAccordionToggle = (accordionId) => {
    setOpenAccordion((prevAccordion) =>
      prevAccordion === accordionId ? null : accordionId
    );
  };

  const handleMarkAsComplete = (accordionId) => {
    setCompletedAccordions((prevCompleted) => [...prevCompleted, accordionId]);
  };

  const isAccordionComplete = (accordionId) => {
    return completedAccordions.includes(accordionId);
  };
  return (
    <div className="ssc-container">
      <Navbar />
      <h1>
        <u>Basic interview Questions</u>
      </h1>
      <div className="accordian-container">
        <div
          className={`accordion ${isAccordionComplete(1) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion1">
              <button
                className={`accordion-button ${
                  openAccordion === 1 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(1)}
              >
                What is Laravel?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 1 ? "show" : ""
              }`}
              id="htmlAnswer1"
            >
              <div className="accordion-body">
                <p>
                  Laravel is open Source php Fremwork which is used to build a
                  large size of web Application and Laravel is most popular
                  fremwork in PHP. It follows the pattern of MVC (Model view
                  Controller.)
                </p>
                {!isAccordionComplete(1) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(1)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(2) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion2">
              <button
                className={`accordion-button ${
                  openAccordion === 2 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(2)}
              >
                Explain the Benifites Of the Laravel Frework?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 2 ? "show" : ""
              }`}
              id="htmlAnswer2"
            >
              <div className="accordion-body">
                <p>
                  <ol>
                    <li>Laravel is Open Source</li>
                    <li>
                        <span>Laravel is inbuild packages like:</span>
                      <ol>
                        <li>Scout: Its provide the Searching the full text name.</li>
                        <li>Passport: Which is help to Authenticate the API to the server.</li>
                        <li>Cashier: With the help the cashier subscribe base on billing.</li>
                        <li>Socialite: Help the Socialite we can authenticate any social platform like: Google, Facebook, Twitter, etc.</li>
                      </ol>
                    </li>
                    <li>Laravel support the ORM (Object Relation Mapping) with the active record implement.</li>
                    <li>Its build in command line tools.</li>
                  </ol>
                </p>
                {!isAccordionComplete(2) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(2)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(3) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion3">
              <button
                className={`accordion-button ${
                  openAccordion === 3 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(3)}
              >
                Explain Migration in Laravel?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 3 ? "show" : ""
              }`}
              id="htmlAnswer3"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  Laravel Migration used for version control Database. Whcih means in a databse inserting, modifying, share etc are access the web database application through the migration.
                </p>
                {!isAccordionComplete(3) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(3)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(4) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion4">
              <button
                className={`accordion-button ${
                  openAccordion === 4 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(4)}
              >
               Mention the offical pacakge in Laravel?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 4 ? "show" : ""
              }`}
              id="htmlAnswer4"
            >
              <div className="accordion-body">
                <p>
                 <li>Scout: In this package help to searching full text name.</li>
                 <li>Passport: This package help to api authenticate in the Web Application</li>
                 <li>Cashier: Cashier help to subscribing base on billing.</li>
                 <li>Socialite: In this package help to user authenticate the social media platform like: Google, Facebook, Twitter etc..</li>
                </p>
                {!isAccordionComplete(4) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(4)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(5) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion5">
              <button
                className={`accordion-button ${
                  openAccordion === 5 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(5)}
              >
                Soft Delete in Laravel?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 5 ? "show" : ""
              }`}
              id="htmlAnswer5"
            >
              <div className="accordion-body">
                <p>Soft Delete in Laravel means we want to delete the data from the database, but in case this data require the future or bymistake delete a data from the database so this data is not backup. This problem solve the Soft Delete from the database. Its give a timestap for delete the data in the database means it showing the data is delete from date.. but real data is not delete in the database.</p>
                {!isAccordionComplete(5) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(5)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(6) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion6">
              <button
                className={`accordion-button ${
                  openAccordion === 6 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(6)}
              >
                Laravel Facade pattern?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 6 ? "show" : ""
              }`}
              id="htmlAnswer6"
            >
              <div className="accordion-body">
                <p>
                 Laravel Facade paatern give a static interface to classes that are a variable in the web application service container.
                </p>
                {!isAccordionComplete(6) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(6)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(7) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion7">
              <button
                className={`accordion-button ${
                  openAccordion === 7 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(7)}
              >
                What is the service Container?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 7 ? "show" : ""
              }`}
              id="htmlAnswer7"
            >
              <div className="accordion-body">
                <p>
                  Laravel Service Container is a tool which is basically used to create an object.
                </p>
                {!isAccordionComplete(7) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(7)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(8) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion8">
              <button
                className={`accordion-button ${
                  openAccordion === 8 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(8)}
              >
               What is Laravel Events?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 8 ? "show" : ""
              }`}
              id="htmlAnswer8"
            >
              <div className="accordion-body">
                <p>
                  Laravel Events is basically works on when a user register / Login after that the user gets a welcome email or get a message. This is called Laravel Events.
                </p>
                {!isAccordionComplete(8) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(8)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(9) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion9">
              <button
                className={`accordion-button ${
                  openAccordion === 9 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(9)}
              >
                Laravel Query Builder?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 9 ? "show" : ""
              }`}
              id="htmlAnswer9"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                With the help of Laravel Query Builder we fetch the adta from the database. Any type of data inserting and retrive the data that called Query Builder.
                </p>
                <img className="drop-images" style={{ marginBottom: "10px" }} />
                {!isAccordionComplete(9) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(9)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(10) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion10">
              <button
                className={`accordion-button ${
                  openAccordion === 10 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(10)}
              >
               How do you Generate migration?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 10 ? "show" : ""
              }`}
              id="htmlAnswer10"
            >
              <div className="accordion-body">
                <p>
                  With the help of migration command we can generate the Migration,
                  <li>php artisen make: migration create_user_table_name</li>
                  <li>Basically its create a Table.</li>
                </p>
                {!isAccordionComplete(10) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(10)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <h1>
          <u>Advanced Interview Questions</u>
        </h1>

        <div
          className={`accordion ${isAccordionComplete(11) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion11">
              <button
                className={`accordion-button ${
                  openAccordion === 11 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(11)}
              >
                What is the Benifit of the Eager Loader?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 11 ? "show" : ""
              }`}
              id="htmlAnswer11"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  <li>In core php we can use the Lazy loading, its work in n+1 query. This problem to solve in Eager loader, Because it take two arguments in one line. Means if i want 1000 outputs then i use lazy loading , he gives 101 outputs because its works on n+1 query. Buts in case of Eager loader it give in 100 outputs only no extra gives output.</li>
                  <li>Its faster campair to the Lazy Loader.</li>
                </p>
                {!isAccordionComplete(11) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(11)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(12) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion12">
              <button
                className={`accordion-button ${
                  openAccordion === 12 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(12)}
              >
                What is Routes in Laravel?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 12 ? "show" : ""
              }`}
              id="htmlAnswer12"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                In a web Application or Large Web Application we can create multiple api and multiple pages so Laravel Routes hepl to redirect the one route to another Route very easly.
                </p>
                {!isAccordionComplete(12) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(12)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(13) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion13">
              <button
                className={`accordion-button ${
                  openAccordion === 13 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(13)}
              >
                What is Laravel Closer?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 13 ? "show" : ""
              }`}
              id="htmlAnswer13"
            >
              <div className="accordion-body">
                <p>
                Laravel Closer is Anonymous Function. Which is basically used when the function is callback, its pass as a parameter.
                </p>
                {!isAccordionComplete(13) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(13)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`accordion ${isAccordionComplete(14) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion14">
              <button
                className={`accordion-button ${
                  openAccordion === 14 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(14)}
              >
                Laravel Reverse Routing?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 14 ? "show" : ""
              }`}
              id="htmlAnswer14"
            >
              <div className="accordion-body">
                <p>
                  Laravel Reverse Routing means when user click one button or let it login after that he get in to the dashboard route, after that when user click the back button or return then the reverse routing is use in html structure.
                </p>
                {!isAccordionComplete(14) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(14)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`accordion ${isAccordionComplete(15) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion15">
              <button
                className={`accordion-button ${
                  openAccordion === 15 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(15)}
              >
                Auto Loading Classes?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 15 ? "show" : ""
              }`}
              id="htmlAnswer15"
            >
              <div className="accordion-body">
                <p>
                  In core php auto loading classes are loading with the help  of required function. In laravel those classes are required to the run the web application in the browser. Those classes are automatically loaded when the web application run in browser.
                </p>
                {!isAccordionComplete(15) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(15)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`accordion ${isAccordionComplete(16) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion16">
              <button
                className={`accordion-button ${
                  openAccordion === 16 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(16)}
              >
                What is Traits in Laravel?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 16 ? "show" : ""
              }`}
              id="htmlAnswer16"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                 As we Known the multiple inheritance is not supported in Laravel. So this problem is solve by laravel traits. Traits is a separate class. When we required the traits then its simply used or inlcude.
                </p>
                {!isAccordionComplete(16) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(16)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Laravel;
