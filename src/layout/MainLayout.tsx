import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
  UserOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Layout, theme, Avatar, Badge, Image } from "antd";
import { Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import Sidebar from "../components/Sidebar";
const { Header, Content } = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar collapsed={collapsed} />
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 0,
            height: 48, 
            position: "sticky",
            top: 0,
            zIndex: 1000, 
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                color: "white",
              }}
            />
            <Image src={logo} preview={false} width={100} alt="Logo" />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              marginRight: "16px",
            }}
          >
            <SearchOutlined
              style={{
                fontSize: "18px",
                height: "16px",
                color: "white",
                cursor: "pointer",
              }}
            />
            <QuestionCircleOutlined
              style={{
                fontSize: "18px",
                height: "16px",
                color: "white",
                cursor: "pointer",
              }}
            />
            <Badge count={5} size="small">
              <BellOutlined
                style={{ fontSize: "16px", color: "white", cursor: "pointer" }}
              />
            </Badge>
            <div className="flex flex-row items-center p-4">
              <Avatar size="large" icon={<UserOutlined />} />
              <p className="text-white">Nguyễn Việt Hiếu</p>
            </div>
          </div>
        </Header>
        <Content
          style={{
            // margin: "24px 16px",
            // padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
          {/* <div className="bg-red-300 h-[1000px]"></div> */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
