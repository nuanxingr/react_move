import React from 'react';
import { Button } from 'antd-mobile';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import routes, { RouteType } from "./config/routes";
import './App.css'
function App() {
  return (
    <div className="box">
      {/* //通过primary向ui库取 */}
      <Button type="primary" className="btn">登录</Button>
      <Router>
        <Switch>
          {routes.map((route: RouteType, index: number) => {
            return <Route{...route} key={index} exact />

            
          })}
          <Redirect to="/phoneLogin" />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
