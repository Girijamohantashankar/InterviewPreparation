import React, { useState } from "react";
import "./Thml.css";
import Navbar from "../Navbar/Navbar";
import comment from "../../Images/comment.jpg";
import head from "../../Images/head.jpg";

function Thml() {
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
    <div>
      <Navbar />
      <div className="html-container">
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
                  What does HTML Stand for?
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse ${
                  openAccordion === 1 ? "show" : ""
                }`}
                id="htmlAnswer1"
              >
                <div className="accordion-body">
                  <p>Hyper Text Markup Language</p>
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
                  What is the purpose of HTML tags?
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
                    HTML tags are used to define the structure of a web page by
                    marking different elements.
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
                  How is a line break represented in HTML?
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse ${
                  openAccordion === 3 ? "show" : ""
                }`}
                id="htmlAnswer3"
              >
                <div className="accordion-body">
                  <p>'br' tag</p>
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
                  Explain the difference between HTML and XHTML.?
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
                    XHTML is a stricter and more XML-based version of HTML,
                    enforcing syntax rules.
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
                  What is the purpose of the alt attribute in the 'img' tag?
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
                    The alt attribute provides alternative text for an image,
                    displayed if the image cannot be loaded.
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
                  How do you create an ordered list in HTML?
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse ${
                  openAccordion === 6 ? "show" : ""
                }`}
                id="htmlAnswer6"
              >
                <div className="accordion-body">
                  <p>Use the 'ol' tag for an ordered list.</p>
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
                  What is the purpose of the 'meta' tag?
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
                    The 'meta' tag provides metadata about the HTML document,
                    such as character set, description, keywords, etc.
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
                  What is the HTML tag for creating hyperlinks?
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse ${
                  openAccordion === 8 ? "show" : ""
                }`}
                id="htmlAnswer8"
              >
                <div className="accordion-body">
                  <p> 'a'</p>
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
                  What is the purpose of the 'head' element in HTML?
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
                    The 'head' element contains metadata, links to stylesheets,
                    and other resources.
                  </p>
                  <img
                    className="drop-images"
                    src={head}
                    style={{ marginBottom: "10px" }}
                  />
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
            className={`accordion ${
              isAccordionComplete(10) ? "completed" : ""
            }`}
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
                  How do you create a comment in HTML?
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
                    <img className="drop-images" src={comment} />
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
            className={`accordion ${
              isAccordionComplete(11) ? "completed" : ""
            }`}
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
                  Explain the difference between 'div' and 'span' elements.
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
                    'div' is a block-level element, while 'span' is an inline
                    element. They are used for grouping content.
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
            className={`accordion ${
              isAccordionComplete(12) ? "completed" : ""
            }`}
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
                  What is the purpose of the data-* attribute in HTML5?
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
                    The data-* attribute allows storing custom data private to
                    the page or application
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
            className={`accordion ${
              isAccordionComplete(13) ? "completed" : ""
            }`}
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
                  What is the importance of the DOCTYPE declaration in HTML?
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
                    {" "}
                    The DOCTYPE declaration defines the document type and
                    version of HTML, ensuring correct rendering by browsers.
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
            className={`accordion ${
              isAccordionComplete(14) ? "completed" : ""
            }`}
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
                  How can you embed audio in HTML5?
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
                    Use the 'audio' tag with the src attribute to embed audio.
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
            className={`accordion ${
              isAccordionComplete(15) ? "completed" : ""
            }`}
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
                  What are semantic elements in HTML5?
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
                    Semantic elements provide meaning to the structure, like
                    'header', 'nav', 'article', 'footer,, etc.
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
            className={`accordion ${
              isAccordionComplete(16) ? "completed" : ""
            }`}
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
                  What are semantic elements in HTML5?
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
                    Semantic elements provide meaning to the structure, like
                    'header', 'nav', 'article', 'footer,, etc.
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

          <div
            className={`accordion ${
              isAccordionComplete(17) ? "completed" : ""
            }`}
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
                  What is the purpose of the 'canvas' element in HTML5?
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
                    The 'canvas' element is used for drawing graphics,
                    animations, or other visualizations.
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
            className={`accordion ${
              isAccordionComplete(18) ? "completed" : ""
            }`}
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
                  How does the localStorage object work in HTML5?
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
                    localStorage is a web storage object that stores key-value
                    pairs locally in a web browser.
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
            className={`accordion ${
              isAccordionComplete(19) ? "completed" : ""
            }`}
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
                  What are WebSockets in HTML5?
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
                    WebSockets provide a full-duplex communication channel over
                    a single TCP connection, enabling real-time communication.
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
            className={`accordion ${
              isAccordionComplete(20) ? "completed" : ""
            }`}
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
                  Explain the difference between 'article' and 'section' in
                  HTML5.
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
                    'article' represents independent, self-contained content,
                    while 'section' is a generic container.
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
            className={`accordion ${
              isAccordionComplete(21) ? "completed" : ""
            }`}
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
                  How do you embed a video in HTML5?.
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
                    Use the 'video' tag with the src attribute to embed a
                    video..
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

          <h1>
            <u>
               Frequently asked in Frontend interviews
            </u>
          </h1>

          <div
            className={`accordion ${
              isAccordionComplete(21) ? "completed" : ""
            }`}
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
                  40 questions frequently asked in Frontend interviews?.
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
                    1. What is HTML and how is it different from XHTML? <br />
                    2. Explain the purpose of the &lt;!DOCTYPE&gt; declaration
                    in HTML. <br />
                    3. Differentiate between inline and block-level elements in
                    HTML. <br />
                    4. Describe the use of the &lt;meta&gt; tag and its
                    attributes. <br />
                    5. What is the purpose of the &lt;head&gt; and &lt;body&gt;
                    tags in an HTML document? <br />
                    6. Explain the importance of the alt attribute in the
                    &lt;img&gt; tag. <br />
                    7. How does the &lt;a&gt; tag contribute to creating
                    hyperlinks in HTML? <br />
                    8. Describe the difference between &lt;div&gt; and
                    &lt;span&gt; tags. <br />
                    9. Explain the concept of semantic HTML and provide
                    examples. <br />
                    10. What is the purpose of the &lt;form&gt; tag in HTML?{" "}
                    <br />
                    11. How can you include comments in HTML? <br />
                    12. What is the significance of the &lt;table&gt; element in
                    HTML? <br />
                    13. Explain the difference between the &lt;script&gt; tag
                    with the async and defer attributes. <br />
                    14. How can you embed audio and video in HTML using native
                    elements? <br />
                    15. Describe the role of the &lt;nav&gt; element in HTML5.{" "}
                    <br />
                    16. What is the purpose of the &lt;aside&gt; tag in HTML?{" "}
                    <br />
                    17. Explain the concept of HTML entities and provide
                    examples. <br />
                    18. How can you create ordered and unordered lists in HTML?{" "}
                    <br />
                    19. What is the purpose of the &lt;header&gt; and
                    &lt;footer&gt; tags in HTML5? <br />
                    20. Describe the use of the &lt;abbr&gt; and &lt;cite&gt;
                    tags. <br />
                    21. How do you create a hyperlink that opens in a new tab or
                    window? <br />
                    22. Explain the difference between the &lt;strong&gt; and
                    &lt;b&gt; tags. <br />
                    23. Describe the role of the &lt;figure&gt; and
                    &lt;figcaption&gt; elements. <br />
                    24. How can you create a responsive design in HTML? <br />
                    25. Explain the use of the &lt;details&gt; and
                    &lt;summary&gt; tags. <br />
                    26. What is the purpose of the &lt;main&gt; tag in HTML5?{" "}
                    <br />
                    27. How can you embed external CSS styles in an HTML
                    document? <br />
                    28. Explain the concept of HTML5 data attributes. <br />
                    29. How do you create a dropdown list in HTML? <br />
                    30. Describe the purpose of the &lt;canvas&gt; element in
                    HTML5. <br />
                    31. Explain the difference between GET and POST methods in
                    HTML forms. <br />
                    32. How can you disable a form element using HTML? <br />
                    33. Describe the purpose of the &lt;progress&gt; and
                    &lt;meter&gt; elements. <br />
                    34. How do you set the background image in HTML? <br />
                    35. Explain the role of the &lt;iframe&gt; tag and its
                    attributes. <br />
                    36. What is the purpose of the colspan and rowspan
                    attributes in a table? <br />
                    37. How can you create a horizontal line in HTML? <br />
                    38. Describe the use of the &lt;datalist&gt; element in HTML
                    forms. <br />
                    39. Explain the role of the &lt;blockquote&gt; and &lt;q&gt;
                    tags. <br />
                    40. How can you create a responsive image in HTML?
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
        </div>
      </div>
    </div>
  );
}

export default Thml;
