import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import Modal from "../../components/modal/Modal";
import axios from "axios";
import moment from "moment";

import "react-calendar/dist/Calendar.css";
import "../about/about.scss";
import "../trackMood/trackMood.scss";
import ShowData from "../../components/showdata/ShowData";

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
  const toggleModal = async (e) => {
    console.log("Cheking event on click", e);
    await getExistingMoodForTheDate(moment(e).format("DD-MM-YYYY"));
    setModal((modal) => !modal);
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
    event.preventDefault();
    const request = {
      moodName: formValue.moodName,
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
        console.log(`No data received...`);
        setMoodItemPresent(false);
        alert("!!!");
      } else {
        console.log(
          `There's existing user mood for this date ${JSON.stringify(
            existingSubmittedMood.data
          )}`
        );
        setMoodItemPresent(true);
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

  //modal popup logic

  let modalPopup = null;
  if (!moodItemPresent) {
    modalPopup = (
      <Modal
        toggleModal={toggleModal}
        handleSubmit={handleSubmit}
        formValue={formValue}
        moodValueChange={moodValueChange}
        handleMoodNotesChange={handleMoodNotesChange}
      />
    );
  } else {
    modalPopup = (
      <ShowData
        toggleModal={toggleModal}
        handleSubmit={handleSubmit}
        formValue={formValue}
        moodValueChange={moodValueChange}
        handleMoodNotesChange={handleMoodNotesChange}
        moodSelection={moodlist.date}
      />
    );
  }

  //Modal

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
      {modal && modalPopup}
    </>
  );
}

export default TrackMood;
