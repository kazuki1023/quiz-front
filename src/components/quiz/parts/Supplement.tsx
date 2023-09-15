import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Supplement = () => {
  return (
    <cite className="p-quiz-box__note">
      <FontAwesomeIcon icon={faGraduationCap} />経済産業省 2019年3月 － IT 人材需給に関する調査
    </cite>
  )
}

export default Supplement