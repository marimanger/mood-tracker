import "../modal/modal.scss";

function Modal({
  handleSubmit,
  formValue,
  handleMoodValueChange,
  handleMoodNotesChange,
  handleCloseModal,
  currectMood,
}) {
  return (
    <div className="modal">
      <div className="overlay"></div>
      <section className="modal-content modal__container">
        <h1 className="modal__title">What is your mood today?</h1>
        <form className="form__modal" onSubmit={handleSubmit}>
          <div className="form-radio__wrapper">
            <label htmlFor="happy">Happy</label>
            <input
              id="happy"
              className=" input__radio input__radio--happy"
              type="radio"
              name="mood"
              value="happy"
              onChange={handleMoodValueChange}
              defaultChecked={currectMood}
              checked={currectMood === "happy"}
            />{" "}
            <label htmlFor="sad">Sad</label>
            <input
              id="sad"
              className="input__radio input__radio--sad"
              type="radio"
              name="mood"
              value="sad"
              onChange={handleMoodValueChange}
              checked={currectMood === "sad"}
            />{" "}
            <label htmlFor="frustrated">Frustrated</label>
            <input
              id="frustrated"
              className="input__radio input__radio--frustrated"
              type="radio"
              name="mood"
              value="frustrated"
              onChange={handleMoodValueChange}
              checked={currectMood === "frustrated"}
            />{" "}
            <label htmlFor="tired">Tired</label>
            <input
              id="tired"
              className=" input__radio input__radio--tired"
              type="radio"
              name="mood"
              value="tired"
              onChange={handleMoodValueChange}
              checked={currectMood === "tired"}
            />{" "}
            <label htmlFor="drained">Drained</label>
            <input
              id="drained"
              className="input__radio input__radio--drained"
              type="radio"
              name="mood"
              value="drained"
              onChangeCapture={handleMoodValueChange}
              checked={currectMood === "drained"}
            />{" "}
          </div>
          <h2 className="modal__title modal__title--second">
            Add some notes<br></br>why do you feel this way?
          </h2>

          <textarea
            className="modal__notes"
            onChange={handleMoodNotesChange}
            value={formValue.note}
            name="notes"
            placeholder="Add your notes here"
          ></textarea>
          <button type="submit" className="submit__btn">
            add mood
          </button>
        </form>
      </section>
      <button className="close-modal" onClick={handleCloseModal}>
        Close
      </button>
    </div>
  );
}

export default Modal;
