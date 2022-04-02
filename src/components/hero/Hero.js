import "../hero/hero.scss";

function Hero() {
  return (
    <div className="hero__container">
      <div className="img__hero"></div>
      <section className="hero__wrapper">
        <h1 className="hero__subtitle">Track your Moods Daily</h1>
        <p className="hero__subtile">
          Keep a record of your mood at regular intervals with diary to keep
          track of your feelings and emotions
        </p>
        <button className="button__hero">see more</button>
      </section>
    </div>
  );
}

export default Hero;
