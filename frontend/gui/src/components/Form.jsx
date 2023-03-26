import { Button, Form, Input, Cascader } from "antd";
import axios from "axios";
import { useState } from "react";

const CustomFormComponent = () => {
  const [requestType, setRequestType] = useState(null);
  const [showUpdateForm] = useState(false);
  const options = [
    {
      value: "post",
      label: "Post",
    },
    {
      value: "get",
      label: "Get post",
    },
  ];

  const onChange = (value) => {
    setRequestType(value[0]);
  };

  const handleFormSubmit = (values) => {
    const title = values.target.elements.title.value;
    const content = values.target.elements.content.value;
    const cat = values.target.elements.cat.value;
    const postId = values.target.elements.postId.value;

    switch (requestType) {
      case "post":
        return axios
          .post("http://127.0.0.1:8000/api/v1/postlist/", {
            title: title,
            content: content,
            cat: cat,
            user: 1,
          })
          .then((response) => console.log(response));
      case "get":
        return axios
          .get(`http://127.0.0.1:8000/api/v1/postlist/${postId}/`)
          .then((response) => console.log(response));
      default:
        console.log("Invalid request type");
    }
  };

  return (
    <Form onSubmitCapture={handleFormSubmit}>
      <Cascader
        options={options}
        onChange={onChange}
        placeholder="Please select form"
      />
      {requestType === "post" && (
        <Form id="post">
          <Form.Item label="Post title">
            <Input placeholder="Put a title here" name="title" />
          </Form.Item>
          <Form.Item label="Content">
            <Input placeholder="Enter some content" name="content" />
          </Form.Item>
          <Form.Item label="Category">
            <Input placeholder="Enter category" name="cat" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
      {requestType === "get" && (
        <Form id="get">
          <Form.Item label="Post id">
            <Input placeholder="Enter post id" name="postId" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" name="submit">
              Submit
            </Button>
          </Form.Item>
          {showUpdateForm && (
            <Form>
              <Form.Item label="Update title">
                <Input placeholder="Put a title here" name="title" />
              </Form.Item>
              <Form.Item label="Content">
                <Input placeholder="Enter some content" name="content" />
              </Form.Item>
              <Form.Item label="Category">
                <Input placeholder="Enter category" name="cat" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          )}
        </Form>
      )}
    </Form>
  );
};
export default CustomFormComponent;
