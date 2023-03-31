import { Button, Form, Input, Checkbox } from "antd";
import axios from "axios";
import { useState } from "react";

const CustomFormComponent = (props) => {
  const [showFields, setShowFields] = useState(false);

  const handleCheckboxChange = (e) => {
    setShowFields(e.target.checked);
  };

  const handleFormSubmit = (values, requestType) => {
    const title = values.target.elements.title.value;
    const content = values.target.elements.content.value;
    const cat = values.target.elements.cat.value;
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
      default:
        console.log("Invalid request type");
    }
  };

  return (
    <Form
      onSubmitCapture={(event) => handleFormSubmit(event, props.requestType)}
    >
      <Form.Item>
        <Checkbox onChange={handleCheckboxChange}>
          Tap to create new post
        </Checkbox>
      </Form.Item>
      {showFields && (
        <fieldset id="post">
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
        </fieldset>
      )}
    </Form>
  );
};

export default CustomFormComponent;
