import React, { useState } from "react";
import "./Mysql.css";
import Navbar from "../Navbar/Navbar";

function Mysql() {
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
                What is MySQL?
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
                <li>MySql is open source RDBMS Backend by oracle base on SQl.</li>
                <li>Written by c, C++</li>
                <li>MYSql is usally access by PHP.</li>
                 
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
               Why should we use MYSQL?
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
                  <li>MYSQL is Open Source.</li>
                  <li>It is easy and fater the manage and store the data.</li>
                  <li>It is compatiable by all OS.</li>
                  <li>It is very friendly to the PHP.</li>
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
               What are the different types of Tbales in MYSQl?
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
                <ol>
                    <li>InnoDB</li>
                    <li>Heap</li>
                    <li>Merge</li>
                    <li>ISAM</li>
                </ol>
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
                Different Types of MYSQL Joins?
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
                  <ol>
                    <li>Inner Join</li>
                    <li>Cross Join</li>
                    <li>Left Join</li>
                    <li>Right Join</li>
                  </ol>
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
                Different Between DBMS and RDBMS?
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
                      <th>RDBMS</th>
                      <th>DBMS</th>
                    </tr>
                    <tr>
                      <td>It is stand for Relational Dayabase Management System.</td>
                      <td>Database Management System.</td>
                    </tr>
                    <tr>
                      <td>its store the data in a tablar way like Rows and colounm.</td>
                      <td>Its store the data in the database like images, photos, videos or file.</td>
                    </tr>
                    <tr>
                      <td>Its store the data in two dimentinally.</td>
                      <td>
                       Its store the data in a database one dimentionally.
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
               What is the primary Key?
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
                  <li>Basically primary key is a coloumn or group of colounm which are unic.</li>
                  <li>Primary Key not null or empty in the table or colounm its always a unic.</li>
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
                What is foreign Key?
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
                  Foreign key is a coloumn or group of coloumn that reference to the primary key to the anoter Table.
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
                Different Between Delete, Drop, Truncate?
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
                  
                <table>
                    <tr>
                      <th>Delete</th>
                      <th>Drop</th>
                      <th>Truncate</th>
                    </tr>
                    <tr>
                      <td>Delete is basically Delete the data from the rows or coloumn.</td>
                      <td>Drop is deteled the hall table.</td>
                      <td>Truncate is basically use for Deletethe data one coloumn or all coloumn data.</td>
                    </tr>
                    <tr>
                      <td>It is can not Delete the data Structure.</td>
                      <td>It can deleted the hall table and Structure.</td>
                      <td>It also can delete the all coloumn data at a time.</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                      
                      </td>
                      <td>It can not delete the data structure.</td>
                    </tr>
                  </table>
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
                Different between group by and order by ?
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
                <table>
                    <tr>
                      <th>Group By</th>
                      <th>Order By</th>
                   
                    </tr>
                   
                   
                    <tr>
                      <td>Let its for an Example one table contain many type of data like many peoples are working as it fields, some people are working for non tech and some are students. When we Converted the Group of it employees then this technic basically used.</td>
                      <td>
                      Order by basically used to view ot display the output in which order. Order by only can view or display the output.
                      </td>
                    </tr>
                  </table>
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
                Pattern Matching?
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
                  using the "Like", we can matching the data.
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
      </div>
    </div>
  );
}

export default Mysql;
