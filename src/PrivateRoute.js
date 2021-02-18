import React from 'react'
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route {...rest} render={props => (
      Cookies.get('token') ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
    )} />
  );

  export default PrivateRoute
  