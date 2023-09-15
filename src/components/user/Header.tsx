const Header = () => {
  return (
    <header id="js-header" className="l-header p-header">
      <div className="p-header__logo"><img src="/logo.svg" alt="POSSE" /></div>
      {/* <button className="p-header__button" id="js-headerButton"></button> */}
      <div className="p-header__inner">
        <ul className="p-header__sns p-sns">
          <li className="p-sns__item">
            <a href="https://twitter.com/posse_program" target="_blank" rel="noopener noreferrer" className="p-sns__item__link" aria-label="Twitter">
              <img src="/twitter.svg" alt="twitter"/>
            </a>
          </li>
          <li className="p-sns__item">
            <a href="https://www.instagram.com/posse_programming/" target="_blank" rel="noopener noreferrer" className="p-sns__item__link" aria-label="Instagram">
              <img src="/instagram.png" alt="instagram" className="p-sns__item__instagram"/>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;