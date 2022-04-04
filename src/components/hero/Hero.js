import "../hero/hero.scss";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="hero__container">
      <div className="img__hero"></div>
      <section className="hero__wrapper">
        <h1 className="hero__subtitle">Track your Mood Daily</h1>
        <p className="hero__subtile">
          Keep a record of your mood at regular intervals with diary to keep
          track of your feelings and emotions
        </p>
        <Link to="/how-to-use">
          <button className="button__hero">how to use</button>
        </Link>
      </section>
    </div>
  );
}

export default Hero;
