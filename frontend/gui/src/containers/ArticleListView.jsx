import Article from "../components/Article";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomFormComponent from "../components/Form";

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
      <h3>Make post</h3>
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
