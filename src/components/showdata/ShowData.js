import "../showdata/showdata.scss";

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
        <h1 className="header__show-content">
          Your Mood Infromation for this day
        </h1>
        <p className="show-content__paragraph">
          {" "}
          {`My mood selection ${moodSelection}`}{" "}
        </p>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-radio__wrapper showdata__wrapper">
            <input
              className="input__radio input__radio--happy"
              type="radio"
              name="mood"
              value="happy"
              onChange={moodEditValueChange}
              defaultChecked={currectMood}
              checked={currectMood === "happy"}
            />{" "}
            Happy{" "}
            <input
              className="input__radio input__radio--sad"
              type="radio"
              name="mood"
              value="sad"
              onChange={moodEditValueChange}
              checked={currectMood === "sad"}
            />{" "}
            Sad{" "}
            <input
              className="input__radio input__radio--frustrated"
              type="radio"
              name="mood"
              value="frustrated"
              onChange={moodEditValueChange}
              checked={currectMood === "frustrated"}
            />{" "}
            Frustrated{" "}
            <input
              className=" input__radio input__radio--tired"
              type="radio"
              name="mood"
              value="tired"
              onChange={moodEditValueChange}
              checked={currectMood === "tired"}
            />{" "}
            Tired{" "}
            <input
              className="input__radio input__radio--drained"
              type="radio"
              name="mood"
              value="drained"
              onChange={moodEditValueChange}
              checked={currectMood === "drained"}
            />{" "}
            Drained{" "}
          </div>
          <textarea
            className="modal__notes"
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
