function ShowData({
  handleSubmit,
  formValue,
  moodEditNoteChange,
  moodEditValueChange,
  moodSelection,
  notes,
  handleCloseModal,
  currectMood,
}) {
  return (
    <div className="modal">
      <div className="overlay"></div>
      <section className="modal-content">
        <h1>Your Mood Infromation for this day</h1>
        <p> {`My mood selection ${moodSelection}`} </p>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <input
              type="radio"
              name="mood"
              value="happy"
              onChange={moodEditValueChange}
              defaultChecked={currectMood}
              checked={currectMood === "happy"}
            />{" "}
            Happy{" "}
            <input
              type="radio"
              name="mood"
              value="sad"
              onChange={moodEditValueChange}
              checked={currectMood === "sad"}
            />{" "}
            Sad{" "}
            <input
              type="radio"
              name="mood"
              value="frustrated"
              onChange={moodEditValueChange}
              checked={currectMood === "frustrated"}
            />{" "}
            Frustrated{" "}
            <input
              type="radio"
              name="mood"
              value="tired"
              onChange={moodEditValueChange}
              checked={currectMood === "tired"}
            />{" "}
            Tired{" "}
            <input
              type="radio"
              name="mood"
              value="drained"
              onChange={moodEditValueChange}
              checked={currectMood === "drained"}
            />{" "}
            Drained{" "}
          </div>
          <textarea
            onChange={moodEditNoteChange}
            value={formValue.note}
            name="notes"
            placeholder="my thoughts for today"
          >
            {notes}
          </textarea>
          <button type="submit" className="submit__btn">
            done
          </button>
        </form>
      </section>
      <button className="close-modal" onClick={handleCloseModal}>
        Close
      </button>
    </div>
  );
}

export default ShowData;
