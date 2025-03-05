import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    height: 190, 
  },
  title: {
    text: "My Chart",
    style: { fontSize: "12px" }, 
  },
  credits: {
    enabled: false, 
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
};

const Demo = () => (
  <div style={{ width: "100%", height: "100%" }}>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

export default Demo;
