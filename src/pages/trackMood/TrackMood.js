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
  const [value] = useState(new Date());
  const [modal, setModal] = useState(false);
  const [moodItemPresent, setMoodItemPresent] = useState(false);
  const [moodS, setMoodS] = useState(null);
  const [notes, setNotes] = useState(null);

  const [formValue, setformValue] = React.useState({
    moodName: "happy",
    notes: "",
    date: "",
  });

  const handleCloseModal = (e) => {
    setModal(false);
  };

  //Modal window for form
  const toggleModal = (event) => {
    console.log("Cheking event on click", event);
    const currentDate = moment(event).format("DD-MM-YYYY");
    if (checkIfUserMoodExists(currentDate)) {
      setMoodItemPresent(true);
      setModal(true);
    } else {
      setModal(true);
      setMoodItemPresent(false);
      setformValue({
        moodName: formValue.moodName,
        notes: formValue.notes,
        date: currentDate,
      });
    }
  };

  const moodValueChange = (event) => {
    console.log(`Current mood is: ${formValue.moodName}`);
    setformValue({
      moodName: event.target.value,
      notes: formValue.notes,
      date: formValue.date,
    });

    console.log(`Updated mood is: ${formValue.moodName}`);
  };

  // POST DATA/////////////

  const handleSubmit = async (event) => {
    // event.preventDefault();
    const request = {
      moodName: formValue.moodName,
      note: formValue.notes,
      date: formValue.date,
    };
    console.info(`Request data is ${JSON.stringify(request)}`);
    try {
      const res = await axios.post(
        `http://localhost:8080/mood-user?userId=${123456}`,
        request
      );
      console.log(`Response from server: ${JSON.stringify(res)}`);
      getMoodData();
    } catch (error) {
      console.error(error);
    }
  };
  //RADIO BUTTONS //////

  const handleMoodNotesChange = (event) => {
    event.preventDefault();
    console.info(`Currect form state is ${JSON.stringify(formValue)}`);
    setformValue({
      moodName: formValue.moodName,
      notes: event.target.value,
      date: formValue.date,
    });
  };

  //GET DATA BY DATE ////////////////////

  const checkIfUserMoodExists = (userDate) => {
    const userMood = moodlist.find((f) => f.date === userDate);
    if (userMood !== undefined) {
      setMoodS(userMood.moodName);
      setNotes(userMood.note);
      return true;
    } else {
      return false;
    }
  };

  //GET ALL MOODS ///////////////////////////

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

  //MODAL POP UP LOGIC ///////////////////////

  let modalPopup = null;

  if (moodItemPresent === false && modal === true) {
    modalPopup = (
      <Modal
        toggleModal={toggleModal}
        handleSubmit={handleSubmit}
        formValue={formValue}
        handleMoodValueChange={moodValueChange}
        handleMoodNotesChange={handleMoodNotesChange}
        handleCloseModal={handleCloseModal}
        currectMood={formValue.moodName}
      />
    );
  } else {
    modalPopup = (
      <ShowData
        toggleModal={toggleModal}
        handleSubmit={handleSubmit}
        formValue={formValue}
        handleMoodValueChange={moodValueChange}
        handleMoodNotesChange={handleMoodNotesChange}
        handleCloseModal={handleCloseModal}
        notes={notes}
        moodSelection={moodS}
      />
    );
  }

  //Modal

  return (
    <>
      I am Track Mood Page
      <Calendar
        onClickDay={toggleModal}
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
