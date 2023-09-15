import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const choices = () => {
  return (
    <li className="p-quiz-box__answer__item">
      <button className="p-quiz-box__answer__button js-answer" data-answer="0">
        約28万人<FontAwesomeIcon icon={faArrowRight} />
      </button>
    </li>
  )
}

export default choices