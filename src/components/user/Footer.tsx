const footer = () => {
  return (
    <footer className="l-footer p-footer">
      <div className="p-fixedLine">
        <a 
          href="https://line.me/R/ti/p/@651htnqp?from=page" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-fixedLine__link"
        >
          <i className="u-icon__line"></i>
          <p className="p-fixedLine__link__text">
            <span className="u-sp-hidden">POSSE</span>
            公式LINEで<br/>最新情報をGET！
          </p>
          <i className="u-icon__link"></i>
        </a>
      </div>
      <div className="l-footer__inner">
        <div className="p-footer__siteinfo">
          <span className="p-footer__logo">
            <img src="/assets/img/logo.svg" alt="POSSE" />
          </span>
          <a 
            href="https://posse-ap.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-footer__siteinfo__link"
          >
            POSSE公式サイト
          </a>
        </div>
        <div className="p-footer__sns">
          <ul className="p-sns__list p-footer__sns__list">
            <li className="p-sns__item">
              <a 
                href="https://twitter.com/posse_program" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-sns__item__link" 
                aria-label="Twitter"
              >
                <i className="u-icon__twitter"></i>
              </a>
            </li>
            <li className="p-sns__item">
              <a 
                href="https://www.instagram.com/posse_programming/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-sns__item__link" 
                aria-label="instagram"
              >
                <i className="u-icon__instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-footer__copyright">
        <small lang="en">©︎2022 POSSE</small>
      </div>
    </footer>
  )
}
export default footer;