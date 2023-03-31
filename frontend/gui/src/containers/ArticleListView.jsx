import Article from "../components/Article";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomFormComponent from "../components/Form";

const ArticleList = () => {
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
      <CustomFormComponent requestType="post"></CustomFormComponent>
      <Article data={state.articles}></Article>;
    </div>
  );
};

export default ArticleList;
