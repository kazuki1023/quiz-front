import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface ChoiceProps {
  choiceData: {
    answer: string;
    valid: number;
  };
}

const choices: React.FC<ChoiceProps> = ({ choiceData }) => {
  return (
    <li className="p-quiz-box__answer__item">
      <button className="p-quiz-box__answer__button js-answer" data-answer={choiceData.valid}>
      {choiceData.answer}<FontAwesomeIcon icon={faArrowRight} />
      </button>
    </li>
  )
}

export default choices