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

  // style={{
  //   marginTop: "20px",
  //   background: "rgba( 255, 255, 255, 0.15 )",
  //   boxShadow: "0 0px 10px 0 rgba( 31, 38, 135, 0.1 )",
  //   backdropfilter: "blur( 20px )",
  //   borderRadius: "10px",
  //   border: "1px solid rgba( 255, 255, 255, 0.18 )",
  //   WebkitBackdropFilter: "blur( 20px )",
  //   padding: "10px",
  // }}
  return (
    <div
      style={{
        background: "#f8f8f8",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <Card title={`${state.article.title}`} bordered={false}>
          {state.article.content}
          <br />
          Category: {state.article.cat}
          <div align="right">Created: {time_create.slice(0, 10)}</div>
        </Card>
      </div>

      <div
        style={{
          background: "rgba( 255, 255, 255 )",
          boxShadow: "0 0px 10px 0 rgba( 31, 38, 135, 0.1 )",
          backdropfilter: "blur( 20px )",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
          WebkitBackdropFilter: "blur( 20px )",
          padding: "10px",
        }}
      >
        <h3 style={{ margin: "0 0 20px 0" }}>Update post</h3>
        <CustomFormComponent
          style={{ background: "white !important" }}
          requestType="put"
          setArticleState={setState}
          article={state.article}
          articleId={articleId}
        ></CustomFormComponent>
      </div>
    </div>
  );
};
export default ArticleDetail;
