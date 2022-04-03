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
            <input
              className=" input__radio input__radio--happy"
              type="radio"
              name="mood"
              value="happy"
              onChange={handleMoodValueChange}
              defaultChecked={currectMood}
              checked={currectMood === "happy"}
            />{" "}
            Happy{" "}
            <input
              className="input__radio input__radio--sad"
              type="radio"
              name="mood"
              value="sad"
              onChange={handleMoodValueChange}
              checked={currectMood === "sad"}
            />{" "}
            Sad{" "}
            <input
              className="input__radio input__radio--frustrated"
              type="radio"
              name="mood"
              value="frustrated"
              onChange={handleMoodValueChange}
              checked={currectMood === "frustrated"}
            />{" "}
            Frustrated{" "}
            <input
              className=" input__radio input__radio--tired"
              type="radio"
              name="mood"
              value="tired"
              onChange={handleMoodValueChange}
              checked={currectMood === "tired"}
            />{" "}
            Tired{" "}
            <input
              className="input__radio input__radio--drained"
              type="radio"
              name="mood"
              value="drained"
              onChangeCapture={handleMoodValueChange}
              checked={currectMood === "drained"}
            />{" "}
            Drained{" "}
          </div>
          <textarea
            className="modal__notes"
            onChange={handleMoodNotesChange}
            value={formValue.note}
            name="notes"
            placeholder="my thoughts for today"
          ></textarea>
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

export default Modal;
