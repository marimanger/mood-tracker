import "../about/about.scss";
import Calendar from "react-calendar";
import "../trackMood/calendar.scss";
import "../trackMood/trackMood.scss";

import React, { useState } from "react";

function TrackMood() {
  const [value, onChange] = useState(new Date());
  const [modal, setModal] = useState(false);
  const [formValue, setformValue] = React.useState({
    mood: "",
    notes: "",
  });

  //   const [selectedMood, setSelectedMood] = useState(value);
  function toggleModal() {
    setModal(!modal);
    console.log("buttonclicked");
  }
  function moodValue(e) {
    e.preventDefault();
    console.log(e.target.value);
    console.log("valuetaken");
  }

  //   handleSubmit = (event) => {
  //     event.preventDefault();
  //     const { mood, notes } = event.target.value;
  //     const request = {
  //       mood: input1,
  //       notes: input2,
  //     };
  //   };
  return (
    <>
      I am Track Mood Page
      <Calendar
        //built in to the calendar onclickday
        onClickDay={toggleModal}
        // onChange={onChange}
        value={value}
        className="react-calendar"
      />
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <section className="modal-content">
            <h1>Select your mood for today</h1>
            {/* onSubmit={handleSubmit} */}
            <form>
              <button onClick={moodValue} value="happy" name="mood">
                Happy
              </button>
              <button onClick={moodValue} value="sad" name="mood">
                Sad
              </button>
              <button onClick={moodValue} value="Frustrated" name="mood">
                Frustrated
              </button>
              <button onClick={moodValue} value="Tired" name="mood">
                Tired
              </button>
              <button onClick={moodValue} value="Drained" name="mood">
                Drained
              </button>
              <textarea
                name="notes"
                placeholder="my thoughts for today"
              ></textarea>
            </form>
            <button type="submit" className="submit__btn">
              done
            </button>
          </section>
          <button className="close-modal" onClick={toggleModal}>
            Close
          </button>
        </div>
      )}
    </>
  );
}

export default TrackMood;
