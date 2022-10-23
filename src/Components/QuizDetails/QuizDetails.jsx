import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './QuizDetails.css';

const QuizDetails = () => {
  const quizData = useLoaderData();
  const quiz = quizData.data;

  const { name } = quiz;

  const quizQuestions = quizData.data.questions;
    return (
      <div className="quiz-details">
        <h1 className="my-4">Quiz of {name} </h1>

        <div className="quiz-info">
          {
          quizQuestions.map((question) => (
            <Questions key={question.id} questions={question}></Questions>
          ))
          }
        </div>
      </div>
    );
};

export default QuizDetails;