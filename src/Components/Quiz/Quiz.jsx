import React from 'react';
import './Quiz.css';
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const Quiz = ({quiz}) => {
   const { id, logo, name } = quiz;

   const navigate = useNavigate();

   const handelClick = () => {
     navigate(`home/${id}`);
     navigate(`/home/${id}`);
   };
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img className="" src={logo} alt="" />
            <div className="">
              <h2 className="">{name}</h2>
              <button onClick={handelClick} className="button">
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Quiz;