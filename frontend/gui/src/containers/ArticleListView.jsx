import Article from "../components/Article";
import { useEffect, useState } from "react";
import axios from "axios";

const ArticleList = (props) => {
  const [state, setState] = useState({
    articles: [],
  });
  
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/v1/postlist/')
    .then(response =>{
      setState({
        articles: response.data,
      })
    })
}, []);
  return <Article data={state.articles} />;
};


export default ArticleList;
