import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Logon from './pages/Logon'
import Signin from './pages/SignIn'


export default function Routes(){
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Logon}></Route>
      <Route path="/signin" component={Signin}></Route>
    </Switch>
  </BrowserRouter>
  )
}
