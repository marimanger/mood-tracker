import "../card/card.scss";

function Card({ mood, notes, edit }) {
  return (
    <div className="card__wrapper">
      {/* <h1>Your input for this day:</h1> */}
      <h2 className="card__header"> 👉 You said you feel {mood}!</h2>
      <h2 className=" card__header card__header--notes">Your daily note ✍:</h2>
      <p className="card__notes">{notes}</p>
      <button className="card__button" onClick={edit}>
        Edit
      </button>
    </div>
  );
}

export default Card;
