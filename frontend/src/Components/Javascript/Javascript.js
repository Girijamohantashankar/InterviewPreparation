import React, { useState } from "react";
import "./Javascript.css";
import Navbar from "../Navbar/Navbar";

function Javascript() {
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
                What is Javascript?
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
                  Javascript is a high-level interpreted programming language
                  primarily known for its role in web development. It is
                  commonly used to add interactivity and dybamic behavior to
                  websites. Javascript allows developers to create client-side
                  scripts that run in web browsers, enabling then to manipulate
                  the content of web pages, respond to user actions, and
                  communicate with servers.
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
                What is Ecmascript in Javascript?
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
                  ECMAScript (European Computer Manufacturers Association
                  Script) is a scripting language specification that serves as
                  the foundation for several programming languages, with
                  JavaScript being the most well-known and widely used among
                  them. ECMAScript defines the core features and syntax that a
                  scripting language must have to be considered ECMAScript
                  compliant
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
                What is difference between let ,cons and var?
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
                  <table>
                    <tr>
                      <th>Feature</th>
                      <th>var</th>
                      <th>let</th>
                      <th>const</th>
                    </tr>
                    <tr>
                      <td>Scope</td>
                      <td>
                        var has function scope. It is visible within the entire
                        function in which it is declared. If declared outside
                        any function, it becomes a global variable.
                      </td>
                      <td>
                        let has block scope. It is limited to the block,
                        statement, or expression where it is declare
                      </td>
                      <td>const also has block scope like let</td>
                    </tr>
                    <tr>
                      <td>Hoisting</td>
                      <td>
                        Variables declared with var are hoisted to the top of
                        their scope during the compilation phase. They are
                        hoisted along with their declaration, but not their
                        value.
                      </td>
                      <td>
                        Variables declared with let are hoisted to the top of
                        their block, but they are not initialized until the
                        actual declaration is reached. This leads to the
                        temporal dead zone, where accessing the variable before
                        declaration results in a ReferenceError.
                      </td>
                      <td>
                        Variables declared with const are hoisted to the top of
                        their block, but like let, they are not initialized
                        until the actual declaration is reached. The temporal
                        dead zone also applies to const.
                      </td>
                    </tr>
                    <tr>
                      <td>Reassignment</td>
                      <td>
                        Variables declared with var can be reassigned and
                        updated. They can also be re-declared in the same scope
                        without throwing an error.
                      </td>
                      <td>
                        Variables declared with let can be reassigned, but they
                        cannot be re-declared in the same scope
                      </td>
                      <td>
                        Variables declared with const cannot be reassigned after
                        their initial assignment. However, for objects and
                        arrays, while the variable itself cannot be reassigned,
                        the properties or elements within can be modified.
                      </td>
                    </tr>
                    <tr>
                      <td>Redeclaration</td>
                      <td>
                        Variables declared with var can be re-declared in the
                        same scope without throwing an error.
                      </td>
                      <td>
                        Redeclaration is not allowed for variables declared with
                        let in the same scope.
                      </td>
                      <td>
                        Redeclaration is not allowed for variables declared with
                        const in the same scope.
                      </td>
                    </tr>
                  </table>
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
                What is spread operator, Rest operator , default parameter?
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
                    <h3>
                      <u>Spread Operator(...)</u>
                    </h3>
                    <li>
                      The spread operator (...) is used to expand elements of an
                      array or object.
                    </li>
                    <li>
                      It allows the elements of an iterable (like an array or
                      string) to be expanded in places where multiple arguments
                      (for function calls) or multiple elements (for array
                      literals) are expected.
                    </li>
                  </ol>

                  <ol>
                    <h3>
                      <u>Rest Operator (...)</u>
                    </h3>
                    <li>
                      The rest operator (...) is used to represent an indefinite
                      number of arguments as an array.
                    </li>
                    <li>
                      It is often used in function parameters to collect
                      remaining arguments into a single array.
                    </li>
                  </ol>

                  <ol>
                    <h3>
                      <u>Default Parameters</u>
                    </h3>
                    <li>
                      Default parameters allow you to assign default values to
                      function parameters, which will be used if the
                      corresponding argument is not provided or is undefined.
                    </li>
                    <li>
                      Default values are specified using the assignment operator
                      (=) within the function parameters.
                    </li>
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
                What is deep copy and shallow copy in Javascript?
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
                  <h3>
                    <u>Shallow copy:</u>
                  </h3>
                  <ul>
                    <li>
                      A shallow copy creates a new objects or array, but it does
                      not create copies of nested objects or arrays within the
                      original object or array. Instead, it copies references to
                      the nested objects or arrays.
                    </li>
                    <li>
                      Changes made to the nested objects or array within the
                      copied structure will be reflected in both the original
                      and the copied structure.
                    </li>
                  </ul>
                  <h3>
                    <u>Deep copy:</u>
                  </h3>
                  <ul>
                    <li>
                      A deep copy, on the other hand, creates a new object or
                      array and recursively copies all nested objects or arrays
                      within the original objects or array.
                    </li>
                    <li>
                      Changes made to the nested objects or arrays within the
                      copied structure do not affect original structure, and
                      vice versa.
                    </li>
                  </ul>
                  <h3>Considerations:</h3>
                  <ul>
                    <li>
                      Shallow copies are genarray faster and less
                      resource-intensive than deep copies, but they may lead to
                      unexpected behaviour when dealing with nested structures.
                    </li>
                    <li>
                      Deep copies ensure complete isolation between the original
                      and copied structures but may be less performant for large
                      or complex data structures.
                    </li>
                  </ul>
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
                What is a promise, callback function, async/await in JavaScript?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 6 ? "show" : ""
              }`}
              id="htmlAnswer6"
            >
              <div className="accordion-body">
                <h2>Callback Functions</h2>
                <ul>
                  <li>
                    A callback function is a function passed as an argument to
                    another function and is executed after the completion of a
                    particular task.
                  </li>
                  <li>
                    Callbacks are commonly used in asynchronous programming to
                    handle tasks like fetching data, reading files, or making
                    API calls.
                  </li>
                  <li>
                    Example:
                    <br />
                    <code>
                      function fetchData(callback) &#123;
                      <br />
                      &nbsp;&nbsp;setTimeout(function() &#123;
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;const data = "This is the data.";
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;callback(data);
                      <br />
                      &nbsp;&nbsp;&#125;, 1000);
                      <br />
                      &#125;
                      <br />
                      <br />
                      function processData(data) &#123;
                      <br />
                      &nbsp;&nbsp;console.log("Processing data:", data);
                      <br />
                      &#125;
                      <br />
                      <br />
                      fetchData(processData);
                      <br />
                    </code>
                  </li>
                </ul>

                <h2>Promises</h2>
                <ul>
                  <li>
                    Promises are a more structured way of handling asynchronous
                    operations. A promise represents the eventual completion or
                    failure of an asynchronous operation and allows chaining of
                    multiple operations.
                  </li>
                  <li>
                    Promises have three states: pending, fulfilled(resolved),
                    and rejected.
                  </li>
                  <li>
                    <code>
                      function fetchData() &#123;
                      <br />
                      &nbsp;&nbsp;return new Promise((resolve, reject) =&gt;
                      &#123;
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;setTimeout(function() &#123;
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const data = "This is
                      the data.";
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resolve(data); //
                      Success
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// or
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// reject(new
                      Error("Failed to fetch data")); // Failure
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&#125;, 1000);
                      <br />
                      &nbsp;&nbsp;&#125;);
                      <br />
                      &#125;
                      <br />
                      <br />
                      fetchData()
                      <br />
                      &nbsp;&nbsp;.then(data =&gt;&#123;
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;console.log("Data fetched:",
                      data);
                      <br />
                      &nbsp;&nbsp;&#125;)
                      <br />
                      &nbsp;&nbsp;.catch(error =&gt; &#123;
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;console.error("Error:",
                      error.message);
                      <br />
                      &nbsp;&nbsp;&#125;);
                      <br />
                    </code>
                  </li>
                </ul>

                <h2>Async/Await</h2>
                <ul>
                  <li>
                    async/await is a syntax for writing asynchronous code in a
                    more synchronous-looking manner. It simplifies the use of
                    promises and makes code more readable.
                  </li>
                  <li>
                    The async keyword is used to define a function that returns
                    a promise, and the await keyword is used to pause the
                    execution of the function until the promise is resolved.
                  </li>
                  <li>
                    <code>
                      async function fetchData() &#123;
                      <br />
                      &nbsp;&nbsp;return new Promise(resolve =&gt; &#123;
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;setTimeout(function() &#123;
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const data = "This is
                      the data.";
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resolve(data);
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&#125;, 1000);
                      <br />
                      &nbsp;&nbsp;&#125;);
                      <br />
                      &#125;
                      <br />
                      <br />
                      async function processData() &#123;
                      <br />
                      &nbsp;&nbsp;try &#123;
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;const data = await fetchData();
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;console.log("Data fetched:",
                      data);
                      <br />
                      &nbsp;&nbsp;&#125; catch (error) &#123;
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;console.error("Error:",
                      error.message);
                      <br />
                      &nbsp;&nbsp;&#125;
                      <br />
                      &#125;
                      <br />
                      <br />
                      processData();
                      <br />
                    </code>
                  </li>
                </ul>

                <h2>Comparison</h2>
                <ul>
                  <li>
                    <h4>Callback Function: </h4> Traditional approach can lead
                    to callback hell (nested callbacks) in complex scenarios.
                  </li>
                  <li>
                    <h4>Promise: </h4> A more structured and readable way to
                    handle asynchronous operations helps avoid callback hell.
                  </li>
                  <li>
                    <h4>Async/Await: </h4> A syntax built on top of promises for
                    even more readable and synchronous-like code simplifies
                    error handling using try/catch blocks.
                  </li>
                </ul>
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
        <h1>Advanced Interview Questions</h1>
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
                What is difference between promise and callback in Javascript ?
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
                  <table>
                    <tr>
                      <th>Callback</th>
                      <th>Promise</th>
                    </tr>
                    <tr>
                      <td>
                        Javascript fetchData(callback) &#123; . . . &#125;
                        fetchData(function(data) &#123; . . . &#125;);{" "}
                      </td>
                      <td>
                        Javascript function fetchData() &#123; . . . &#125;
                        fetchData().then(data =&gt; &#123; . . . &#125;);{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>May involve manual error checks and propagation.</td>
                      <td>Built-in error handing with .catch method.</td>
                    </tr>
                    <tr>
                      <td>
                        Asychronous execution, order may be less predictable.
                      </td>
                      <td>
                        More predictable executionflow with .then() and
                        .catch().
                      </td>
                    </tr>
                    <tr>
                      <td>Can lead to callback hell in nested scenarios.</td>
                      <td>
                        supports cleaner composition and chaining of operations.
                      </td>
                    </tr>
                    <tr>
                      <td>Callback are functions passed as arguments.</td>
                      <td>
                        Promises are objects created with the Promise
                        constructor. Returned immediately.
                      </td>
                    </tr>
                  </table>
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
                What is event bubbling and event capturing in Javascript ?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 8 ? "show" : ""
              }`}
              id="htmlAnswer8"
            >
              <div className="accordion-body">
                <h5>Event Bubbling</h5>
                <li>
                  Event bubbling is the default behavior in which an event
                  starts the target element that triggered events and bubbles up
                  through its ancestor in the DOM hierarchy.
                </li>
                <li>
                  The event travles from the innermost element to the outermost
                  ancestor.
                </li>

                <h5>Event Capturing</h5>
                <li>
                  Event capturing is the opposite of event bubbling. In this
                  phase, the event is capure by the outermost ancestor first and
                  then travels down to the target element.
                </li>
                <li>
                  Event capturing is less commonly used than event bubbling.
                </li>

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
                What is higher order function in Javascript?
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
                  In Javascript, a higher-order function is a function that can
                  take one or more functions as arguments, and/or can return a
                  function as its result.Essentially, it treats functions as
                  first-class citizens, allowing them to be used like any other
                  value (such as numbers, strings, or objects).
                </p>
                <code>
                  function higherOrderFunction(callback) &#123;
                  <br />
                  &nbsp;&nbsp;// Some logic here
                  <br />
                  &nbsp;&nbsp;callback();
                  <br />
                  &#125;
                  <br />
                  <br />
                  function myCallback() &#123;
                  <br />
                  &nbsp;&nbsp;console.log("Callback function executed");
                  <br />
                  &#125;
                  <br />
                  <br />
                  higherOrderFunction(myCallback);
                </code>
                <br />
                <br />

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
                Explain different-2 types of function in Javascript ?
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
                  In Javascript, function are a fundamental part of the
                  language, and they play a crucial role in organizing and
                  structuring code.There are several types of function in
                  javascript, each serving different purposes.
                  <p>
                    <h5>Named Functions: </h5> Named functions are defined with
                    a specific name and can be called using that name. They are
                    often declear using the function keyword.
                  </p>
                  <p>
                    <h5>Anonymous Functions (Function Expressions): </h5>{" "}
                    Anonymous functions are function are functions that are
                    defined without a nmae. They are often used in situations
                    where a function is used only once or is passed as an
                    argument to another function. Anonymous functions can be
                    assigned to variables or passed directly as arguments to
                    other functions.
                  </p>
                </p>
                <code>
                  function addNumbers(a, b) &#123;
                  <br />
                  return a + b;
                  <br />
                  &#125;
                  <br />
                  const sum = addNumbers(5, 10);
                  <br />
                  console.log("Sum:", sum);
                  <br />
                  <br />
                  const multiplyNumbers = function(x, y) &#123;
                  <br />
                  return x * y;
                  <br /> &#125;
                  <br />
                  const product = multiplyNumbers(3, 7);
                  <br />
                  console.log("Product:", product);
                  <br />
                  <br />
                  const square = (num) =&gt; num * num;
                  <br />
                  const result = square(4);
                  <br />
                  console.log("Square:", result);
                </code>

                <br />
                <br />
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
                What is arrow function in Javascript?
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
                  Arrow functions are a concise way to write function
                  expressions in JavaScript. They were introduced in ECMAScript
                  6 (ES6) and provide a shorter syntax compared to traditional
                  function expressions. Arrow functions are particularly useful
                  for writing compact and straightforward functions, especially
                  when you need to use anonymous functions or when working with
                  functions that don't require their own binding of the this
                  keyword.
                </p>
                <code>
                  function MyClass() &#123; <br />
                  this.value = 42;
                  <br /> this.method1 = function() &#123; <br />{" "}
                  setTimeout(function() &#123; <br />
                  console.log(this.value); <br /> &#125;, 1000); <br /> &#125;;{" "}
                  <br /> this.method2 = function() &#123; <br /> setTimeout(()
                  =&gt; &#123; <br />
                  console.log(this.value); <br /> &#125;, 1000); <br /> &#125;;{" "}
                  <br /> &#123; <br /> let obj = new MyClass(); <br />{" "}
                  obj.method1(); <br /> obj.method2();
                  <br /> &#125;
                </code>

                <br />
                <br />
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
                Why we use call, apply bind method in Javascript?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 12 ? "show" : ""
              }`}
              id="htmlAnswer12"
            >
              <div className="accordion-body">
                <div>
                  <p>
                    The "call", "apply" and "bind" methods are used to
                    manipulate how a function is called and how the 'this'
                    keyword is treated within the function. These methods are
                    particularly useful in scenarios where you want to control
                    the context (the value of 'this') when invoking a function
                    or pass arguments to a function in a specific way.
                  </p>
                  <ul>
                    <li>Call method</li>
                    <li>apply method</li>
                    <li>bind method</li>
                  </ul>

                  <code>
                    function greet(message, punctuation) &#123;
                    <br />
                    &nbsp;&nbsp;console.log(this.name + " says " + message +
                    punctuation);
                    <br />
                    &#125;
                    <br />
                    const person1 = &#123; name: "Alice" &#125;;
                    <br />
                    const person2 = &#123; name: "Bob" &#125;;
                    <br />
                    // Using 'call' method
                    <br />
                    greet.call(person1, "Hello", "!");
                    <br />
                    greet.call(person2, "Hi", "!");
                    <br />
                    // Using 'apply' method
                    <br />
                    greet.apply(person1, ["Hola", "!"]);
                    <br />
                    greet.apply(person2, ["Bonjour", "!"]);
                    <br />
                    // Using 'bind' method
                    <br />
                    const greetPerson1 = greet.bind(person1, "Hola");
                    <br />
                    const greetPerson2 = greet.bind(person2, "Bonjour");
                    <br />
                    greetPerson1("!");
                    <br />
                    greetPerson2("!");
                    <br />
                  </code>
                </div>
                <br />
                <br />
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
                How many way to create object in Javascript?
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
                  In JavaScript, there are several ways to create objects. Here
                  are some common methods:
                  <ul>
                    <li>Object Literal</li>
                    <li>Constructor Function</li>
                    <li>Object.create</li>
                    <li>class syntax (ES6 and later)</li>
                    <li>Factory Function</li>
                    <li>Singleton Pattern</li>
                  </ul>
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
                What is prototype inheritance in Javascript
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
                  Prototype inheritance is a fundamental concept in JavaScript
                  that allows objects to inherit properties and methods from
                  other objects through a prototype chain. In JavaScript, each
                  object has an associated prototype object, and when a property
                  or method is not found on an object, JavaScript looks up the
                  prototype chain to find the property or method in the
                  prototype of the object.
                </p>
                <ul>
                  <li>Object Prototypes</li>
                  <li>Constructor Functions and Prototypes</li>
                  <li>Inheritance Chain</li>
                  <li>Changing Prototypes Dynamically</li>
                </ul>

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
                What is typescript?
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
                  TypeScript is a superset of JavaScript that adds static typing
                  to the language. It is an open-source programming language
                  developed and maintained by Microsoft. TypeScript compiles to
                  plain JavaScript and can be used wherever JavaScript runs. The
                  main goal of TypeScript is to enhance the development
                  experience by providing features that enable better code
                  organization, maintainability, and collaboration in larger
                  codebases.
                </p>
                <ul>
                  <li>Static Typing</li>
                  <li>Interfaces</li>
                  <li>Enums</li>
                  <li>Classes and Inheritance</li>
                  <li>Type Inference</li>
                  <li>Tooling Support</li>
                </ul>
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
                What are the array method , string method?
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
                  In JavaScript, arrays and strings are two fundamental data
                  types, and they each have their own set of methods that you
                  can use to perform various operations. Here's an overview of
                  some commonly used array and string methods in JavaScript:
                </p>
                <h5>Array Methods:</h5>
                <li>
                  <span>push(): </span> Adds one or more elements to the end of
                  an array.
                </li>
                <li>
                  <span>pop(): </span> Removes the last element from an array.
                </li>
                <li>
                  <span>unshift(): </span> Adds one or more elements to the
                  beginning of an array.
                </li>
                <li>
                  <span>shift(): </span> Removes the first element from an
                  array.
                </li>
                <li>
                  <span>concat(): </span> Combines two or more arrays.
                </li>
                <li>
                  <span>splice(): </span> Changes the contents of an array by
                  removing or replacing existing elements and/or adding new
                  elements.
                </li>
                <li>
                  <span>slice(): </span>Returns a shallow copy of a portion of
                  an array into a new array.
                </li>
                <li>
                  <span>indexOf(): </span> Returns the first index at which a
                  given element can be found in the array.
                </li>
                <li>
                  <span>lastIndexOf(): </span> Returns the last index at which a
                  given element can be found in the array.
                </li>
                <li>
                  <span>forEach(): </span> Calls a function for each element in
                  the array.
                </li>
                <li>
                  <span>map(): </span> Creates a new array with the results of
                  calling a provided function on every element in the array.
                </li>
                <li>
                  <span>filter(): </span>Creates a new array with all elements
                  that pass a test implemented by the provided function.
                </li>
                <li>
                  <span>reduce(): </span>Applies a function against an
                  accumulator and each element in the array (from left to right)
                  to reduce it to a single value.
                </li>
                <h5>String Methods:</h5>
                <li>
                  <span>length: </span>Returns the length of a string.
                </li>
                <li>
                  <span>charAt(index): </span>Returns the character at the
                  specified index.
                </li>
                <li>
                  <span>charCodeAt(index): </span>Returns the Unicode of the
                  character at the specified index.
                </li>
                <li>
                  <span>concat(): </span>Combines two or more strings.
                </li>
                <li>
                  <span>indexOf(): </span>Returns the index within the string of
                  the first occurrence of a specified value.
                </li>
                <li>
                  <span>lastIndexOf(): </span>Returns the index within the
                  string of the last occurrence of a specified value.
                </li>
                <li>
                  <span>substring(start, end): </span>Returns a subset of a
                  string between two indices.
                </li>
                <li>
                  <span>substr(start, length): </span>Returns a subset of a
                  string starting from a specified index up to a specified
                  length.
                </li>
                <li>
                  <span>slice(): </span>Extracts a section of a string and
                  returns it as a new string.
                </li>
                <li>
                  <span>toUpperCase(): </span>Converts a string to uppercase.
                </li>
                <li>
                  <span>toLowerCase(): </span>Converts a string to lowercase.
                </li>
                <li>
                  <span>trim(): </span>Removes whitespace from both ends of a
                  string.
                </li>
                <li>
                  <span>replace(): </span>Searches a string for a specified
                  value or regular expression and replaces it with another
                  value.
                </li>
                <li>
                  <span>split(): </span>Splits a string into an array of
                  substrings based on a specified delimiter.
                </li>

                <br />
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
                What is difference between java and javascript?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 17 ? "show" : ""
              }`}
              id="htmlAnswer17"
            >
              <div className="accordion-body">
                <h4>Key Differences between Java and JavaScript</h4>

                <ul>
                  <li>
                    <strong>Purpose and Platform:</strong>
                    <ul>
                      <li>
                        <strong>Java:</strong> General-purpose, runs on Java
                        Virtual Machine (JVM).
                      </li>
                      <li>
                        <strong>JavaScript:</strong> Primarily for web
                        development, runs in web browsers.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Type:</strong>
                    <ul>
                      <li>
                        <strong>Java:</strong> Statically-typed.
                      </li>
                      <li>
                        <strong>JavaScript:</strong> Dynamically-typed.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Compilation:</strong>
                    <ul>
                      <li>
                        <strong>Java:</strong> Compiled into bytecode for the
                        Java Virtual Machine.
                      </li>
                      <li>
                        <strong>JavaScript:</strong> Interpreted, executed
                        directly by web browsers.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Object-Oriented:</strong>
                    <ul>
                      <li>
                        <strong>Java:</strong> Class-based, fully
                        object-oriented.
                      </li>
                      <li>
                        <strong>JavaScript:</strong> Prototype-based
                        object-oriented.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Concurrency:</strong>
                    <ul>
                      <li>
                        <strong>Java:</strong> Supports multi-threading.
                      </li>
                      <li>
                        <strong>JavaScript:</strong> Traditionally
                        single-threaded, with support for concurrent execution
                        using technologies like Web Workers.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Usage:</strong>
                    <ul>
                      <li>
                        <strong>Java:</strong> Server-side development, mobile
                        applications (Android), large-scale enterprise systems.
                      </li>
                      <li>
                        <strong>JavaScript:</strong> Primarily client-side web
                        development; also used for server-side development with
                        Node.js.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Libraries and Frameworks:</strong>
                    <ul>
                      <li>
                        <strong>Java:</strong> Vast ecosystem, e.g., Spring,
                        Hibernate, Apache Struts.
                      </li>
                      <li>
                        <strong>JavaScript:</strong> Rich ecosystem, e.g.,
                        React, Angular, Vue (front-end), Node.js, Express.js
                        (back-end).
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Community and Ecosystem:</strong>
                    <ul>
                      <li>
                        <strong>Java:</strong> Mature and well-established
                        community with extensive resources.
                      </li>
                      <li>
                        <strong>JavaScript:</strong> Large and active community,
                        especially in web development.
                      </li>
                    </ul>
                  </li>
                </ul>
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
                What is throttling and debouncing in js?
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
                  Throttling and debouncing are two techniques used in
                  JavaScript to control the frequency of execution of a
                  function, particularly in scenarios where the function might
                  be called too often, such as handling user input or responding
                  to frequent events like scrolling or resizing. Both techniques
                  help optimize performance and avoid unnecessary resource
                  consumption.
                </p>
                <h5>Throttling:</h5>
                <p>
                  Throttling limits the rate at which a function is called. It
                  ensures that the function is executed at most once in a
                  specified time window, regardless of how many times it's
                  called during that period.
                </p>
                <p>
                  For example, if a user is scrolling through a webpage, you
                  might use throttling to limit the frequency of a function that
                  calculates positions or triggers updates to improve
                  performance.
                </p>
               <code>
              
        function throttle(func, delay) &#123;
        <br/>
        &nbsp;&nbsp;let canRun = true;
        <br/>
        <br/>
        &nbsp;&nbsp;return function() &#123;
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;if (canRun) &#123;
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;func.apply(this, arguments);
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;canRun = false;
        <br/>
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setTimeout(() =&gt; &#123;
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;canRun = true;
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;, delay);
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&#125;
        <br/>
        &nbsp;&nbsp;&#125;
        <br/>
        <br/>
        // Example usage
        <br/>
        const throttledFunction = throttle(() =&gt; &#123;
        <br/>
        &nbsp;&nbsp;console.log("Throttled function executed.");
        <br/>
        &#125;, 1000);
        <br/>
        <br/>
        // Call the throttled function
        <br/>
        throttledFunction();
    </code><br/>
<br/>
               <h5>Debouncing:</h5>
               <p>Debouncing, on the other hand, ensures that a function is not executed until a certain amount of time has passed since the last invocation. It's useful when you want a function to be triggered only after some time has passed since the last action.</p>
               <p>For instance, when a user is typing in a search input, you might debounce the function responsible for making API calls to avoid firing a request for every keystroke. This prevents excessive API requests and improves the user experience.</p>

               <code>
        function debounce(func, delay) &#123;
        <br/>
        &nbsp;&nbsp;let timeoutId;
        <br/>
        <br/>
        &nbsp;&nbsp;return function() &#123;
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;clearTimeout(timeoutId);
        <br/>
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;timeoutId = setTimeout(() =&gt; &#123;
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;func.apply(this, arguments);
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&#125;, delay);
        <br/>
        &nbsp;&nbsp;&#125;
        <br/>
        &#125;
        <br/>
        <br/>
        // Example usage
        <br/>
        const debouncedFunction = debounce(() =&gt; &#123;
        <br/>
        &nbsp;&nbsp;console.log("Debounced function executed.");
        <br/>
        &#125;, 1000);
        <br/>
        <br/>
        // Call the debounced function
        <br/>
        debouncedFunction();
    </code>
<br/>
<br/>

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
                What is Null and undefined in javascript?
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
                In JavaScript, null and undefined are two special values that represent the absence of a meaningful value. Despite being similar in some contexts, they have distinct use cases.
                </p>
  <h5>undefined:</h5>
  <li>If a variable has been declared but has not been assigned a value, it is undefined.</li>
  <li>If you try to access an object property or array element that does not exist, the result is undefined.</li>
  <li>If a function does not explicitly return a value, it implicitly returns undefined.</li>
  <code>
        let x;
        <br/>
        console.log(x);  // Output: undefined
        <br/>
        <br/>
        let obj = &#123;&#125;;
        <br/>
        console.log(obj.propertyThatDoesNotExist);  // Output: undefined
        <br/>
        <br/>
        function doSomething() &#123;
        <br/>
        &nbsp;&nbsp;// no return statement
        <br/>
        &#125;
        <br/>
        <br/>
        console.log(doSomething());  // Output: undefined
    </code>
    <br/>
        <br/>
        
        <h5>null:</h5>
        <li>null is a deliberate assignment to a variable to indicate the absence of a value or a null object reference.</li>
        <li>It is often used to explicitly signify that a variable, property, or object does not have a value or does not point to any object.</li>
        <code>
        let y = null;
        <br/>
        console.log(y);  // Output: null
    </code>
        
        
        <br/>
        <br/>
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
               What are the falsy values in javascript?
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
                A falsy value is a value that is considered false when encountered in a boolean context. The following values are considered falsy:
                </p><ol>
                  <li>false: The boolean value false itself.</li>
                  <li>0: The number zero.</li>
                  <li>'': (Empty String): An empty string is falsy.</li>
                  <li>null: Represents the absence of any object value.</li>
                  <li>undefined: Denotes a variable that has not been assigned a value.</li>
                  <li>NaN (Not a Number): Represents a value that is not a valid number.</li>
                </ol>
                <p>These values are treated as false when used in conditions or boolean expressions. Any other value not listed above is considered truthy. It's important to be aware of these falsy values when writing conditional statements, as unexpected results can occur if you're not mindful of how falsy values behave.</p>
                <code>
        if (false) &#123;
        <br/>
        &nbsp;&nbsp;console.log("This will not be executed.");
        <br/>
        &#125;
        <br/>
        <br/>
        if (0) &#123;
        <br/>
        &nbsp;&nbsp;console.log("This will not be executed.");
        <br/>
        &#125;
        <br/>
        <br/>
        if ('') &#123;
        <br/>
        &nbsp;&nbsp;console.log("This will not be executed.");
        <br/>
        &#125;
        <br/>
        <br/>
        if (null) &#123;
        <br/>
        &nbsp;&nbsp;console.log("This will not be executed.");
        <br/>
        &#125;
        <br/>
        <br/>
        if (undefined) &#123;
        <br/>
        &nbsp;&nbsp;console.log("This will not be executed.");
        <br/>
        &#125;
        <br/>
        <br/>
        if (NaN) &#123;
        <br/>
        &nbsp;&nbsp;console.log("This will not be executed.");
        <br/>
        &#125;
        <br/>
        <br/>
        // All the conditions above are falsy, so none of the corresponding log statements will be executed.
    </code>


                <br/>
                <br/>
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
                What is execution context, event loop ,stack,
call queue,microtask queue in Javascript
?
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
                The terms "execution context," "event loop," "stack," "callback queue," and "microtask queue" are related to the runtime environment and the order in which code is executed. Let's break down each term:.
                </p>
                <h5>1. Execution Context:</h5>
                <p>An execution context is an abstract concept that holds information about the environment in which the current code is being executed. Each function call in JavaScript creates a new execution context. It includes details such as the function's scope, local variables, the value of this, and a reference to the outer (enclosing) execution context.</p>
                <p>There are three types of execution contexts:</p>

<li><span>Global Execution Context: </span>The default context where the code outside any function is executed.</li>
<li><span>Function Execution Context: </span>Created when a function is called, with its own scope and local variables.</li>
<li><span>Eval Execution Context:</span>Created when code is executed inside an eval function.</li>
<h5>2. Event Loop:</h5>
<p>The event loop is a crucial part of JavaScript's concurrency model. It continuously checks the call stack and the message queue to see if there are any functions waiting to be executed. It ensures that asynchronous operations (like callbacks, timers, and events) are handled in a non-blocking way.</p>
<h5>3. Stack:</h5>
<p>The call stack is a data structure that keeps track of function calls in the code. When a function is called, a new frame is added to the top of the stack, and when a function returns, its frame is removed from the stack. This creates a last-in, first-out (LIFO) order.</p>
<h5>4. Callback Queue (Task Queue):</h5>
<p>The callback queue, often referred to as the task queue, is where callback functions are placed after their associated asynchronous operations complete. These operations could include events, timers, or I/O operations. The event loop monitors the call stack and, when it's empty, takes tasks from the callback queue and pushes them onto the stack for execution.</p>
<h5>5. Microtask Queue:</h5>
<p>The microtask queue (also known as the job queue or microtask queue) is a separate queue for microtasks. Microtasks are tasks that have higher priority than regular tasks in the callback queue and are executed before the next rendering. Promises and process.nextTick in Node.js are examples of operations that create microtasks.</p>
                <br/>
                <br/>
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
               What is setTimeOut and setInterval in Javascript?
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
                setTimeout and setInterval are two functions in JavaScript used for scheduling the execution of code after a specified delay. They are part of the Web APIs and are commonly used for asynchronous programming
                </p>
                <h5>1. setTimeout:</h5>
                <p>The setTimeout function is used to execute a specified function or code snippet after a specified delay (in milliseconds). It allows you to delay the execution of a function, providing a way to schedule code to run in the future.</p>
               
                <code>
        setTimeout(function, delay, param1, param2, ...);
    </code>
    
<li>function: The function to be executed.</li>
<li>delay: The time (in milliseconds) to wait before executing the function.</li>
<li>param1, param2, ...: Optional parameters to pass to the function.</li>

    <code>
        console.log("Start");
        <br/>
        setTimeout(function() &#123;
        <br/>
        &nbsp;&nbsp;console.log("Delayed function executed after 2000 milliseconds");
        <br/>
        &#125;, 2000);
        <br/>
        console.log("End");
    </code>
    <br/>
    <br/>

<h5>2. setInterval:</h5>
<p>The setInterval function is used to repeatedly execute a specified function or code snippet at fixed time intervals.</p>
<code>
        setInterval(function, delay, param1, param2, ...);
    </code>

<li>function: The function to be executed repeatedly.</li>
<li>delay: The time (in milliseconds) between each execution of the function.</li>
<li>param1, param2, ...: Optional parameters to pass to the function.</li>

<code>
        let counter = 0;

        function intervalFunction() &#123;
        <br/>
        &nbsp;&nbsp;console.log("Interval function executed. Counter:", counter);
        <br/>
        &nbsp;&nbsp;counter++;
        <br/>
        <br/>
        &nbsp;&nbsp;if (counter === 5) &#123;
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;clearInterval(intervalId);
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;console.log("Interval stopped after 5 executions.");
        <br/>
        &nbsp;&nbsp;&#125;
        <br/>
        &#125;

        console.log("Start");

        const intervalId = setInterval(intervalFunction, 1000);
    </code>



    <br/>
    <br/>

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
                What is object.seal and object.freeze in
Javascript
?
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
                Object.seal and Object.freeze are two methods in JavaScript that provide different levels of immutability and control over objects.
                </p>

<h5>1. Object.seal:</h5>
<p>The Object.seal method is used to seal an object, preventing the addition or removal of properties and making all existing properties non-configurable. However, it does not prevent changing the values of existing properties if they are writable.</p>
<code>
        const sealedObject = &#123;
        <br/>
        &nbsp;&nbsp;prop1: 10,
        <br/>
        &nbsp;&nbsp;prop2: "Hello"
        <br/>
        &#125;;
        <br/>
        Object.seal(sealedObject);
        <br/>
        sealedObject.prop1 = 20;  // Allowed, changes the value
        <br/>
        sealedObject.prop3 = true;  // Not allowed, property addition
        <br/>

        console.log(sealedObject);  
    </code>
    <br/>

       Output:
    <code>
  
        &#123; prop1: 20, prop2: "Hello" &#125;
    </code>

<h5>2. Object.freeze:</h5>
<p>The Object.freeze method goes a step further than Object.seal. It not only prevents the addition and removal of properties but also makes all existing properties non-configurable and non-writable. This results in a completely immutable object.</p>
<code>
        const frozenObject = &#123;
        <br/>
        &nbsp;&nbsp;prop1: 10,
        <br/>
        &nbsp;&nbsp;prop2: "Hello"
        <br/>
        &#125;;
        <br/>
        Object.freeze(frozenObject);
        <br/>
        frozenObject.prop1 = 20;  // Not allowed, changes not permitted
        <br/>
        frozenObject.prop3 = true;  // Not allowed, property addition
        <br/>
        delete frozenObject.prop2;  // Not allowed, property deletion
        <br/>
        console.log(frozenObject);  
    </code>
    <br/>
      Output: 
    <code>
        &#123; prop1: 10, prop2: "Hello" &#125;
    </code>
<br/>
<br/>
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
                What is difference between map and set in
Javascript?
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
                Map and Set are collections introduced in ECMAScript 6 (ES6) to store and manage data. While they share some similarities, they serve different purposes and have distinct characteristics:
                </p>
                <h3>Map:</h3>
                <li><span>Key-Value Pairs: </span> <li>Map allows you to associate values with keys, creating a collection of key-value pairs.</li><li>Both keys and values can be of any data type, including objects or functions.</li></li>
                <li><span>Order of Entries: </span>Maintains the order of key-value pairs based on the order of insertion.</li>
                <li><span>Duplicate Keys: </span>Allows duplicate keys, and each key can be associated with a different value.</li>
                <li><span>Iteration: </span>Provides methods (forEach, for...of, etc.) for easy iteration over keys, values, or entries.</li>
                <li><span>Size Property: </span>Has a size property that returns the number of key-value pairs in the Map.</li>
                <li><span>Use Cases: </span> Suitable for scenarios where you need to associate values with unique keys and maintain the order of insertion.</li>
                <code>
        let myMap = new Map();
        <br/>
        myMap.set("key1", "value1");
        <br/>
        myMap.set("key2", "value2");
        <br/>
        console.log(myMap.get("key1"));  // Output: "value1"
        <br/>
        console.log(myMap.size);          // Output: 2
    </code>
    <br/>


                <h3>Set:</h3>

                <li><span>Unique Values: </span>Set is designed to store unique values (primitive or object references).</li>
                <li><span>Order of Entries: </span>Maintains the order of insertion for unique values.</li>
                <li><span>Duplicate Values: </span>Does not allow duplicate values; each value in a Set must be unique.</li>
                <li><span>Iteration: </span>Provides methods (forEach, for...of, etc.) for easy iteration over values.</li>
                <li><span>Size Property: </span>Has a size property that returns the number of unique values in the Set.
</li>
                <li><span>Use Cases: </span>Useful when you need to store a collection of distinct values, such as removing duplicates from an array.</li>

                <code>
        let mySet = new Set();
        <br/>
        mySet.add("value1");
        <br/>
        mySet.add("value2");
        <br/>
        mySet.add("value1");  // Duplicate value, ignored
        <br/>
        console.log(mySet.has("value1"));  // Output: true
        <br/>
        console.log(mySet.size);            // Output: 2
    </code>

                <br/>
                <br/>
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
               What is Weakmap and Weakset in Javascript?
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
                 
WeakMap and WeakSet are two additional data structures introduced in ECMAScript 6 (ES6) that are similar to Map and Set but with some key differences, particularly in how they handle object references.
                </p>
                <h4>WeakMap:</h4>
                <ol>
                  <li><span>Keys as Object References: </span> In a WeakMap, keys must be objects, and values can be arbitrary.</li>
                  <li><span>Weak Referencing: </span>Unlike Map, WeakMap holds "weak" references to its keys, which means that if there are no other references to a key, it can be garbage-collected.</li>
                  <li><span>No Iteration: </span> WeakMap does not provide methods for iteration or accessing the full list of keys. This is because the keys are weakly referenced, and the list of keys may change during the lifetime of the WeakMap.</li>
                  <li><span>Use Cases: </span> Useful when you need to associate additional data with objects without preventing those objects from being garbage-collected.</li>
                </ol>
                <code>
        let weakMap = new WeakMap();
        <br/>
        let obj1 = &#123;&#125;;
        <br/>
        <br/>
        weakMap.set(obj1, "value1");
        <br/>
        console.log(weakMap.get(obj1));  // Output: "value1"
        <br/>
        <br/>
        // If obj1 is no longer referenced elsewhere, the entry in the WeakMap can be garbage-collected.
    </code>

                <h4>WeakSet:</h4>
                <li><span>Values as Object References: </span> In a WeakSet, values must be objects (similar to WeakMap).</li>
                <li><span>Weak Referencing: </span> WeakSet holds "weak" references to its values. If there are no other references to a value, it can be garbage-collected.</li>
                <li><span>No Iteration: </span>Similar to WeakMap, WeakSet does not provide methods for iteration or accessing the full list of values.</li>
                <li><span>Use Cases: </span>Useful when you need to create a collection of objects without preventing those objects from being garbage-collected.</li>
                <code>
        let weakSet = new WeakSet();
        <br/>
        let obj1 = &#123;&#125;;
        <br/>
        <br/>
        weakSet.add(obj1);
        <br/>
        console.log(weakSet.has(obj1));  // Output: true
        <br/>
        <br/>
        // If obj1 is no longer referenced elsewhere, it can be garbage-collected from the WeakSet.
    </code>

<h4>Important Note:
</h4>
<p>Both WeakMap and WeakSet are specifically designed for scenarios where you want to associate additional data with objects without preventing those objects from being collected by the garbage collector. They are not suitable for use cases where you need to iterate over the keys or values, as their contents may change dynamically during program execution due to garbage collection.</p>
                <br/>
                <br/>
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
                What is sessionStorage, localStorage , cookie?
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
                  sessionStorage, localStorage, and cookies are storage mechanisms in web development that allow you to store data on the client-side. Each has its own characteristics and use cases.
                </p>
<h4>1. sessionStorage:</h4>
<li><span>Scope: </span> Limited to the duration of a page session. Data stored in sessionStorage is available as long as the browser or tab is open.</li>
<li><span>Storage Limit: </span>Typically limited to 5-10 MB, depending on the browser.</li>
<li><span>Data Persistence: </span>Cleared when the session ends (when the browser or tab is closed).</li>
<li><span>Usage: </span> Suitable for temporary data that should be available only during the current session.</li>
<li><span>Access: </span>Data stored in sessionStorage is accessible only within the same tab or window.</li>

<code>
        // Store data
        <br/>
        sessionStorage.setItem("key", "value");
        <br/>
        <br/>
        // Retrieve data
        <br/>
        const storedValue = sessionStorage.getItem("key");
        <br/>
        console.log(storedValue);  // Output: "value"
    </code>



<br/>
<h4>2. localStorage:</h4>

<li><span>Scope: </span> Persists across browser sessions and tabs/windows.</li>
<li><span>Storage Limit: </span>Typically limited to 5-10 MB, depending on the browser.</li>
<li><span>Data Persistence: </span>Remains stored even after the browser is closed and reopened.</li>
<li><span>Usage: </span>Suitable for data that needs to persist across sessions and tabs, such as user preferences or settings.</li>
<li><span>Access: </span>Data stored in localStorage is accessible across tabs and windows of the same browser.</li>

<code>
        // Store data
        <br/>
        localStorage.setItem("key", "value");
        <br/>
        <br/>
        // Retrieve data
        <br/>
        const storedValue = localStorage.getItem("key");
        <br/>
        console.log(storedValue);  // Output: "value"
    </code>


<br/>
<h4>3. Cookies:</h4>
<li><span>Scope: </span>Can be set with different expiration times, ranging from session cookies (lasting until the browser is closed) to persistent cookies (lasting for a specified period).</li>
<li><span>Storage Limit: </span> Limited to about 4 KB per cookie.</li>
<li><span>Data Persistence: </span>Persistence depends on the cookie's expiration time.</li>
<li><span>Usage: </span>Commonly used for storing small pieces of data, such as user authentication tokens.</li>
<li><span>Access: </span>Cookies can be accessed by both server and client-side scripts. They are sent with every HTTP request to the associated domain.</li>
<code>
        // Set a cookie
        <br/>
        document.cookie = "key=value; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/";
        <br/>
        <br/>
        // Retrieve cookies
        <br/>
        const cookies = document.cookie;
        <br/>
        console.log(cookies);
    </code>


<br/>
<br/>

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
        {/* <h1>Javascript Interview Practical/Coding Question</h1> */}
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
                 Write a program to sort an array?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 27 ? "show" : ""
              }`}
              id="htmlAnswer27"
            >
              <div className="accordion-body">
              <code>
        function bubbleSort(arr) &#123;
        <br/>
        &nbsp;&nbsp;const n = arr.length;
        <br/>
        <br/>
        &nbsp;&nbsp;for (let i = 0; i &lt; n - 1; i++) &#123;
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;for (let j = 0; j &lt; n - i - 1; j++) &#123;
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Compare adjacent elements
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (arr[j] &gt; arr[j + 1]) &#123;
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Swap if they are in the wrong order
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const temp = arr[j];
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[j] = arr[j + 1];
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[j + 1] = temp;
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
        <br/>
        &nbsp;&nbsp;&#125;
        <br/>
        &#125;
        <br/>
        <br/>
        // Example usage
        <br/>
        const unsortedArray = [64, 25, 12, 22, 11];
        <br/>
        const sortedArray = bubbleSort(unsortedArray.slice());
        <br/>
        <br/>
        console.log("Unsorted Array:", unsortedArray);
        <br/>
        console.log("Sorted Array:", sortedArray);
    </code>
    <br/>
    <br/>
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
                What is use of json.stringify and json parse()
method in Javascript
?
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
                JSON.stringify and JSON.parse are two methods used for working with JSON (JavaScript Object Notation), which is a lightweight data interchange format. These methods facilitate the conversion of JavaScript objects to JSON strings (JSON.stringify) and the parsing of JSON strings into JavaScript objects (JSON.parse).
                </p>
                <h4>1. JSON.stringify:</h4>
<p>The JSON.stringify method is used to convert a JavaScript object into a JSON string. This is particularly useful when you want to send data to a server or store it in a file, as JSON is a widely supported format for data exchange.</p>
<code>
        const person = &#123;
        <br/>
        &nbsp;&nbsp;name: "John",
        <br/>
        &nbsp;&nbsp;age: 30,
        <br/>
        &nbsp;&nbsp;city: "New York"
        <br/>
        &#125;;

        const jsonString = JSON.stringify(person);
<br/>
        console.log(jsonString);
        <br/>
        Output: "name":"John","age":30,"city":"New York"
    </code>

                <br/>
                <br/>
<h4>2. JSON.parse:</h4>
<p>The JSON.parse method is used to parse a JSON string and convert it into a JavaScript object. This is useful when receiving data from a server or reading data from a file in JSON format.</p>
<code>
        const jsonString = '&#123;"name":"John","age":30,"city":"New York" &#125;';
<br/>
        const person = JSON.parse(jsonString);
<br/>
        console.log(person);
        <br/>
         Output: &#123; name: 'John', age: 30, city: 'New York' &#125;
    </code>

                <br/>
                <br/>
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
                What is the transition property used for in CSS?
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
                  The transition property is used to create smooth transitions
                  between different property values over a specified duration.
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
                What is the difference between margin and padding in CSS?
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
                  margin is the space outside the border, while padding is the
                  space inside the border.
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
        <h1>
          <u>Responsive Design and CSS3</u>
        </h1>
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
                What is responsive design, and how can it be achieved in CSS?
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
                  Responsive design is an approach to web design that makes web
                  pages render well on various devices and window or screen
                  sizes. It can be achieved using media queries and flexible
                  grid layouts.
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
                Explain the purpose of media queries in CSS.?
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
                  Media queries allow you to apply CSS rules based on
                  characteristics of the device, such as its width, height, and
                  resolution.
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
                What is the CSS @media rule used for?
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
                  The @media rule is used to apply different styles for
                  different devices or screen sizes.
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
                Explain the concept of CSS3 animations.
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
                  CSS3 animations allow you to create animations using
                  keyframes, enabling smoother transitions between styles.
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
        <div
          className={`accordion ${isAccordionComplete(35) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion35">
              <button
                className={`accordion-button ${
                  openAccordion === 35 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(35)}
              >
                What is the purpose of the transform property in CSS?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 35 ? "show" : ""
              }`}
              id="htmlAnswer35"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  The transform property applies a 2D or 3D transformation to an
                  element. It includes functions like translate(), rotate(),
                  scale(), and more.
                </p>
                {!isAccordionComplete(35) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(35)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(36) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion36">
              <button
                className={`accordion-button ${
                  openAccordion === 36 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(36)}
              >
                How does the border-radius property work in CSS?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 36 ? "show" : ""
              }`}
              id="htmlAnswer36"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  The border-radius property rounds the corners of an element.
                  It can take one to four values to define different radii for
                  each corner.
                </p>
                {!isAccordionComplete(36) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(36)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(37) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion37">
              <button
                className={`accordion-button ${
                  openAccordion === 37 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(37)}
              >
                What are CSS pseudo-elements? Provide examples.
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 37 ? "show" : ""
              }`}
              id="htmlAnswer37"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  Pseudo-elements are used to style specific parts of an
                  element. Examples include ::before and ::after.
                </p>
                {!isAccordionComplete(37) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(37)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(38) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion38">
              <button
                className={`accordion-button ${
                  openAccordion === 38 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(38)}
              >
                Explain the purpose of the rgba() color function.
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 38 ? "show" : ""
              }`}
              id="htmlAnswer38"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  The rgba() color function allows you to specify a color using
                  red, green, blue values along with an alpha channel for
                  transparency.
                </p>
                {!isAccordionComplete(38) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(38)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(39) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion39">
              <button
                className={`accordion-button ${
                  openAccordion === 39 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(39)}
              >
                What is the purpose of the rem unit in CSS?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 39 ? "show" : ""
              }`}
              id="htmlAnswer39"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  The rem unit represents the font-size of the root element. It
                  allows for consistent sizing relative to the root font size.
                </p>
                {!isAccordionComplete(39) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(39)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(40) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion40">
              <button
                className={`accordion-button ${
                  openAccordion === 40 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(40)}
              >
                Explain the flexbox layout model in CSS.
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 40 ? "show" : ""
              }`}
              id="htmlAnswer40"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  Flexbox is a one-dimensional layout model that provides an
                  efficient way to distribute space among items in a container,
                  even when their size is unknown or dynamic.
                </p>
                {!isAccordionComplete(40) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(40)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <h1>
          <u>Advanced CSS Concepts</u>
        </h1>
        <div
          className={`accordion ${isAccordionComplete(41) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion41">
              <button
                className={`accordion-button ${
                  openAccordion === 41 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(41)}
              >
                What is CSS specificity, and how is it calculated?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 41 ? "show" : ""
              }`}
              id="htmlAnswer41"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  CSS specificity is a measure of how specific a selector is. It
                  is calculated based on the number of ID, class, and element
                  selectors in a rule.
                </p>
                {!isAccordionComplete(41) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(41)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(42) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion42">
              <button
                className={`accordion-button ${
                  openAccordion === 42 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(42)}
              >
                Explain the difference between inline-block and inline-table in
                CSS?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 42 ? "show" : ""
              }`}
              id="htmlAnswer42"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  inline-block allows an element to be displayed as an
                  inline-level block container, while inline-table allows an
                  element to be displayed as an inline-level table container.
                </p>
                {!isAccordionComplete(42) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(42)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(43) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion43">
              <button
                className={`accordion-button ${
                  openAccordion === 43 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(43)}
              >
                How does the currentColor keyword work in CSS?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 43 ? "show" : ""
              }`}
              id="htmlAnswer43"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  The currentColor keyword is used to set the color property to
                  the computed value of the color property of the element.
                </p>
                {!isAccordionComplete(43) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(43)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(44) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion44">
              <button
                className={`accordion-button ${
                  openAccordion === 44 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(44)}
              >
                What is the purpose of the unicode-bidi property in CSS?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 44 ? "show" : ""
              }`}
              id="htmlAnswer44"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  The unicode-bidi property sets the handling of bidirectional
                  text, such as right-to-left or left-to-right.
                </p>
                {!isAccordionComplete(44) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(44)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(45) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion45">
              <button
                className={`accordion-button ${
                  openAccordion === 45 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(45)}
              >
                Explain the visibility: collapse; property in CSS.?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 45 ? "show" : ""
              }`}
              id="htmlAnswer45"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  The visibility: collapse; property is used with table elements
                  to collapse table rows or columns.
                </p>
                {!isAccordionComplete(45) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(45)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(46) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion46">
              <button
                className={`accordion-button ${
                  openAccordion === 46 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(46)}
              >
                What is the purpose of the attr() function in CSS?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 46 ? "show" : ""
              }`}
              id="htmlAnswer46"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  The attr() function is used to retrieve the value of an
                  attribute of the selected element and use it in the style
                  sheet.
                </p>
                {!isAccordionComplete(46) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(46)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`accordion ${isAccordionComplete(47) ? "completed" : ""}`}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="htmlQuestion47">
              <button
                className={`accordion-button ${
                  openAccordion === 47 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionToggle(47)}
              >
                Explain the concept of stacking contexts in CSS.?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 47 ? "show" : ""
              }`}
              id="htmlAnswer47"
            >
              <div className="accordion-body">
                <p>
                  {" "}
                  Stacking contexts are a set of layers in a webpage. Elements
                  within the same stacking context are rendered together, and a
                  stacking context can be formed by several factors, such as
                  `position: absolute/f
                </p>
                {!isAccordionComplete(47) && (
                  <button
                    className="mark-complete-btn btn btn-primary"
                    type="button"
                    onClick={() => handleMarkAsComplete(47)}
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

export default Javascript;
