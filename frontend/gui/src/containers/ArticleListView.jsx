import Article from "../components/Article";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomFormComponent from "../components/Form";
import Entry from "../components/Entry";
import Registration from "../components/Registration";

function ArticleList() {
  const [state, setState] = useState({
    articles: [],
  });

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/v1/postlist/").then((response) => {
      setState({
        articles: response.data,
      });
    });
  }, []);
  return (
    <div>
      <h3 style={{ margin: "20px 0 0 0" }}>Make post</h3>
      <CustomFormComponent
        requestType="post"
        setState={setState}
        articles={state.articles}
      />
      <Article data={state.articles} setState={setState}></Article>
    </div>
  );
}

export default ArticleList;
