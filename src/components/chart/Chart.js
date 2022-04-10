// import "../chart/chart.css";
import { CSVLink, CSVDownload } from "react-csv";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJs.register(CategoryScale, LinearScale, BarElement);

function Chart() {
  const [chartData, setChartData] = React.useState([]);
  //   const [charMood, setChartmood] = useState({});

  const GET_MOODS = `http://localhost:8080/mood-user?userId=${123456}`;

  useEffect(() => {
    const getChartData = async () => {
      await axios
        .get(GET_MOODS)
        .then((res) => {
          setChartData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    console.info(`Start data is ${JSON.stringify(chartData)}`);
    getChartData();
    console.info(`End data is ${JSON.stringify(chartData)}`);
  }, []);

  const filterDatabyDate = (data) => {
    const newData = data.map((item) => {
      return {
        date: item.date,
        mood: item.moodName,
        note: item.note,
      };
    });
    return newData;
  };

  const data2 = filterDatabyDate(chartData);

  const availableMoods = {
    happy: 0,
    tired: 0,
    frustrated: 0,
    drained: 0,
    sad: 0,
  };

  chartData.reduce((availableMoods, mood) => {
    const currMood = mood.moodName;
    availableMoods[currMood]++;
    return availableMoods;
  }, availableMoods);
  console.info(availableMoods);

  const inputData = [];

  for (let key of Object.keys(availableMoods)) {
    inputData.push(availableMoods[key]);
  }

  let data = {
    labels: ["happy", "tired", "frustrated", "drained", "sad"],

    datasets: [
      {
        label: "Mood",
        data: inputData,
        backgroundColor: [
          "#DAFBD0",
          "#FFFCE3",
          "#C3C3F5",
          "#FA8072",
          "#FAE0E4",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          // "rgba(255, 99, 132, 1)",
          // "rgba(54, 162, 235, 1)",
          "#A7A9FF",
          // "rgba(75, 192, 192, 1)",
          // "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  let options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };
  return (
    <div>
      <section>
        <Bar height={400} data={data} options={options} />
      </section>
      <div>
        <h2 className="header__download">Get your data in CSV file:</h2>
        <CSVLink className="link__diary" data={data2}>
          Download My Diary
        </CSVLink>
      </div>
    </div>
  );
}

export default Chart;
