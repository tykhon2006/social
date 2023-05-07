import { Avatar, List } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import FormDelete from "./FormDelete";

const Article = (props) => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 10,
    }}
    dataSource={props.data}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={(item) => (
      <List.Item
        key={item.title}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<NavLink to={`/${item.id}`}>{item.title}</NavLink>}
          description={item.content}
        />
        {item.content}
        <br />
        <FormDelete
        style={{marginBottom: "50px"}}
          articleId={item.id}
          setState={props.setState}
          articles={props.data}
        />
        <div style={{ margin: "30px 10px 0 0" }} align="right">
          Updated: {item.time_update.slice(0, 10)}
        </div>
      </List.Item>
    )}
  />
);

export default Article;
