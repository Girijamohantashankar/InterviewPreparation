import React, { useState } from "react";
import "./Php.css";
import Navbar from "../Navbar/Navbar";

function Php() {
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
                What is Php?
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
                  Php Stands for Haypertext Preprocessor. Which is basically
                  used for backend side or connect to the server side. Using the
                  Php we cna manage the backend data.
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
                Expalin the data Types in PHP
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
                  In PHP Many Types of data Types :
                  <ol>
                    <li>String</li>
                    <li>Interger</li>
                    <li>Float</li>
                    <li>Boolean</li>
                    <li>Null</li>
                    <li>Object</li>
                    <li>Array</li>
                    <li>Resource</li>
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
                What is PEAR in PHP?
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
                  PEAR Stands for PHP Extension And Application Respository. It
                  is a Freamwork and Respository which are help to create
                  resuable components and libary code spinppents.
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
                PHP is case-Sensetive?
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
                  Php is a pertially case-Sensetive Means In case of varibales,
                  php is case-sensetive and Function, class php is not a
                  case-sensetive.
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
                How "echo" and "Print" is Differents?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 5 ? "show" : ""
              }`}
              id="htmlAnswer5"
            >
              <div className="accordion-body">
                <p>
                  <table>
                    <tr>
                      <th>echo</th>
                      <th>print</th>
                    </tr>
                    <tr>
                      <td>It can output multiple String</td>
                      <td>It can only output single String</td>
                    </tr>
                    <tr>
                      <td>It no return Value or it can empty</td>
                      <td>It return value 1</td>
                    </tr>
                    <tr>
                      <td>It is faster than the Print</td>
                      <td>
                        It is slower compair the echo because its return value.
                      </td>
                    </tr>
                  </table>
                </p>
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
                What is the correct ways to write the Variables?
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
                  Correct ways to write a varibales give starting latters or
                  "_". You can not write the variables name like "$54var". This
                  is the worng way to write a varibales in PHP.
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
                Name of the some Popular Freamwork in Php?
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
                  PHP Popular Freamwork:
                  <ol>
                    <li>Laravel</li>
                    <li>CakePhp</li>
                    <li>Symfony</li>
                    <li>CodeIgniter</li>
                  </ol>
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
                How to check if a defined variable is NUll?
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
                  In Php "isset()" used to check the variables is null or not.
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
                How are object in php are passed?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 9 ? "show" : ""
              }`}
              id="htmlAnswer9"
            >
              <div className="accordion-body">
                <p> Object in php are passed by value.</p>
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
                How to display output directly to the browser?
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
                  To display the output directly in the browser using this
                  special tags &lt;?= and ?&gt;.
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
                What is defined() used for in php?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 11 ? "show" : ""
              }`}
              id="htmlAnswer11"
            >
              <div className="accordion-body">
                <p> Defined() function is used for declear the constant.</p>
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
                Explain the difference between ID selector and class selector?
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
                  An ID selector is used to select a single, unique element,
                  while a class selector is used to select multiple elements
                  with the same class
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
                What is the constant() used for?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 13 ? "show" : ""
              }`}
              id="htmlAnswer13"
            >
              <div className="accordion-body">
                <p> Constant return the value of constant.</p>
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
                Is multiple inheritance support in php?
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
                  {" "}
                  In Php not support the multiple inheritance, its only support
                  the single inheritance which can be extended from only class
                  using the keywords extend.
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
                What are the different types of loops in Php?
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
                  {" "}
                  In php there are 4 types of Loops.
                  <ol>
                    <li>For Loop</li>
                    <li>For each Loop</li>
                    <li>While Loop</li>
                    <li>do while Loop</li>
                  </ol>
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
                How to concatenate two strings in Php?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 16 ? "show" : ""
              }`}
              id="htmlAnswer16"
            >
              <div className="accordion-body">
                <p> To Concatenate the two string using the "." operator.</p>
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
        <div
          className={`accordion ${isAccordionComplete(17) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion17">
              <button
                className={`accordion-button ${
                  openAccordion === 17 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(17)}
              >
                What is the purpose of the :first-child and :last-child
                pseudo-classes?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 17 ? "show" : ""
              }`}
              id="htmlAnswer17"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  :first-child selects the first child of its parent, and
                  :last-child selects the last child of its parent.
                </p>
                {!isAccordionComplete(17) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(17)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(18) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion18">
              <button
                className={`accordion-button ${
                  openAccordion === 18 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(18)}
              >
                What are the Super Gloabal Variable in PHP?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 18 ? "show" : ""
              }`}
              id="htmlAnswer18"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  Some Predefined variables in PHP are known as Global Variable.
                  Which are accessiable from any function or class.
                </p>
                {!isAccordionComplete(18) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(18)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`accordion ${isAccordionComplete(19) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion19">
              <button
                className={`accordion-button ${
                  openAccordion === 19 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(19)}
              >
                Name some common Appliaction in PHP?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 19 ? "show" : ""
              }`}
              id="htmlAnswer19"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  <ul>
                    <li>System Function</li>
                    <li>Form Handling</li>
                    <li>Crud: Create, Read, Update, Delete</li>
                    <li>Accessing cookies variables and set cookies.</li>
                    <li>Data encryption.</li>
                  </ul>
                </p>
                {!isAccordionComplete(19) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(19)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`accordion ${isAccordionComplete(20) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion20">
              <button
                className={`accordion-button ${
                  openAccordion === 20 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(20)}
              >
                Different between $variable and $variable?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 20 ? "show" : ""
              }`}
              id="htmlAnswer20"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  <ul>
                    <li>
                      $Variable: Single $variable is a normal variable whcih is
                      basically store the data.
                    </li>
                    <li>
                      $$variable: Double $$variable is reference variable of
                      variable.
                    </li>
                    <li>Example: $Hello = " Welcome to my website";</li>
                    <li>$var = "Hello";</li>
                    <li>echo $var. " " .$$var;</li>
                    <li>output: Hello Welcome to my website</li>
                  </ul>
                </p>
                {!isAccordionComplete(20) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(20)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(21) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion21">
              <button
                className={`accordion-button ${
                  openAccordion === 21 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(21)}
              >
                Different between "GET" and "POST"?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 21 ? "show" : ""
              }`}
              id="htmlAnswer21"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  <ul>
                    <li>
                      <u>GET Methods:</u>
                    </li>
                    <li>
                      This methods is basically send the user form data through
                      the url.
                    </li>
                    <li>
                      This methods is not secure because this methods send the
                      data using the url.
                    </li>
                    <li>
                      <u>POST Methods:</u>
                    </li>
                    <li>
                      This methods also send user form data suing the Http.
                    </li>
                    <li>Which is more secure then the GET Methods.</li>
                  </ul>
                </p>
                {!isAccordionComplete(21) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(21)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(22) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion22">
              <button
                className={`accordion-button ${
                  openAccordion === 22 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(22)}
              >
                How to connect the MYSQL database in PHP?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 22 ? "show" : ""
              }`}
              id="htmlAnswer22"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  <ul>
                    <li>Create 3 variable Like:</li>
                    <li>$serverName: localhost;</li>
                    <li>$userName: Dipu;</li>
                    <li>$password: 1234</li>
                  </ul>
                  <p>$conn = new mysql($serverName, $userName, $password)</p>
                </p>
                {!isAccordionComplete(22) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(22)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(23) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion23">
              <button
                className={`accordion-button ${
                  openAccordion === 23 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(23)}
              >
                What does final class and final method mean in PHP?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 23 ? "show" : ""
              }`}
              id="htmlAnswer23"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  Final class final methpods means basoically whcih class is not
                  extended.
                </p>
                {!isAccordionComplete(23) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(23)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(24) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion24">
              <button
                className={`accordion-button ${
                  openAccordion === 24 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(24)}
              >
                Different between Overloading and Overrideing?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 24 ? "show" : ""
              }`}
              id="htmlAnswer24"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  <li>Overloading:</li>
                  <li>
                    Overloading means when same function is used a another
                    function as parameter in a function is called Overloading.
                  </li>
                  <li>Overriding:</li>
                  <li>
                    Overriding is basically when the same function name and
                    class are used in a parent child to change behavior.
                  </li>
                </p>
                {!isAccordionComplete(24) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(24)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <h1>Advanced Interview Questions</h1>
        <div
          className={`accordion ${isAccordionComplete(25) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion25">
              <button
                className={`accordion-button ${
                  openAccordion === 25 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(25)}
              >
                What is the use of the trait keyword in PHP?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 25 ? "show" : ""
              }`}
              id="htmlAnswer25"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  Traits are a mechanism for code reuse in signle inheritance
                  language such as PHP. They are similar to classes but intended
                  to group functionality in a fine-grained and consistent way.
                </p>
                {!isAccordionComplete(25) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(25)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(26) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion26">
              <button
                className={`accordion-button ${
                  openAccordion === 26 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(26)}
              >
                Expalin the different between "mysql" and "PDO" in PHP?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 26 ? "show" : ""
              }`}
              id="htmlAnswer26"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  Both "mysql" and "PDO" are database access layers providing as
                  set of function for interacting with database. However, "PDO"
                  is more database-agnostic and supports twelve diffrenet
                  database systems, while "mysql" is MYSQL-specific. "PDO" also
                  provides consistent interface for differentdatabses, making it
                  easier to switch between them.
                </p>
                {!isAccordionComplete(26) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(26)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(27) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion27">
              <button
                className={`accordion-button ${
                  openAccordion === 27 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(27)}
              >
                What are anonymous classes in PHP?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 27 ? "show" : ""
              }`}
              id="htmlAnswer27"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  Anonymous classes were introduced in PHP 7 and allow you to
                  instantiate a class on the fly without explicitly defining it.
                  They are useful for simple, one-off objects.
                </p>
                {!isAccordionComplete(27) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(27)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(28) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion28">
              <button
                className={`accordion-button ${
                  openAccordion === 28 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(28)}
              >
                Explain the concept of autoloading in PHP?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 28 ? "show" : ""
              }`}
              id="htmlAnswer28"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  Autoloading is a feature in PHP that allows classes to be
                  loaded automatically when they are needed, without the need
                  for explicit require or include statements. The
                  spl_autoload_register function is commonly used to register
                  autoloader functions.
                </p>
                {!isAccordionComplete(28) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(28)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(29) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion29">
              <button
                className={`accordion-button ${
                  openAccordion === 29 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(29)}
              >
                How does PHP handle sessions?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 29 ? "show" : ""
              }`}
              id="htmlAnswer29"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  PHP uses a session mechanism to preserve data across
                  subsequent HTTP requests. The session data is typically stored
                  on the server, and a session identifier is sent to the client
                  as a cookie. This identifier is then used to retrieve the
                  session data on subsequent requests.
                </p>
                {!isAccordionComplete(29) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(29)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(30) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion30">
              <button
                className={`accordion-button ${
                  openAccordion === 30 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(30)}
              >
                What is the purpose of the yield keyword in PHP?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 30 ? "show" : ""
              }`}
              id="htmlAnswer30"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  "yield" is used in PHP to implement generators. Generators
                  allow you to iterate over a potentially large set of data
                  without needing to load the entire set into memory. The
                  generator function can pause its execution and later resume
                  it, allowing for more memory-efficient processing.
                </p>
                {!isAccordionComplete(30) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(30)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(31) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion31">
              <button
                className={`accordion-button ${
                  openAccordion === 31 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(31)}
              >
                Explain the concept of dependency injection in PHP?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 31 ? "show" : ""
              }`}
              id="htmlAnswer31"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  Dependency injection is a design pattern where a class
                  receives its dependencies from the outside rather than
                  creating them itself. This can be achieved through constructor
                  injection, method injection, or setter injection. Dependency
                  injection helps in writing more modular and testable code.
                </p>
                {!isAccordionComplete(31) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(31)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(32) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion32">
              <button
                className={`accordion-button ${
                  openAccordion === 32 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(32)}
              >
                What is the use of the finally block in a try-catch-finally
                statement?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 32 ? "show" : ""
              }`}
              id="htmlAnswer32"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  The finally block is used to specify code that should be
                  executed regardless of whether an exception is thrown or
                  caught. It provides a way to ensure that certain cleanup or
                  finalization steps are taken, making it useful for tasks such
                  as closing database connections or releasing resources.
                </p>
                {!isAccordionComplete(32) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(32)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(33) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion33">
              <button
                className={`accordion-button ${
                  openAccordion === 33 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(33)}
              >
                What is OPCache in PHP?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 33 ? "show" : ""
              }`}
              id="htmlAnswer33"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  OPCache is a bytecode cache for PHP that improves performance
                  by storing precompiled script bytecode in shared memory,
                  eliminating the need for PHP to load and parse scripts on each
                  request. It is commonly used to significantly reduce the
                  execution time of PHP scripts.
                </p>
                {!isAccordionComplete(33) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(33)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(34) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion34">
              <button
                className={`accordion-button ${
                  openAccordion === 34 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(34)}
              >
                Explain the concept of namespaces in PHP?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 34 ? "show" : ""
              }`}
              id="htmlAnswer34"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  Namespaces are a way to organize code in PHP to avoid naming
                  conflicts. They allow you to encapsulate items, such as
                  classes and functions, under a specific name, preventing
                  naming collisions in larger projects. Namespaces are declared
                  using the namespace keyword.
                </p>
                {!isAccordionComplete(34) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(34)}
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

export default Php;
