import Article from "../components/Article";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomFormComponent from "../components/Form";

function ArticleList() {
  const [state, setState] = useState({
    articles: [],
  });

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/postlist/", {
        headers: {
          Authorization: "Token " + "1eda7d5d3daedb1d1e9fe0736b9b9f3d30f0298b",
        },
      })
      .then((response) => {
        setState({
          articles: response.data,
        });
      });
  }, []);
  return (
    <div>
      <div
        style={{
          background: "rgba( 255, 255, 255, 0.15 )",
          boxShadow: "0 0px 10px 0 rgba( 31, 38, 135, 0.1 )",
          backdropfilter: "blur( 20px )",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
          WebkitBackdropFilter: "blur( 20px )",
          padding: "10px",
        }}
      >
        <h3>Make post</h3>
        <CustomFormComponent
          style={{
            backgroundColor: "#F9F9F9",
          }}
          requestType="post"
          setState={setState}
          articles={state.articles}
        />
      </div>
      <Article data={state.articles} setState={setState}></Article>
    </div>
  );
}

export default ArticleList;
