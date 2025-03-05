
import React from "react";
import ReactDOM from 'react-dom';
import {HistoryOutlined } from "@ant-design/icons";

import { Button, Row, Select, Card } from "antd";
import { PageHeader } from "@ant-design/pro-components";
import { Gauge } from '@ant-design/plots';

import homedata from "../data/homedata.json";
import config from "../data/oee";
import Demo from "./Demo";

const routes = [
  {
    path: "index",
    breadcrumbName: "Trang chủ",
  },
  {
    path: "first",
    breadcrumbName: "Giám sát hiệu suất toàn nhà máy",
  },
];
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const content = (
  <div className="flex flex-row space-x-2.5">
    {homedata.filters.map((filter, index) => (
      <div key={index}>
        <Button type="primary" ghost className="mr-2.5" size="small">
          {filter.icon ? <HistoryOutlined /> : filter.title}
        </Button>
        <Select
          defaultValue={filter.defaultValue}
          size="small"
          style={{ width: filter.width }}
          onChange={handleChange}
          options={filter.options}
        />
      </div>
    ))}
  </div>
);

const Content: React.FC<{
  children: React.ReactNode;
  extraContent: React.ReactNode;
}> = ({ children, extraContent }) => (
  <Row>
    <div style={{ flex: 1 }}>{children}</div>
    <div className="image">{extraContent}</div>
  </Row>
);

const Home: React.FC = () => (
  <div className="h-full bg-[#F0F2F5] overflow-auto">
    <div
      style={{
        background: "white",
        minWidth: "100%",
        width: "100vw",
      }}
    >
      <PageHeader
        title="Giám sát hiệu suất toàn nhà máy"
        className=""
        // subTitle="This is a subtitle"
        onBack={() => null}
        // tags={<Tag color="blue">Running</Tag>}
        extra={
          [
            // <Button key="3">Operation</Button>,
            // <Button key="2">Operation</Button>,
            // <Button key="1" type="primary">
            //   Primary
            // </Button>,
            // <DropdownMenu key="more" />,
          ]
        }
        avatar={{
          src: "https://avatars.githubusercontent.com/u/142032868?v=4",
        }}
        breadcrumb={{ routes }}
      >
        <Content
        // extraContent={
        //   <img
        //     src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
        //     alt="content"
        //     width="100%"
        //   />
        // }
        >
          {content}
        </Content>
        {/* <div className="w-full bg-black h-[1px] mt-4"></div> */}
      </PageHeader>
    </div>

    <div className="flex">
      <div>
        <div className="p-4 flex flex-row" style={{ gap: "16px" }}>
          {/* <Card className="w-[330px] h-[182px]"><Gauge {...config} /></Card> */}
          <div className="w-[330px] h-[182px] p-0"><div><Demo/></div></div>
          <Card className="w-[330px] h-[182px]">1</Card>
          <Card className="w-[455px] h-[182px]">1</Card>
        </div>
        <div className="flex">
          <div>
            <div className="px-4 flex flex-row" style={{ gap: "16px" }}>
              <Card className="w-[200px] h-[76px]">1</Card>
              <Card className="w-[200px] h-[76px]">1</Card>
              <Card className="w-[200px] h-[76px]">1</Card>
            </div>
            <div className="px-4 pt-4 flex flex-row" style={{ gap: "16px" }}>
              <Card className="w-[200px] h-[76px]">1</Card>
              <Card className="w-[200px] h-[76px]">1</Card>
              <Card className="w-[200px] h-[76px]">1</Card>
            </div>
          </div>
          <Card className="w-[500px]">1</Card>
        </div>
      </div>
      <div className="flex flex-col pt-4">
        <Card className="w-[260px] h-[76px]">1</Card>
        <Card className="w-[260px] h-[76px]" style={{ marginTop: 8 }}>
          1
        </Card>
        <Card className="w-[260px] h-[76px]" style={{ marginTop: 8 }}>
          1
        </Card>
        <Card className="w-[260px] h-[76px]" style={{ marginTop: 8 }}>
          1
        </Card>
        <div className="w-[260px] h-[29px] bg-white rounded mt-2">1</div>
      </div>
    </div>
  </div>
);

export default Home;
