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

import { authLogout } from "../store/actions/auth";
import { connect } from "react-redux";

const CustomLayout = (props) => {
  const updateActiveItem = () => {
    const menuComponent = document.getElementById("Menu");
    const childElements = menuComponent.childNodes;
    for (let i = 0; i < childElements.length; i++) {
      if (childElements[i].classList.contains("ant-menu-item-selected")) {
        childElements[i].classList.remove("ant-menu-item-selected");
      }
    }
  };
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
      href: "/profile",
      key: 1,
      label: "Profile",
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
      const labelStyles = [
        { borderBottom: "1px solid #ffb703" },
        { borderBottom: "1px solid #219ebc" },
        { borderBottom: "1px solid #023047" },
      ];

      return {
        key: `sub ${key}`,
        icon: React.createElement(icon),
        label: <div style={labelStyles[index]}>{labelText}</div>,
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
                onClick={updateActiveItem}
                style={{ fontSize: "32px", color: "#08c" }}
              />
            </NavLink>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Menu
          id={"Menu"}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items1}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
          backgroundColor: "#d8e1e9"
        }}
      >
        <Breadcrumb
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>
            <NavLink
              to="/signUp"
              style={{
                borderBottom: "2px solid #0096c7",
              }}
            >
              Sign up
            </NavLink>
          </Breadcrumb.Item>
          {props.isAuthenticated ? (
            <Breadcrumb.Item>
              <NavLink
                style={{
                  borderBottom: "2px solid #e63946",
                }}
                onClick={props.logout}
              >
                Logout
              </NavLink>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item>
              <NavLink
                to="/login"
                style={{
                  borderBottom: "2px solid #8ac926",
                }}
              >
                Login
              </NavLink>
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

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(authLogout()),
  };
};
export default connect(null, mapDispatchToProps)(CustomLayout);
