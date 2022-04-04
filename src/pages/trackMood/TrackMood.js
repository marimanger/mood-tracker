import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import Modal from "../../components/modal/Modal";
import ZenQuote from "../../components/zenQuote/ZenQuote";
import ShowData from "../../components/showdata/ShowData";
import Hello from "../../components/hello/Hello";
import axios from "axios";
import moment from "moment";
import AOS from "aos";

import "react-calendar/dist/Calendar.css";
import "../about/about.scss";
import "../trackMood/trackMood.scss";

function TrackMood() {
  const [value] = useState(new Date());
  const [modal, setModal] = useState(false);
  const [moodItemPresent, setMoodItemPresent] = useState(false);

  const [showForm, setEditForm] = useState({
    id: "",
    moodName: "",
    note: "",
  });

  const [formValue, setFormValue] = React.useState({
    moodName: "happy",
    notes: "",
    date: "",
  });

  const handleCloseModal = (e) => {
    setModal(false);
  };

  //Modal window for form//////////////////

  const toggleModal = (event) => {
    // console.log("Cheking event on click", event);
    const currentDate = moment(event).format("DD-MM-YYYY");
    if (checkIfUserMoodExists(currentDate)) {
      setMoodItemPresent(true);
      setModal(true);
    } else {
      setModal(true);
      setMoodItemPresent(false);
      setFormValue({
        moodName: formValue.moodName,
        notes: formValue.notes,
        date: currentDate,
      });
    }
  };

  const moodValueChange = (event) => {
    console.log(`Current mood is: ${formValue.moodName}`);
    setFormValue({
      moodName: event.target.value,
      notes: formValue.notes,
      date: formValue.date,
    });
  };

  const moodEditValueChange = (event) => {
    console.log(`Edit mood is: ${event.target.value}`);
    setEditForm({
      moodName: event.target.value,
      note: showForm.note,
      id: showForm.id,
    });
  };

  const moodEditNoteChange = (event) => {
    console.log(
      `Edit mood note is: ${event.target.value}, show form is ${JSON.stringify(
        showForm
      )}`
    );
    setEditForm({
      moodName: showForm.moodName,
      note: event.target.value,
      id: showForm.id,
    });
  };

  // POST DATA/////////////

  const handleSubmit = async (event) => {
    // event.preventDefault();
    const request = {
      moodName: formValue.moodName,
      note: formValue.notes,
      date: formValue.date,
    };
    // console.info(`Request data is ${JSON.stringify(request)}`);
    try {
      const res = await axios.post(
        `http://localhost:8080/mood-user?userId=${123456}`,
        request
      );
      // console.log(`Response from server: ${JSON.stringify(res)}`);
      getMoodData();
    } catch (error) {
      console.error(error);
    }
  };

  // EDIT DATA/////////////

  const handleSubmitEditMood = async (event) => {
    // event.preventDefault();
    const request = {
      moodName: showForm.moodName,
      note: showForm.note,
    };
    console.info(`Request data is ${JSON.stringify(request)}`);
    try {
      const res = await axios.put(
        `http://localhost:8080/mood-user/${showForm.id}?userId=${123456}`,
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
    setFormValue({
      moodName: formValue.moodName,
      notes: event.target.value,
      date: formValue.date,
    });
  };

  const checkIfUserMoodExists = (userDate) => {
    const userMood = moodlist.find((f) => f.date === userDate);
    if (userMood !== undefined) {
      setEditForm({
        moodName: userMood.moodName,
        note: userMood.note,
        id: userMood.id,
      });
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
        handleSubmit={handleSubmitEditMood}
        formValue={formValue}
        moodEditNoteChange={moodEditNoteChange}
        moodEditValueChange={moodEditValueChange}
        handleCloseModal={handleCloseModal}
        notes={showForm.note}
        moodSelection={showForm.moodName}
        currectMood={showForm.moodName}
      />
    );
  }

  //Modal

  return (
    <>
      <Hello />

      <section className="calendar__container" data-aos="fade-up">
        <Calendar
          onClickDay={toggleModal}
          value={value}
          className="react-calendar"
          // tileContent={tileContent}
          tileClassName={tileContent}
        />
      </section>
      <section className="chart__wrapper"></section>
      <ZenQuote />
      {modal && modalPopup}
    </>
  );
}

export default TrackMood;
