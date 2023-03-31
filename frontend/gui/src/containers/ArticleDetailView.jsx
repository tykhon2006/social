import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, Button, Form, Input, Checkbox } from "antd";

const ArticleDetail = (props) => {
  const [showFields, setShowFields] = useState(false);

  const handleCheckboxChange = (e) => {
    setShowFields(e.target.checked);
  };
  const [state, setState] = useState({
    article: {},
  });
  const { article } = state;
  const time_create = article.time_create ? article.time_create : "";
  const articleId = useParams().id;
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/v1/postlist/${articleId}`)
      .then((response) => {
        setState({
          article: response.data,
        });
      });
  }, [articleId]);
  const handleFormSubmit = (values, requestType) => {
    const title = values.target.elements.title.value;
    const content = values.target.elements.content.value;
    const cat = values.target.elements.cat.value;
    switch (requestType) {
      case "put":
        return axios
          .put(`http://127.0.0.1:8000/api/v1/postlist/${articleId}/`, {
            title: title,
            content: content,
            cat: cat,
          })
          .then((response) => console.log(response));
      default:
        console.log(requestType);
        console.log("Invalid request type");
    }
  };

  return (
    <Form onSubmitCapture={(event) => handleFormSubmit(event, "put")} >
      <Card title={`${state.article.title}`} bordered={false}>
        {state.article.content}
        <br />
        Category: {state.article.cat}
        <div align="right">Created: {time_create.slice(0, 10)}</div>
      </Card>
      <Form.Item style={{ marginTop: "10px" }}>
        <Checkbox onChange={handleCheckboxChange}>
          Tap to edit this post
        </Checkbox>
      </Form.Item>
      {showFields && (
        <fieldset id="put">
          <Form.Item label="Edit title">
            <Input placeholder={state.article.title} name="title" />
          </Form.Item>
          <Form.Item label="Edit content">
            <Input placeholder={state.article.content} name="content" />
          </Form.Item>
          <Form.Item label="Edit category">
            <Input placeholder={state.article.cat} name="cat" />
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
export default ArticleDetail;
