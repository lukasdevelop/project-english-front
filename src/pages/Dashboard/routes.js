import React, { Component } from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Home from './Home'
//import { isAuthenticate } from './auth'

/* const PrivateRoute = ({ component: Component, ...rest }) => (

  <Route {...rest} render={props  => isAuthenticate() ? (
    <Component {...props} /> ) : (
      <Redirect to={{ pathname: "/signin", state: { from: props.location }}} />
    )
  }/>
); */


export default function Routes(){
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/dashboard" exact component={Home}></Route>
{/*       <PrivateRoute path="/dashboard" component={Dashboard}></PrivateRoute>
 */}    </Switch>
  </BrowserRouter>
  )
}
