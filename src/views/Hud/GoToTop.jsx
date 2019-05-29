import React, { Component } from 'react';
import '../../css/index.css';
import { withRouter } from 'react-router-dom';

class GoToTop extends Component {
  render() {
    const { scroll, trigger } = this.props;
    return (
      scroll > trigger ?
        <a href="#">
          <img className="right go-to-top appear" src={require('../../assets/img/portfolio_go_to_top.svg')} alt="Go To Top" />
        </a>
      : null
      );
  };
}

export default withRouter(GoToTop);