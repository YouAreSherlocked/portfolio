import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../css/index.css';

class ErrorPage extends Component {

  render = () => {
    return (
      <div>
        <h2>404</h2>
        <h3>Page not found</h3>
      </div>
    );
  };

}

export default withRouter(ErrorPage);