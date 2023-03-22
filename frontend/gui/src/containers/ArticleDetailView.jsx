import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card } from "antd";

const ArticleDetail = (props) => {
  const [state, setState] = useState({
    article: {},
  });
  const { article } = state;
  const time_create = article ? article.time_create : '';
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
    
    <Card title={`${state.article.title}`} bordered={false}>
      {state.article.content}
      <br />
      Category: {state.article.cat}
      <br />
      <div style={{ margin: "30px 10px 0 0" }} align="right">
        Created: {time_create}
      </div>
    </Card>
  );
};
export default ArticleDetail;