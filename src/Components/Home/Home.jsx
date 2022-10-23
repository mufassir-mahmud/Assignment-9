import { faArrowRight, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import bannerPng from "./banner2.png";
import "./Home.css";

const Home = () => {
  const allQuiz = useLoaderData();
  const quizTopics = allQuiz.data;
  return (
    <div className="home">
      <img src={bannerPng} alt="" />
      <h1>Quiz yourself on Coding!</h1>
      <h4>
        Are you a budding computer programmer? <br></br>Take our question quiz
        to see how much you know about the world of coding!{" "}
      </h4>
      <div className="sign-up">
        <button>
          Sign up for free &nbsp;
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <button>
          Learn More &nbsp;
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <h5>
        <FontAwesomeIcon icon={faCheckCircle} />
        &nbsp; <span className="bold">Used by 50 million+ people</span> around
        the world
      </h5>

      {/* Quiz Topic */}

      <div className="container text-center bg-info rounded-4">
        <div className="row m-4">
          <div className="flex border-2 p-3 ">
            {quizTopics.map((quiz) => (
              <Quiz key={quiz.id} quiz={quiz}></Quiz>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
