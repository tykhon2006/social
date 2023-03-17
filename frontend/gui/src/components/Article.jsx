import { Avatar, List } from "antd";
import React from "react";

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
          title={<a href={item.href}>{item.title}</a>}
          description={item.content}
        />
        {item.content}
        <br />
        <div style={{ margin: "30px 10px 0 0" }} align="right" >{item.time_update.slice(0, 10)}</div>
      </List.Item>
    )}
  />
);

export default Article;
