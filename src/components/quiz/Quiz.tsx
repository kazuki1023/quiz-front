import React from 'react'
import Choices from './parts/Choices';

interface QuizProps {
  quizData: {
    id: number;
    content: string;
    img: string;
    choices: {
      answer: string;
      valid: number;
    }[];
  };
}

const Quiz:  React.FC<QuizProps> = ({ quizData }) => {
  return (
    <>
      <section className="p-quiz-box js-quiz" data-quiz="0">
        <div className="p-quiz-box__question">
          <h2 className="p-quiz-box__question__title">
            <span className="p-quiz-box__label">Q{quizData.id}</span>
            <span className="p-quiz-box__question__title__text">{quizData.content}</span>
          </h2>
          <figure className="p-quiz-box__question__image">
            <img src={`./quiz/${quizData.img}`}   alt="クイズのイメージ" />
          </figure>
        </div>

        <ul className="p-quiz-box__answer__list">
        {quizData.choices.map((choice, index) => (
            <Choices key={index} choiceData={choice} />
          ))}
        </ul>
      </section>
    </>
  )
}

export default Quiz