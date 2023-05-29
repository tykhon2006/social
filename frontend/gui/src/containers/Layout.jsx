import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  CodepenCircleOutlined,
} from "@ant-design/icons";

import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  FloatButton,
  Rate,
  Button,
  Popover,
} from "antd";

import React, { useState } from "react";

import { NavLink } from "react-router-dom";

const CustomLayout = (props) => {
  const [value, setValue] = useState(3);

  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  const { Header, Content, Footer, Sider } = Layout;

  const items1 = [
    {
      href: "/",
      key: 0,
      label: "Home",
    },
    {
      href: "/signUp",
      key: 1,
      label: "Sign up",
    },
    {
      href: "/login",
      key: 2,
      label: "Login",
    },
  ].map((item) => ({
    key: item.href,
    label: (
      <NavLink key={item.key} to={item.href}>
        {item.label}
      </NavLink>
    ),
  }));

  const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);
      const labels = ["User", "Store", "Blog"];
      const labelText = labels[index];
      return {
        key: `sub ${key}`,
        icon: React.createElement(icon),
        label: labelText,
        children: new Array(4).fill(null).map((_, j) => {
          const subKey = `${index + 1}-${j + 1}`;
          return {
            key: subKey,
            label: `option ${subKey}`,
          };
        }),
      };
    }
  );

  const content = (
    <span>
      <Rate tooltips={desc} onChange={setValue} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
    </span>
  );
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        className="header"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink
              to="/"
              style={{
                margin: "0 20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CodepenCircleOutlined
                style={{ fontSize: "32px", color: "#08c" }}
              />
            </NavLink>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items1}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>
            <NavLink to="/">Home</NavLink>
          </Breadcrumb.Item>
          {props.isAuthenticated ? (
            <Breadcrumb.Item>
              <NavLink to="/">Logout</NavLink>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item>
              <NavLink to="/login">Login</NavLink>
            </Breadcrumb.Item>
          )}
        </Breadcrumb>
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
              }}
              items={items2}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 480,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Content>
      <FloatButton.BackTop />
      <Footer
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Popover
          content={content}
          title="Thank you for your help!"
          trigger="click"
        >
          <Button>Rate our site</Button>
        </Popover>
        Ant Design ©2023 Created by Ant UED
        <div id="#" style={{ marginRight: "5%" }}></div>
      </Footer>
    </Layout>
  );
};
export default CustomLayout;
