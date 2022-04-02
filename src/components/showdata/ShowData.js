function ShowData({
  handleSubmit,
  formValue,
  handleMoodNotesChange,
  moodSelection,
  notes,
  moodValueChange,
  moodvalue,
  radio,
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
              onChange={moodValueChange}
              defaultChecked={currectMood === "happy"}
              checked={radio}
            />{" "}
            Happy{" "}
            <input
              type="radio"
              name="mood"
              value="sad"
              onChange={moodValueChange}
              checked={currectMood === "sad"}
            />{" "}
            Sad{" "}
            <input
              type="radio"
              name="mood"
              value="frustrated"
              onChange={moodValueChange}
              checked={currectMood === "frustrated"}
            />{" "}
            Frustrated{" "}
            <input
              type="radio"
              name="mood"
              value="tired"
              onChange={moodValueChange}
              checked={currectMood === "tired"}
            />{" "}
            Tired{" "}
            <input
              type="radio"
              name="mood"
              value="drained"
              onChange={moodValueChange}
              checked={currectMood === "drained"}
            />{" "}
            Drained{" "}
          </div>
          <textarea
            onChange={handleMoodNotesChange}
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
