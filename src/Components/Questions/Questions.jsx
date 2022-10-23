import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Questions.css';

const Questions = ({ questions }) => {
const { question, correctAnswer, options } = questions;

const watchAns = () => {
toast.success(`Answer is ( ${correctAnswer} )`, {
position: "top-center",
autoClose: 3000,
draggable: false,
});
};

const rightAnswer = (id) => {
if (id === correctAnswer) {
toast.success(" Your Answer is Correct!", {
position: "top-center",
autoClose: 2500,
draggable: false,
});
} else {
toast.error("Your Answer is Wrong", {
position: "top-center",
autoClose: 2500,
draggable: false,
});
}
};
return (
  <div className="bg m-5 rounded-4">
    <div className="d-flex justify-content-center">
      <h4 className="mt-5">Question: {question}</h4>
      <button type="quiz-button" onClick={watchAns} className="eye-button">
        <FontAwesomeIcon icon={faEye} />
      </button>
    </div>


    <div className="mt-2 ">
      {options.map((option) => (
        <section key={option}>
          <div className="">
            <button
              type="button"
              id="button"
              onClick={() => {
                rightAnswer(option);
              }}
              className="quiz-button mb-3"
            >
              {option}
            </button>
            <ToastContainer />
          </div>
        </section>
      ))}
    </div>
  </div>
);
};

export default Questions;