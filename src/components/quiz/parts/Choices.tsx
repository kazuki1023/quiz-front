import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface ChoiceProps {
  choiceData: {
    answer: string;
    valid: number;
  };
  onChoiceClick: (valid: number) => void;
  isDisabled: boolean;
}

const Choices: React.FC<ChoiceProps> = ({ choiceData, onChoiceClick, isDisabled }) => {
  const [isSelected, setIsSelected] = useState(false);
  // const [isCorrect, setIsCorrect] = useState(false);
  const toggleSelected = () => {
    setIsSelected(!isSelected); // 状態をトグル
    onChoiceClick(choiceData.valid);
  };
  return (
    <li className="p-quiz-box__answer__item">
      <button className={`p-quiz-box__answer__button js-answer ${isSelected ? 'is-selected' : ''}`} data-answer={choiceData.valid} onClick={toggleSelected} disabled={isDisabled}>
        {choiceData.answer}<FontAwesomeIcon icon={faArrowRight} />
      </button>
    </li>
  )
}

export default Choices