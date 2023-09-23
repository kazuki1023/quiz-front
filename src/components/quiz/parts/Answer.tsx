import React from 'react';

interface AnswerBoxProps {
  title: string;
  text: string;
  isCorrect: boolean | null;
}

const AnswerBox: React.FC<AnswerBoxProps> = ({ title, text , isCorrect}) => {
  return (
    <div className={`p-quiz-box__answer__correct js-answerBox ${isCorrect ? "is-correct" : "is-incorrect"}`}>
      <p className="p-quiz-box__answer__correct__title js-answerTitle">{title}</p>
      <p className="p-quiz-box__answer__correct__content">
        <span className="p-quiz-box__answer__correct__content__label">A</span>
        <span className="js-answerText">{text}</span>
      </p>
    </div>
  );
};

export default AnswerBox;