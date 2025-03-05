import {
    AlipayOutlined,
    LockOutlined,
    MobileOutlined,
    TaobaoOutlined,
    UserOutlined,
    WeiboOutlined,
  } from "@ant-design/icons";
  import {
    LoginFormPage,
    ProConfigProvider,
    ProFormCaptcha,
    ProFormCheckbox,
    ProFormText,
  } from "@ant-design/pro-components";
  import { Button, Divider, Space, Tabs, message, theme } from "antd";

  import type { CSSProperties } from "react";
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";

  import  logo  from "../../src/assets/logo.png";
  type LoginType = "phone" | "account";
  
  const iconStyles: CSSProperties = {
    color: "rgba(0, 0, 0, 0.2)",
    fontSize: "18px",
    verticalAlign: "middle",
    cursor: "pointer",
  };
  
  const Login = () => {
    const [loginType, setLoginType] = useState<LoginType>("phone");
    const { token } = theme.useToken();
    const navigate = useNavigate();
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "100vh",
        }}
      >
        <LoginFormPage
          backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
          logo={logo}
          backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
          title="ECOTEL"
          containerStyle={{
            backgroundColor: "rgba(0, 0, 0,0.65)",
            backdropFilter: "blur(4px)",
          }}
          submitter={{
            searchConfig: {
              submitText: "Đăng nhập", // Đặt lại chữ trên nút
            },
          }}
          onFinish={async (values) => {
            console.log("Đăng nhập thành công:", values);
            navigate("/home"); // Chuyển hướng sau khi đăng nhập
          }}
          subTitle="HỆ SINH THÁI KẾT NỐI"
          activityConfig={{
            style: {
              boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
              color: token.colorTextHeading,
              borderRadius: 8,
              backgroundColor: "rgba(255,255,255,0.25)",
              backdropFilter: "blur(4px)",
            },
            title: "Sự kiện 1",
            subTitle: "Mô tả chi tiết về sự kiện",
            action: (
              <Button
                size="large"
                style={{
                  borderRadius: 20,
                  background: token.colorBgElevated,
                  color: token.colorPrimary,
                  width: 120,
                }}
              >
                Khám phá
              </Button>
            ),
          }}
          actions={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Divider plain>
                <span
                  style={{
                    color: token.colorTextPlaceholder,
                    fontWeight: "normal",
                    fontSize: 14,
                  }}
                >
                  Các phương thức đăng nhập khác
                </span>
              </Divider>
              <Space align="center" size={24}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    height: 40,
                    width: 40,
                    border: "1px solid " + token.colorPrimaryBorder,
                    borderRadius: "50%",
                  }}
                >
                  <AlipayOutlined style={{ ...iconStyles, color: "#1677FF" }} />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    height: 40,
                    width: 40,
                    border: "1px solid " + token.colorPrimaryBorder,
                    borderRadius: "50%",
                  }}
                >
                  <TaobaoOutlined style={{ ...iconStyles, color: "#FF6A10" }} />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    height: 40,
                    width: 40,
                    border: "1px solid " + token.colorPrimaryBorder,
                    borderRadius: "50%",
                  }}
                >
                  <WeiboOutlined style={{ ...iconStyles, color: "#1890ff" }} />
                </div>
              </Space>
            </div>
          }
        >
          <Tabs
            centered
            activeKey={loginType}
            onChange={(activeKey) => setLoginType(activeKey as LoginType)}
          >
            <Tabs.TabPane key={"account"} tab={"Tài khoản"} />
            <Tabs.TabPane key={"phone"} tab={"Số điện thoại"} />
          </Tabs>
          {loginType === "account" && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: "large",
                  prefix: (
                    <UserOutlined
                      style={{
                        color: token.colorText,
                      }}
                      className={"prefixIcon"}
                    />
                  ),
                }}
                placeholder={"Nhập tên đăng nhập..."}
                // rules={[
                //   {
                //     required: true,
                //     message: "Vui lòng nhập tên đăng nhập!",
                //   },
                // ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: "large",
                  prefix: (
                    <LockOutlined
                      style={{
                        color: token.colorText,
                      }}
                      className={"prefixIcon"}
                    />
                  ),
                }}
                placeholder={"Nhập mật khẩu..."}
                // rules={[
                //   {
                //     required: true,
                //     message: "Vui lòng nhập mật khẩu!",
                //   },
                // ]}
              />
            </>
          )}
          {loginType === "phone" && (
            <>
              <ProFormText
                fieldProps={{
                  size: "large",
                  prefix: (
                    <MobileOutlined
                      style={{
                        color: token.colorText,
                      }}
                      className={"prefixIcon"}
                    />
                  ),
                }}
                name="mobile"
                placeholder={"Số điện thoại"}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số điện thoại!",
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: "Số điện thoại không hợp lệ!",
                  },
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: "large",
                  prefix: (
                    <LockOutlined
                      style={{
                        color: token.colorText,
                      }}
                      className={"prefixIcon"}
                    />
                  ),
                }}
                captchaProps={{
                  size: "large",
                }}
                placeholder={"Nhập mã xác nhận"}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} ${"Lấy mã xác nhận"}`;
                  }
                  return "Lấy mã xác nhận";
                }}
                name="captcha"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mã xác nhận!",
                  },
                ]}
                onGetCaptcha={async () => {
                  message.success(
                    "Lấy mã xác nhận thành công! Mã xác nhận là: 1234"
                  );
                }}
              />
            </>
          )}
          <div
            style={{
              marginBlockEnd: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              Ghi nhớ đăng nhập
            </ProFormCheckbox>
            <a
              style={{
                float: "right",
              }}
            >
              Quên mật khẩu
            </a>
          </div>
        </LoginFormPage>
      </div>
    );
  };
  
  export default () => {
    return (
      <ProConfigProvider dark>
        <Login />
      </ProConfigProvider>
    );
  };