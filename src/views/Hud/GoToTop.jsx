import React, { Component } from 'react';
import '../../css/index.css';
import { withRouter } from 'react-router-dom';

class GoToTop extends Component {
  render() {
    return (
      <img className="right go-to-top" src={require('../../assets/img/portfolio_go_to_top.svg')} alt="Go To Top" onClick={this.handleClickTop} />
    );
  };
}

export default withRouter(GoToTop);