import {Routes, Route} from "react-router-dom" 
import ArticleDetail from "./containers/ArticleDetailView";
import ArticleList from "./containers/ArticleListView";

const BaseRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/:id" element={<ArticleDetail />} />
        </Routes>
    </div>
  );
};
export default BaseRouter;
