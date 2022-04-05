import "../header/header.scss";
import logo from "../../assets/icons/logo.svg";

function Header() {
  return (
    <>
      <nav className="navigation">
        <a className="nav__logo" href="/">
          <img className="nav-img__logo" src={logo}></img>
        </a>
        <ul className="nav__list">
          <li>
            <a className=" nav__item nav__track-mood" href="/">
              how to use
            </a>
          </li>
          <li>
            <a className=" nav__item nav__track-mood" href="/track-mood">
              track mood
            </a>
          </li>
          <li>
            <a className="nav__item nav__account" href="/account">
              account
            </a>
          </li>
        </ul>
      </nav>

      {/* <section className="hero">
        <h1 className="hero__header">Lorem Ipsum</h1>
    </section> */}
    </>
  );
}

export default Header;
