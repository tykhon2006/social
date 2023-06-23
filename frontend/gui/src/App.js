import './App.css';
import 'antd/dist/reset.css';
import CustomLayout from './containers/Layout.jsx';
import BaseRouter from './routers';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from "./store/actions/auth"
import { useEffect } from 'react';

function App(props) {
  useEffect(()=>{
    props.onTryAutoSignUp()
  }, [])
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

const mapDispatchToProps = dispatch =>{
  return{
    onTryAutoSignUp: ()=> dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);