import './App.css';
import 'antd/dist/reset.css';
import CustomLayout from './containers/Layout.jsx';
import BaseRouter from './routers';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function App(props) {
  return (
    <BrowserRouter>
      <CustomLayout {...props}>
        <BaseRouter />
      </CustomLayout>
    </BrowserRouter>
  )
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token,
  }
}

export default connect(mapStateToProps)(App);