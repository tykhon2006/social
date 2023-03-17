import './App.css';
import 'antd/dist/reset.css';
import CustomLayout from './containers/Layout.jsx';
import BaseRouter from './routers';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <CustomLayout>
        <BaseRouter />
      </CustomLayout>
    </BrowserRouter>
  )
}

export default App;