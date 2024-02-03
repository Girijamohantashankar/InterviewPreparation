import React, { useState } from "react";
import "./Ssc.css";
import Navbar from "../Navbar/Navbar";

function Ssc() {
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
                What is CSS?
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
                  CSS (Cascading Style Sheets) is a stylesheet language used for
                  describing the presentation of a document written in HTML or
                  XML, including colors, layout, and fonts.
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
                Explain the difference between inline and block-level elements.
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
                  Inline elements only take up as much width as necessary and do
                  not force new lines. Block-level elements take up the full
                  width available and create new lines before and after the
                  element.
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
                What is the box model in CSS?
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
                  The box model is a way to represent the layout of elements in
                  CSS. It consists of content, padding, border, and margin.
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
                Explain the purpose of the z-index property.
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
                  The z-index property controls the stacking order of positioned
                  elements. Elements with a higher z-index value are displayed
                  in front of elements with lower z-index values.
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
                How do you include comments in CSS?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openAccordion === 5 ? "show" : ""
              }`}
              id="htmlAnswer5"
            >
              <div className="accordion-body">
                <p>TCSS comments can be added using /* comment here */.</p>
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
                What is the purpose of the float property?
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
                  The float property is used to specify whether an element
                  should float to the left, right, or none.
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
                Explain the difference between display: none; and visibility:
                hidden;?
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
                  display: none; removes the element from the document flow, and
                  it won't take up space. visibility: hidden; hides the element,
                  but it still takes up space.
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
                What is the importance of the clear property in CSS?
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
                  The clear property specifies which sides of an element other
                  floating elements are not allowed.
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
                What is the CSS box-sizing property used for?
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
                  The box-sizing property sets how the total width and height of
                  an element are calculated. The default value is content-box,
                  but it can also be set to border-box.
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
                How can you center an element horizontally and vertically in
                CSS?
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
                  To center horizontally, use text-align: center; for inline
                  elements or margin: 0 auto; for block-level elements. To
                  center vertically, use the line-height property for inline
                  elements or flexbox/grid for block-level elements.
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
          <u>CSS Selectors Interview Questions</u>
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
                What is the universal selector in CSS?
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
                  The universal selector (*) selects all elements in the
                  document.
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
                What is the child combinator (&gt;) in CSS?
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
                  The child combinator selects all direct children of a
                  specified element.
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
                What is the difference between :nth-child and :nth-of-type?
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
                  : :nth-child selects elements based on their position among
                  all children of a parent, while :nth-of-type selects elements
                  based on their position among elements of the same type within
                  the parent.
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
                Explain the :before and :after pseudo-elements.
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
                  :before and :after create pseudo-elements before and after the
                  content of an element, allowing extra styling or inserting
                  generated content.
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
                How does the :hover pseudo-class work in CSS?
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
                  :hover pseudo-class is used to select and style an element
                  when the mouse is over it.
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
                How do you select all even or odd elements using CSS?
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
                  :nth-child(even) or :nth-child(odd) to select all even or odd
                  elements, respectively.
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
                What is the :not selector in CSS used for?
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
                  The :not selector is used to select elements that do not match
                  a specified selector.
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
                Explain the difference between the descendant combinator and the
                child combinator in CSS.
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
                  The descendant combinator ( ) selects all descendants of a
                  specified element, regardless of their depth in the hierarchy,
                  while the child combinator (&gt;) selects only direct
                  children.
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
        <h1><u>CSS Properties</u></h1>
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
                What is the purpose of the position property in CSS?
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
                  The position property specifies the positioning method used
                  for an element.
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
                Explain the difference between position: relative; and position:
                absolute;.?
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
                  position: relative; positions an element relative to its
                  normal position, while position: absolute; positions an
                  element relative to its first positioned (not static)
                  ancestor.
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
                What does the float property do, and how does it work?
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
                  The float property is used for positioning and formatting
                  content. It can move an element to the left or right, allowing
                  text and inline elements to wrap around it.
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
                What is the purpose of the flex property in CSS?
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
                  The flex property is used to set the initial size of a flex
                  item and specifies the ability of a flex item to alter its
                  dimensions to fill the available space.
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
                Explain the box-shadow property in CSS?
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
                  The box-shadow property adds a shadow effect to an element. It
                  takes values for the horizontal and vertical offsets, blur
                  radius, spread distance, and color.
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
                What is the purpose of the display property, and what are some
                possible values?
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
                  The display property specifies the display behavior of an
                  element. Possible values include block, inline, inline-block,
                  flex, grid, and more.
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
                How does the overflow property work in CSS?
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
                  The overflow property specifies whether content should be
                  clipped, hidden, or displayed when it overflows its box.
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
                Explain the purpose of the line-height property.?
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
                  The line-height property sets the height of a line box. It is
                  used to control the space between lines of text.
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
        <h1><u>Responsive Design and CSS3</u></h1>
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

        <h1><u>Advanced CSS Concepts</u></h1>
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

export default Ssc;
