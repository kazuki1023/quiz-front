import React from 'react'
import Choices from './parts/Choices';
import AnswerBox from './parts/Answer';
import { useState } from 'react';

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

const Quiz: React.FC<QuizProps> = ({ quizData }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isCorrect, setIsCorrect] = useState<null | boolean>(null);

  const handleChoiceClick = (valid: number) => {
    setIsDisabled(true); // 一つの選択肢がクリックされたら全て無効にする
    setIsCorrect(valid === 1);
  };

  const correctAnswerText = quizData.choices.find(choice => choice.valid === 1)?.answer || "";

  return (
    <>
      <section className="p-quiz-box js-quiz" data-quiz="0">
        <div className="p-quiz-box__question">
          <h2 className="p-quiz-box__question__title">
            <span className="p-quiz-box__label">Q{quizData.id}</span>
            <span className="p-quiz-box__question__title__text">{quizData.content}</span>
          </h2>
          <figure className="p-quiz-box__question__image">
            <img src={`./quiz/${quizData.img}`} alt="クイズのイメージ" />
          </figure>
        </div>

        <ul className="p-quiz-box__answer__list">
          {quizData.choices.map((choice, index) => (
            <Choices key={index} choiceData={choice} isDisabled={isDisabled} onChoiceClick={(valid) => handleChoiceClick(valid)}  />
          ))}
        </ul>
        {isCorrect !== null && (
          <AnswerBox title={isCorrect ? "正解" : "不正解"} text={correctAnswerText} isCorrect={isCorrect}/>
        )}
      </section>
    </>
  )
}

export default Quiz