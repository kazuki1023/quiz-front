import React from 'react';

interface AnswerBoxProps {
  title: string;
  text: string;
}

const AnswerBox: React.FC<AnswerBoxProps> = ({ title, text }) => {
  return (
    <div className="p-quiz-box__answer__correct js-answerBox">
      <p className="p-quiz-box__answer__correct__title js-answerTitle">{title}</p>
      <p className="p-quiz-box__answer__correct__content">
        <span className="p-quiz-box__answer__correct__content__label">A</span>
        <span className="js-answerText">{text}</span>
      </p>
    </div>
  );
};

export default AnswerBox;