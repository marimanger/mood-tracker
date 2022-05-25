import "../hero/hero.scss";
import { Link } from "react-router-dom";
import addMood from "../../assets/images/addmood.jpg";
import history from "../../assets/images/history.jpg";
import stats from "../../assets/images/stats.jpg";
import Animation from "../lottieAnimation/Animation";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function Hero() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="hero__container">
      <div className="img__hero">
        <Animation className="animation"></Animation>
      </div>
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
          <article data-aos="fade-up">
            <img className="image__article" src={addMood}></img>
          </article>
          <article id="how-to"className="how-to__article" data-aos="fade-up">
            <h1 className="hero__article-title">Add your mood to calendar</h1>
            <p>
              It's super easy to add your mood to the calendar with just few
              clicks!
            </p>
          </article>
        </div>
        <div data-aos="fade-up" className="wrapper__article">
          <article data-aos="fade-up" className="how-to__article">
            <h1 className="hero__article-title">View your Mood History</h1>
            <p>
              View your mood history and see how you've been feeling over the
              past few days.
            </p>
          </article>
          <article data-aos="fade-up">
            <img className="image__article" src={history}></img>
          </article>
        </div>
        <div className="wrapper__article">
          <article data-aos="fade-up">
            <img className="image__article" src={stats}></img>
          </article>
          <article className="how-to__article" data-aos="fade-up">
            <h1 className="hero__article-title">
              Analyse and download your mood diary
            </h1>
            <p>
              It's super easy to add your mood to the calendar with just few
              clicks!
            </p>
          </article>
        </div>
      </section>
      <Link className="button__link-hero" to="/track-mood">
        <button className="button__hero">use mood tracker</button>
      </Link>
    </div>
  );
}

export default Hero;
