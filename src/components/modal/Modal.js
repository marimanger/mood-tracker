function Modal({
  toggleModal,
  handleSubmit,
  formValue,
  moodValueChange,
  handleMoodNotesChange,
}) {
  return (
    <div className="modal">
      <div onClick={toggleModal} className="overlay"></div>
      <section className="modal-content">
        <h1>Select your mood for today</h1>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <input
              //   className="happy"
              type="radio"
              name="mood"
              value="happy"
              onChange={moodValueChange}
              defaultChecked={formValue.mood}
              checked={formValue.mood === "happy"}
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
          ></textarea>
          <button type="submit" className="submit__btn">
            done
          </button>
        </form>
      </section>
      <button className="close-modal" onClick={toggleModal}>
        Close
      </button>
    </div>
  );
}

export default Modal;
