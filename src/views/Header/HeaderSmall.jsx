import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../../css/index.css';

class HeaderSmall extends Component {

  render() {
    return (
      <section id="headerSmall">
        <Link to="/">
          <img src={require("../../assets/img/portfolio_go_back.svg")} />
        </Link>
      </section>
    );
  };
}

export default withRouter(HeaderSmall);