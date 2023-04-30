import { Button, Form } from "antd";
import axios from "axios";
const FormDelete = (props) => {
  const handleFormDelete = (articleId) => {
    return axios.delete(`api/v1/delete/${articleId}`)
    .then(response => {
      console.log(response);
      alert('Article deleted successfully.');
    })
  };
  return (
    <Form
      name="basic"
      onSubmitCapture={() => handleFormDelete(props.articleId)}
    >
      <Form.Item>
        <Button type="primary" danger  htmlType="submit">
          Delete
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormDelete;
