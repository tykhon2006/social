import { Button, Form, Input, Checkbox, Select } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";

const CustomFormComponent = (props) => {
  const [showFields, setShowFields] = useState(false);
  const [state, setState] = useState({
    cats: [],
    catSelectedId: 1,
  });
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/v1/cats/").then((response) => {
      setState({
        cats: response.data,
        catSelectedId: response.data[0].id,
      });
    });
  }, []);

  const handleChange = (value) => {
    setState({
      ...state,
      catSelectedId: value,
    });
  };

  const handleCheckboxChange = (e) => {
    setShowFields(e.target.checked);
  };

  const handleFormSubmit = (values, requestType, articleId) => {
    const title = values.target.elements.title.value;
    const content = values.target.elements.content.value;
    switch (requestType) {
      case "post":
        return axios
          .post("http://127.0.0.1:8000/api/v1/postlist/", {
            title: title,
            content: content,
            cat: state.catSelectedId,
            user: 1,
          })
          .then((response) =>{
            props.setState({
              articles: [response.data, ...props.articles]
            })}
          );
      case "put":
        return axios
          .put(`http://127.0.0.1:8000/api/v1/postlist/${articleId}/`, {
            title: title,
            content: content,
            cat: state.catSelectedId,
            user: 1,
          })
          .then((response) => console.log(response.data));
      default:
        console.log("Invalid request type");
    }
  };

  return (
    <Form
      onSubmitCapture={(event) =>
        handleFormSubmit(event, props.requestType, props.articleId)
      }
    >
      <Form.Item>
        <Checkbox onChange={handleCheckboxChange}>
          Tap to open the form
        </Checkbox>
      </Form.Item>
      {showFields && (
        <fieldset id="post">
          <Form.Item label="Post title">
            <Input placeholder="Enter title here" name="title" required />
          </Form.Item>

          <Form.Item label="Content">
            <Input.TextArea
              placeholder="Enter some content here"
              name="content"
            />
          </Form.Item>

          <Form.Item label="Category">
            <Select
              placeholder="Choose category here"
              defaultValue={state.cats[0].name}
              name="cat"
              onChange={handleChange}
              options={state.cats.map((cat) => ({
                value: cat.id,
                label: cat.name,
              }))}
            />
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
