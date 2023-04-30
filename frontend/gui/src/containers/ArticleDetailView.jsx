import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card } from "antd";
import CustomFormComponent from "../components/Form";

const ArticleDetail = () => {
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

  return (
    <div>
      <Card title={`${state.article.title}`} bordered={false}>
        {state.article.content}
        <br />
        Category: {state.article.cat}
        <div align="right">Created: {time_create.slice(0, 10)}</div>
      </Card>
      <h3 style={{ margin: "20px 0 0 0" }}>Update post</h3>
      <CustomFormComponent
        requestType="put"
        articleId={articleId}
      ></CustomFormComponent>
    </div>
  );
};
export default ArticleDetail;
