import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Charts = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255 , 0 ,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barchart = data.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(33, 150, 243,0.5)",
              "rgba(118, 255, 3,0.5)",
              "rgba(245, 0, 87,0.5),",
            ],
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        titile: { display: true, text: `You Selected : ${country}` },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      <div className="col-12 col-sm-9 offset-sm-1  ">
        {country ? barchart : lineChart}
      </div>
    </div>
  );
};
export default Charts;
