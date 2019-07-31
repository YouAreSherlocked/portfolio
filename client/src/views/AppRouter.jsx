import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Home/Home';
import SvgTest  from './SvgTest/SvgTest';
import WorkDetail from './WorkDetail/WorkDetail';

class AppRouter extends Component {
    
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/test" component={SvgTest}></Route>
          <Route exact path="/detail/:category/:id" component={WorkDetail}></Route>
          <Route component={ErrorPage}></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default AppRouter;