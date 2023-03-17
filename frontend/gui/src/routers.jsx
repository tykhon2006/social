import {Routes, Route} from "react-router-dom" 
import ArticleList from "./containers/ArticleListView";

const BaseRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/:id" element={<ArticleList />} />
        </Routes>
    </div>
  );
};
export default BaseRouter;
