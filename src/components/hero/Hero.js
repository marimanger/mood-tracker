import "../hero/hero.scss";
import { Link } from "react-router-dom";
import addMood from "../../assets/images/addmood.jpg";

function Hero() {
  return (
    <div className="hero__container">
      <div className="img__hero"></div>
      <section className="hero__wrapper">
        <h1 className="hero__subtitle">
          Your <span className="mood__emphasise">mood</span> changes throughout
          the days?
        </h1>
        <p className="hero__slogan">
          But what if you could see it?<br></br>
          Understanding your moods helps you manage them and feel better faster.
        </p>
      </section>
      <section className="article__section">
        <div className="wrapper__article">
          <article>
            <img className="image__article" src={addMood}></img>
          </article>
          <article className="how-to__article">
            <h1 className="hero__article-title">Add your mood to calendar</h1>
            <p>
              It's super easy to add your mood to the calendar with just few
              clicks!
            </p>
          </article>
        </div>
      </section>
      <Link to="/how-to-use">
        <button className="button__hero">how to use</button>
      </Link>
    </div>
  );
}

export default Hero;
