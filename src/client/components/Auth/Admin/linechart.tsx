import React from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  const series = [
    //data on the y-axis
    {
      name: "Temperature in Celsius",
      data: [200, 400, 600, 800, 1000],
    },
  ];

  const options = {
    //data on the x-axis
    chart: { id: "bar-chart" },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "April", "May"],
    },
    yaxis: {
        min: 0,           // Minimum value on the Y-axis
        max: 1000,        // Maximum value on the Y-axis (adjust this based on your needs)
        tickAmount: 5,    // Number of ticks or intervals
      },
  };

  return (
    <div>
      <Chart options={options} series={series} type="line" width="850" />
    </div>
  );
};

export default LineChart;
