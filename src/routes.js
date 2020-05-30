import React, { Component } from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Logon from './pages/Logon'
import Signin from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import { isAuthenticate } from './auth'

const PrivateRoute = ({ component: Component, ...rest }) => (

  <Route {...rest} render={props  => isAuthenticate() ? (
    <Component {...props} /> ) : (
      <Redirect to={{ pathname: "/signin", state: { from: props.location }}} />
    )
  }/>
);


export default function Routes(){
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Logon}></Route>
      <Route path="/signin" component={Signin}></Route>
      <PrivateRoute path="/dashboard" component={Dashboard}></PrivateRoute>
    </Switch>
  </BrowserRouter>
  )
}
