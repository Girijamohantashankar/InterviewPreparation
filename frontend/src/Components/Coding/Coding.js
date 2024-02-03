import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Coding.css"
// import { useNavigate } from "react-router-dom";

function Coding() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [completedQuestions, setCompletedQuestions] = useState([]);

  const categories = {
    javascript: [
      {
        question: "Write a program to find the largest number among three numbers.",
        solutionLink: "https://codepen.io/Dipu-Study/pen/poYPxQe",
      },
      {
        question: 'Implement a function to calculate the area of a rectangle.',
        solutionLink: "https://codepen.io/Dipu-Study/pen/jOJwmJM",
      },
      {
        question: 'Create a program to check if a given year is a leap year',
        solutionLink: "https://codepen.io/Dipu-Study/pen/poYwwgw",
      },
      {
        question: 'Write a function to find the minimum element in an array',
        solutionLink: "https://codepen.io/Dipu-Study/pen/KKEqOXr",
      },
    ],
    python: [
      {
        question: "What is a list comprehension?",
        answer:
          "A list comprehension is a concise way to create lists in Python using a single line of code.",
        solutionLink: "https://example.com/list-comprehension-solution",
      },
      {
        question: 'Explain the difference between "==" and "===" in Python.',
        answer:
          '"==" is used for equality comparison, while "===" is not a valid operator in Python. Use "==" for equality comparisons in Python.',
        solutionLink: "https://example.com/equality-comparison-solution",
      },
      // Add more Python questions here
    ],
    cplusplus: [
      {
        question: "What is the difference between C and C++?",
        answer:
          "C++ is an extension of C with additional features, including classes and object-oriented programming capabilities.",
        solutionLink: "https://example.com/c-c++-difference-solution",
      },
      {
        question: "Explain the concept of pointers in C++.",
        answer:
          "Pointers in C++ are variables that store the memory address of another variable. They are used for dynamic memory allocation and manipulation.",
        solutionLink: "https://example.com/pointers-solution",
      },
      // Add more C++ questions here
    ],
  };

  // const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedQuestion(null);
  };

  // const handleQuestionChange = (question) => {
  //   setSelectedQuestion(question);
  // };

  // const handleMarkAsComplete = (questionIndex) => {
  //   setCompletedQuestions([...completedQuestions, questionIndex]);
  // };

  const isQuestionComplete = (questionIndex) =>
    completedQuestions.includes(questionIndex);

  const handleAccordionToggle = (questionIndex) => {
    setSelectedQuestion(
      selectedQuestion === questionIndex ? null : questionIndex
    );
  };

  const handleSolutionButtonClick = (solutionLink) => {
    // Open the solution link in a new window
    window.open(solutionLink, "_blank");
  };

  return (
    <div>
 <Navbar />
   
    <div className="coding-container">
     

      {/* Category dropdown */}
      <select className="select-dropdown" onChange={(e) => handleCategoryChange(e.target.value)}>
        <option value="">Select a Language</option>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="cplusplus">C++</option>
      </select>

      {/* Question accordions */}
      {selectedCategory ? (
        <div className="question-dropdown">
          <h2 className="Question-heading">{selectedCategory.toUpperCase()} Questions</h2>
          {categories[selectedCategory].map((q, index) => (
            <div
              key={index}
              className={`accordion ${
                isQuestionComplete(index) ? "completed" : ""
              }`}
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id={`question${index}`}>
                  <button
                    className={`accordion-button ${
                      selectedQuestion === index ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => handleAccordionToggle(index)}
                  >
                    {q.question}
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    selectedQuestion === index ? "show" : ""
                  }`}
                  id={`answer${index}`}
                >
                  <div className="accordion-body">
                    {/* <p>{q.answer}</p> */}
                    {/* {!isQuestionComplete(index) && (
                      <button
                        className="mark-complete-btn btn btn-primary"
                        type="button"
                        onClick={() => handleMarkAsComplete(index)}
                      >
                        Mark as Complete
                      </button>
                    )} */}
                    {/* Solution Button */}
                    <button
                      className="solution-btn btn btn-success"
                      type="button"
                      onClick={() => handleSolutionButtonClick(q.solutionLink)}
                    >
                      Go To Solution
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="select-language">Select your language</p>
      )}
    </div>
    </div>
  );
}

export default Coding;
