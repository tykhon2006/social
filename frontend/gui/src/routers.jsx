import { Routes, Route } from "react-router-dom";
import ArticleDetail from "./containers/ArticleDetailView";
import ArticleList from "./containers/ArticleListView";
import Registration from "./components/Registration";
import Entry from "./components/Entry";

const BaseRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/:id" element={<ArticleDetail />} />
        <Route path="/login" element={<Registration />} />
        <Route path="/signUp" element={<Entry />} />
      </Routes>
    </div>
  );
};
export default BaseRouter;
