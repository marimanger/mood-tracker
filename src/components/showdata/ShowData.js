function ShowData({
  toggleModal,
  handleSubmit,
  formValue,
  handleMoodNotesChange,
  moodSelection,
  notes,
  moodValueChange,
  moodvalue,
  radio,
  handleCloseModal,
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
              //   className="happy"
              type="radio"
              name="mood"
              value="happy"
              onChange={moodValueChange}
              defaultChecked={moodvalue}
              checked={radio}
            />{" "}
            Happy{" "}
            <input
              //   className="sad"
              type="radio"
              name="mood"
              value="sad"
              onChange={moodValueChange}
              checked={formValue.mood === "sad"}
            />{" "}
            Sad{" "}
            <input
              //   className="frustrated"
              type="radio"
              name="mood"
              value="frustrated"
              onChange={moodValueChange}
              checked={formValue.mood === "frustrated"}
            />{" "}
            Frustrated{" "}
            <input
              type="radio"
              name="mood"
              value="tired"
              onChange={moodValueChange}
              checked={formValue.mood === "tired"}
            />{" "}
            Tired{" "}
            <input
              type="radio"
              name="mood"
              value="drained"
              onChangeCapture={moodValueChange}
              checked={formValue.mood === "drained"}
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
