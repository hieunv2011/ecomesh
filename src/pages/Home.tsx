import React, { useEffect, useState } from "react";
import { HistoryOutlined } from "@ant-design/icons";
import { Button, Row, Col, Select, Card, Image, Table } from "antd";
import { PageHeader } from "@ant-design/pro-components";
import homedata from "../data/homedata.json";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "highcharts/highcharts-more";
import "highcharts/modules/solid-gauge";
// import Demo from "./Demo";

const WebSocketURL = "ws://localhost:8080";
const data = [
  { title: "Name", value: "Mike" },
  { title: "Age", value: 32 },
  { title: "Address", value: "Street" },
];
const Chart: React.FC = () => {
  const [speed, setSpeed] = useState<number>(80);

  useEffect(() => {
    const socket = new WebSocket(WebSocketURL);

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data && typeof data.speed === "number") {
          setSpeed(Math.max(0, Math.min(200, data.speed)));
        }
      } catch (error) {
        console.error("WebSocket data error:", error);
      }
    };

    socket.onerror = (error) => console.error("WebSocket error:", error);
    socket.onclose = () => console.log("WebSocket disconnected");

    return () => socket.close();
  }, []);

  const options: Highcharts.Options = {
    chart: {
      type: "gauge",
      height: "75%",
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
    },
    title: { text: "OEEE", y: 20 },
    credits: { enabled: false },
    pane: {
      startAngle: -90,
      endAngle: 90,
      background: null,
      center: ["50%", "75%"],
      size: "120%",
    },
    yAxis: {
      min: 0,
      max: 200,
      tickPixelInterval: 50,
      tickPosition: "inside",
      tickLength: 20,
      tickWidth: 2,
      minorTickInterval: null,
      labels: { distance: 20, style: { fontSize: "14px" } },
      lineWidth: 0,
      plotBands: [
        { from: 0, to: 130, color: "#55BF3B", thickness: 20 },
        { from: 120, to: 160, color: "#DDDF0D", thickness: 20 },
        { from: 150, to: 200, color: "#DF5353", thickness: 20 },
      ],
    },
    series: [
      {
        type: "gauge",
        name: "Speed",
        data: [speed],
        tooltip: { valueSuffix: " km/h" },
        dataLabels: {
          format: "{y} km/h",
          borderWidth: 0,
          style: { fontSize: "16px" },
        },
        dial: {
          radius: "80%",
          backgroundColor: "gray",
          baseWidth: 12,
          baseLength: "0%",
          rearLength: "0%",
        },
        pivot: { backgroundColor: "gray", radius: 6 },
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
const PieChart: React.FC = () => {
  const [value1, setValue1] = useState<number>(60);
  const [value2, setValue2] = useState<number>(40);

  useEffect(() => {
    const socket = new WebSocket(WebSocketURL);

    socket.onmessage = (event) => {
      try {
        const receivedData = JSON.parse(event.data);
        if (
          typeof receivedData.value1 === "number" &&
          typeof receivedData.value2 === "number"
        ) {
          setValue1(receivedData.value1);
          setValue2(receivedData.value2);
        }
      } catch (error) {
        console.error("WebSocket data error:", error);
      }
    };

    socket.onerror = (error) => console.error("WebSocket error:", error);
    socket.onclose = () => console.log("WebSocket disconnected");

    return () => socket.close();
  }, []);

  const options: Highcharts.Options = {
    chart: {
      type: "pie",
      height: "60%",
      // events: {
      //   render() {
      //     const chart = this;
      //     const series = chart.series[0];

      //     if (!chart.options.chart.custom) {
      //       chart.options.chart.custom = {};
      //     }

      //     let customLabel = chart.options.chart.custom.label;

      //     if (!customLabel) {
      //       customLabel = chart.options.chart.custom.label = chart.renderer
      //         .label(`<strong>${value1 + value2}</strong>`, 0, 0)
      //         .css({ color: "#000", textAnchor: "middle", fontSize: "14px" })
      //         .add();
      //     }

      //     const x = series.center[0] + chart.plotLeft;
      //     const y =
      //       series.center[1] + chart.plotTop - customLabel.attr("height") / 2;

      //     customLabel.attr({ x, y }).css({ fontSize: `${series.center[2] / 10}px` });
      //   },
      // },
    },
    credits: { enabled: false },
    title: { text: "", y: 15 },
    exporting: { enabled: false },
    tooltip: { pointFormat: "<b>{point.percentage:.0f}%</b>" },
    plotOptions: {
      pie: {
        innerSize: "60%",
        dataLabels: { enabled: false },
      },
    },
    series: [
      {
        type: "pie",
        name: "Values",
        data: [
          { name: "Data 1", y: value1, color: "#55BF3B" },
          { name: "Data 2", y: value2, color: "#DF5353" },
          { name: "Remaining", y: 100 - (value1 + value2), color: "#DDDDDD" },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
const PieChart1: React.FC = () => {
  const [value1, setValue1] = useState<number>(60);
  const [value2, setValue2] = useState<number>(40);

  useEffect(() => {
    const socket = new WebSocket(WebSocketURL);

    socket.onmessage = (event) => {
      try {
        const receivedData = JSON.parse(event.data);
        if (
          typeof receivedData.value1 === "number" &&
          typeof receivedData.value2 === "number"
        ) {
          setValue1(receivedData.value1);
          setValue2(receivedData.value2);
        }
      } catch (error) {
        console.error("WebSocket data error:", error);
      }
    };

    socket.onerror = (error) => console.error("WebSocket error:", error);
    socket.onclose = () => console.log("WebSocket disconnected");

    return () => socket.close();
  }, []);

  const options: Highcharts.Options = {
    chart: {
      type: "pie",
      height: "60%",
      // events: {
      //   render() {
      //     const chart = this;
      //     const series = chart.series[0];

      //     if (!chart.options.chart.custom) {
      //       chart.options.chart.custom = {};
      //     }

      //     let customLabel = chart.options.chart.custom.label;

      //     if (!customLabel) {
      //       customLabel = chart.options.chart.custom.label = chart.renderer
      //         .label(`<strong>${value1 + value2}</strong>`, 0, 0)
      //         .css({ color: "#000", textAnchor: "middle", fontSize: "14px" })
      //         .add();
      //     }

      //     const x = series.center[0] + chart.plotLeft;
      //     const y =
      //       series.center[1] + chart.plotTop - customLabel.attr("height") / 2;

      //     customLabel.attr({ x, y }).css({ fontSize: `${series.center[2] / 10}px` });
      //   },
      // },
    },
    credits: { enabled: false },
    title: { text: "", y: 15 },
    exporting: { enabled: false },
    tooltip: { pointFormat: "<b>{point.percentage:.0f}%</b>" },
    plotOptions: {
      pie: {
        innerSize: "60%",
        dataLabels: { enabled: true },
      },
    },
    series: [
      {
        type: "pie",
        name: "Values",
        data: [
          { name: "Data 1", y: value1, color: "#55BF3B" },
          { name: "Data 2", y: value2, color: "#DF5353" },
          // { name: "", y: 100 - (value1 + value2), color: "#DDDDDD" },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

const routes = [
  { path: "index", breadcrumbName: "Trang chủ" },
  { path: "first", breadcrumbName: "Giám sát hiệu suất toàn nhà máy" },
];

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const Filters = () => (
  <Row gutter={10}>
    {homedata.filters.map((filter, index) => (
      <Col key={index}>
        <Button type="primary" ghost size="small">
          {filter.icon ? <HistoryOutlined /> : filter.title}
        </Button>
        <Select
          defaultValue={filter.defaultValue}
          size="small"
          style={{ width: filter.width, marginLeft: 8 }}
          onChange={handleChange}
          options={filter.options}
        />
      </Col>
    ))}
  </Row>
);

const dataSource = [
  { key: "1", name: "Mike", age: 32, address: "10 Downing Street", job: "Engineer", salary: 5000 },
  { key: "2", name: "John", age: 42, address: "10 Downing Street", job: "Doctor", salary: 7000 },
  { key: "3", name: "Anna", age: 28, address: "15 Oxford Street", job: "Designer", salary: 4500 },
  { key: "4", name: "David", age: 35, address: "20 Baker Street", job: "Developer", salary: 6000 },
  { key: "5", name: "Sophia", age: 30, address: "5 High Street", job: "Architect", salary: 5500 },
  { key: "6", name: "Liam", age: 45, address: "8 Main Street", job: "Manager", salary: 8000 },
  { key: "7", name: "Emma", age: 27, address: "12 Elm Street", job: "Nurse", salary: 4800 },
  { key: "8", name: "Oliver", age: 38, address: "18 Oak Street", job: "Analyst", salary: 6200 },
  { key: "9", name: "Ava", age: 33, address: "22 Pine Street", job: "Teacher", salary: 4700 },
  { key: "10", name: "Noah", age: 40, address: "30 Maple Street", job: "Scientist", salary: 7500 },
  { key: "11", name: "Isabella", age: 29, address: "35 Cedar Street", job: "Marketing", salary: 5300 },
  { key: "12", name: "James", age: 50, address: "40 Birch Street", job: "Lawyer", salary: 9000 },
  { key: "13", name: "Charlotte", age: 26, address: "45 Willow Street", job: "HR", salary: 4600 },
  { key: "14", name: "Benjamin", age: 37, address: "50 Spruce Street", job: "Consultant", salary: 6700 },
  { key: "15", name: "Mia", age: 31, address: "55 Redwood Street", job: "Writer", salary: 4900 },
];

const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Address", dataIndex: "address", key: "address" },
  { title: "Job", dataIndex: "job", key: "job" },
  { title: "Salary", dataIndex: "salary", key: "salary" },
];


const Home: React.FC = () => (
  <div className="h-full bg-[#F0F2F5] overflow-auto">
    <div style={{ background: "white", width: "100vw" }}>
      <PageHeader
        title="Giám sát hiệu suất toàn nhà máy"
        breadcrumb={{ routes }}
        avatar={{
          src: "https://avatars.githubusercontent.com/u/142032868?v=4",
        }}
      >
        <Filters />
      </PageHeader>
    </div>

    <Row gutter={[16, 16]} className="p-4">
      <Col span={6}>
        <div className="h-60 bg-white flex flex-col items-center ">
          <p className="font-bold text-red-500 text-center mb-auto">
            DISCONNECTED
          </p>
          <div className="w-full mt-auto">
            <Image
              width={"100%"}
              height={"210px"}
              src="https://documents.trendmicro.com/images/TEx/articles/ALookIntoSmartFactory.jpg"
            />
          </div>
        </div>
        <div className="h-2"></div>
        <Select
          defaultValue="lucy"
          style={{ width: "100%" }}
          onChange={handleChange}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
      </Col>
      <Col span={6}>
        <div className="h-70 bg-white">
          <Chart />
          {/* <Demo/> */}
        </div>
      </Col>
      <Col span={12}>
        <Row className="h-70 bg-white" gutter={[16, 16]}>
          <Col span={8}>
            <PieChart />
            <p className="text-center font-bold">Khả dụng</p>
            <div
              style={{
                display: "table",
                borderCollapse: "collapse",
                width: "100%",
              }}
            >
              {data.map((row, index) => (
                <div
                  key={index}
                  style={{ display: "table-row", height: "28px" }}
                >
                  <div
                    style={{
                      display: "table-cell",
                      width: "100px",
                      padding: "4px",
                      background: "#f5f5f5",
                      fontWeight: "bold",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    {row.title}
                  </div>
                  <div
                    style={{
                      display: "table-cell",
                      width: "100px",
                      padding: "4px",
                      borderBottom: "1px solid #ddd",
                      textAlign: "right",
                    }}
                  >
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col span={8}>
            <PieChart />
            <p className="text-center font-bold">Khả dụng</p>
            <div
              style={{
                display: "table",
                borderCollapse: "collapse",
                width: "100%",
              }}
            >
              {data.map((row, index) => (
                <div
                  key={index}
                  style={{ display: "table-row", height: "28px" }}
                >
                  <div
                    style={{
                      display: "table-cell",
                      width: "100px",
                      padding: "4px",
                      background: "#f5f5f5",
                      fontWeight: "bold",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    {row.title}
                  </div>
                  <div
                    style={{
                      display: "table-cell",
                      width: "100px",
                      padding: "4px",
                      borderBottom: "1px solid #ddd",
                      textAlign: "right",
                    }}
                  >
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col span={8}>
            <PieChart />
            <p className="text-center font-bold">Khả dụng</p>
            <div
              style={{
                display: "table",
                borderCollapse: "collapse",
                width: "100%",
              }}
            >
              {data.map((row, index) => (
                <div
                  key={index}
                  style={{ display: "table-row", height: "28px" }}
                >
                  <div
                    style={{
                      display: "table-cell",
                      width: "100px",
                      padding: "4px",
                      background: "#f5f5f5",
                      fontWeight: "bold",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    {row.title}
                  </div>
                  <div
                    style={{
                      display: "table-cell",
                      width: "100px",
                      padding: "4px",
                      borderBottom: "1px solid #ddd",
                      textAlign: "right",
                    }}
                  >
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row gutter={[16, 16]} className="p-4">
      <Col className="bg-white p-4" span={6}>
        <p>Thời gian dự kiến máy lỗi</p>
        <PieChart1 />
        <p>Thời gian hết khấu hao</p>
        <PieChart1 />
      </Col>
      <Col className="bg-white p-4" span={18}>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ pageSize: 7 }}
        />
      </Col>
    </Row>
  </div>
);

export default Home;
