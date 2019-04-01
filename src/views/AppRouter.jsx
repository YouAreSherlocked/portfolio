import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Home/Home';


class AppRouter extends Component {
  render() {
    return (
      <Fragment>
          <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route component={ErrorPage}></Route>
              </Switch>
          </BrowserRouter>
      </Fragment>
    );
  }
}

export default AppRouter;
