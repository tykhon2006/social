import { Routes, Route } from "react-router-dom";
import ArticleDetail from "./containers/ArticleDetailView";
import ArticleList from "./containers/ArticleListView";
import Entry from "./containers/Entry";
import Registration from "./containers/Registration";

const BaseRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/:id" element={<ArticleDetail />} />
        <Route path="/login" element={<Entry />} />
        <Route path="/signUp" element={<Registration />} />
      </Routes>
    </div>
  );
};
export default BaseRouter;
