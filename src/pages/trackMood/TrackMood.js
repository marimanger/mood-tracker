import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import axios from "axios";
import moment from "moment";

import "react-calendar/dist/Calendar.css";
import "../about/about.scss";
import "../trackMood/trackMood.scss";

function TrackMood() {
  const [value, onChange] = useState(new Date());
  const [modal, setModal] = useState(false);
  const [moodItemPresent, setMoodItemPresent] = useState(false);

  const [formValue, setformValue] = React.useState({
    moodName: "",
    notes: "",
    date: "",
  });

  //Modal window for form
  const toggleModal = async () => {
    await getExistingMoodForTheDate(moment(value).format("DD-MM-YYYY"));
    setModal(!modal);
    console.log(`Is Item Present ${moodItemPresent}`);
  };

  const moodValueChange = (event) => {
    event.preventDefault();
    console.log(`Current mood is: ${formValue.mood}`);
    setformValue({ mood: event.target.value, notes: formValue.notes });
    console.log(`Updated mood is: ${formValue.mood}`);
  };

  // POST DATA/////////////

  const handleSubmit = async (event) => {
    // event.preventDefault();
    const request = {
      moodName: formValue.mood,
      note: formValue.notes,
      date: moment(value).format("DD-MM-YYYY"),
    };
    console.info(`Request data is ${JSON.stringify(request)}`);
    try {
      const res = await axios.post(
        `http://localhost:8080/mood-user?userId=${123456}`,
        request
      );
      console.log(`Response from server: ${JSON.stringify(res)}`);
      setformValue({
        mood: res.data.moodName,
        notes: res.data.notes,
        date: res.data.value,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleMoodNotesChange = (event) => {
    console.info(`Currect form state is ${JSON.stringify(formValue)}`);
    setformValue({ mood: formValue.mood, notes: event.target.value });
  };

  //GET DATA BY DATE ////////////////////

  const getExistingMoodForTheDate = async (date) => {
    try {
      console.info(`Requesting remote server for the ${date}`);
      const existingSubmittedMood = await axios.get(
        `http://localhost:8080/mood-user?userId=${123456}&date=${date}`
      );
      if (existingSubmittedMood.status === 404) {
        console.log(`No data received`);
      } else {
        console.log(
          `There's existing user mood for this date ${JSON.stringify(
            existingSubmittedMood.data
          )}`
        );
        setMoodItemPresent(!moodItemPresent);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [moodlist, setMoodlist] = React.useState([]);

  const GET_MOODS = `http://localhost:8080/mood-user?userId=${123456}`;
  const getMoodData = async () => {
    try {
      const response = await axios.get(GET_MOODS);
      console.log(response.data);
      setMoodlist(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getMoodData();
  }, []);

  //TITLE CONTENT TO FILL EACH Calendar field////////////

  function tileContent({ date, view }) {
    // Add class to tiles in month view only
    return moodlist
      .filter((e) => e.date === moment(date).format("DD-MM-YYYY"))
      .map((e) => "\n" + e.moodName);
  }

  return (
    <>
      I am Track Mood Page
      <Calendar
        onClickDay={toggleModal}
        onChange={onChange}
        value={value}
        className="react-calendar"
        tileContent={tileContent}
        tileClassName={tileContent}
      />
      {modal && (
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
      )}
    </>
  );
}

export default TrackMood;
