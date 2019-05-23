import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Home/Home';
import  SvgTest  from './SvgTest/SvgTest';
import WorkDetail from './WorkDetail/WorkDetail';


class AppRouter extends Component {
  render() {
    return (
      <Fragment>
          <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/test" component={SvgTest}></Route>
                  <Route exact path="/detail/:id" component={WorkDetail}></Route>
                  <Route component={ErrorPage}></Route>
              </Switch>
          </BrowserRouter>
      </Fragment>
    );
  }
}

export default AppRouter;
