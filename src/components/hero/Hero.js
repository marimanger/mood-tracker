import "../hero/hero.scss";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="hero__container">
      <div className="img__hero"></div>
      <section className="hero__wrapper">
        <h1 className="hero__subtitle">
          Your <span>mood</span> changes throughout the days?
        </h1>
        <p className="hero__slogan">
          But what if you could see it?<br></br>
          Understanding your moods helps you manage them and feel better faster.
        </p>
        <Link to="/how-to-use">
          <button className="button__hero">how to use</button>
        </Link>
      </section>
    </div>
  );
}

export default Hero;
