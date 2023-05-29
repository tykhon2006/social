import { Button, Form } from "antd";
import axios from "axios";
const FormDelete = (props) => {
  const handleFormDelete = (articleId) => {
    return axios
      .delete(`http://127.0.0.1:8000/api/v1/delete/${articleId}/`, {
        headers: {
          Authorization: `Token 1eda7d5d3daedb1d1e9fe0736b9b9f3d30f0298b`,
        },
      })
      .then(() => {
        props.setState({
          articles: props.articles.filter(
            (article) => article.id !== articleId
          ),
        });
      });
  };
  return (
    <Form
      name="basic"
      onSubmitCapture={() => handleFormDelete(props.articleId)}
    >
      <Form.Item>
        <Button type="primary" danger htmlType="submit">
          Delete
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormDelete;
