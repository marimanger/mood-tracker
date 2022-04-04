import "../header/header.scss";

function Header() {
  return (
    <>
      <nav className="navigation">
        <a className="nav__logo" href="/">
          mood | tracker
        </a>
        <ul className="nav__list">
          <li>
            <a className=" nav__item nav__track-mood" href="/how-to-use">
              how to use
            </a>
          </li>
          <li>
            <a className=" nav__item nav__track-mood" href="/track-mood">
              track mood
            </a>
          </li>
          <li>
            <a className="nav__item nav__account" href="/">
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
