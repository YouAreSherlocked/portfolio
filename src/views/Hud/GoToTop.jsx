import React, { Component } from 'react';
import '../../css/index.css';
import { withRouter } from 'react-router-dom';

class GoToTop extends Component {
  render() {
    return (
      <a href="#">
        <img className="right go-to-top" src={require('../../assets/img/portfolio_go_to_top.svg')} alt="Go To Top" />
      </a>
      );
  };
}

export default withRouter(GoToTop);