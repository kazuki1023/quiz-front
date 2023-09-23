import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface ChoiceProps {
  choiceData: {
    answer: string;
    valid: number;
  };
}

const Choices: React.FC<ChoiceProps> = ({ choiceData }) => {
  const [isSelected, setIsSelected] = useState(false);
  // const [isCorrect, setIsCorrect] = useState(false);
  const toggleSelected = () => {
    setIsSelected(!isSelected); // 状態をトグル
  };
  return (
    <li className="p-quiz-box__answer__item">
      <button className={`p-quiz-box__answer__button js-answer ${isSelected ? 'is-selected' : ''}`} data-answer={choiceData.valid} onClick={toggleSelected} >
      {choiceData.answer}<FontAwesomeIcon icon={faArrowRight} />
      </button>
    </li>
  )
}

export default Choices