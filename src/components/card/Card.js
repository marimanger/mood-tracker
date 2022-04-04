import "../footer/footer.scss";

function Card({ mood, notes, edit }) {
  return (
    <div>
      {/* <h1>Your input for this day:</h1> */}
      <h2>You said you feel {mood}!</h2>
      <h2>Your Notes:</h2>
      <p>{notes}</p>
      <button onClick={edit}>Edit</button>
    </div>
  );
}

export default Card;
