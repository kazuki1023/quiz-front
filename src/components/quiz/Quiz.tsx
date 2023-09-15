import React from 'react'
import Choices from './parts/Choices';
import Supplement from './parts/Supplement';
const Quiz = () => {
  return (
    <>
      <section className="p-quiz-box js-quiz" data-quiz="0">
        <div className="p-quiz-box__question">
          <h2 className="p-quiz-box__question__title">
            <span className="p-quiz-box__label">Q1</span>
            <span className="p-quiz-box__question__title__text">日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？</span>
          </h2>
          <figure className="p-quiz-box__question__image">
            <img src="./quiz/img-quiz01.png" alt="クイズのイメージ" />
          </figure>
        </div>

        <ul className="p-quiz-box__answer__list">
          <Choices />
          <Choices />
          <Choices />
        </ul>
        <Supplement />
      </section>
    </>
  )
}

export default Quiz