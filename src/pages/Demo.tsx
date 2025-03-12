import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "timeline",
  },
  title: {
    text: "Timeline Example",
  },
  xAxis: {
    type: "datetime",
    visible: false,
  },
  yAxis: {
    visible: false,
  },
  series: [
    {
      dataLabels: {
        allowOverlap: false,
      },
      marker: {
        symbol: "circle",
      },
      data: [
        {
          x: Date.UTC(2024, 2, 1, 8),
          name: "Bắt đầu",
          label: "08:00",
        },
        {
          x: Date.UTC(2024, 2, 1, 12),
          name: "Giữa chừng",
          label: "12:00",
        },
        {
          x: Date.UTC(2024, 2, 1, 18),
          name: "Kết thúc",
          label: "18:00",
        },
      ],
    },
  ],
};

const Demo = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Demo;
