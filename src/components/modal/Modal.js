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
      <section className="modal-content">
        <h1>Select your mood for today</h1>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <input
              //   className="happy"
              type="radio"
              name="mood"
              value="happy"
              onChange={handleMoodValueChange}
              defaultChecked={currectMood}
              checked={currectMood === "happy"}
            />{" "}
            Happy{" "}
            <input
              //   className="sad"
              type="radio"
              name="mood"
              value="sad"
              onChange={handleMoodValueChange}
              checked={currectMood === "sad"}
            />{" "}
            Sad{" "}
            <input
              //   className="frustrated"
              type="radio"
              name="mood"
              value="frustrated"
              onChange={handleMoodValueChange}
              checked={currectMood === "frustrated"}
            />{" "}
            Frustrated{" "}
            <input
              type="radio"
              name="mood"
              value="tired"
              onChange={handleMoodValueChange}
              checked={currectMood === "tired"}
            />{" "}
            Tired{" "}
            <input
              type="radio"
              name="mood"
              value="drained"
              onChangeCapture={handleMoodValueChange}
              checked={currectMood === "drained"}
            />{" "}
            Drained{" "}
          </div>
          <textarea
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
