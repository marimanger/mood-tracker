function ShowData({
  toggleModal,
  handleSubmit,
  formValue,
  handleMoodNotesChange,
  moodSelection,
}) {
  return (
    <div className="modal">
      <div onClick={toggleModal} className="overlay"></div>
      <section className="modal-content">
        <h1>Your Mood Infromation for this day</h1>
        <p> {`My mood selection ${moodSelection}`} </p>
        <form className="form">
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

export default ShowData;
