import React, { Component } from 'react';
import '../../css/index.css';
import { withRouter } from 'react-router-dom';
import helpers from '../../helpers/helpers';

class GoToTop extends Component {

  scrollToElement(section) {
    helpers.scrollToElement(section.toLowerCase().replace(" ", ""));
  }

  render() {
    return (
        <a onClick={() => this.scrollToElement('root')}>
          <img className="right go-to-top" src={this.props.darkMode ? require('../../assets/img/portfolio_go_to_top_white.svg') : require('../../assets/img/portfolio_go_to_top.svg')} alt="Go To Top" />
        </a>
      );
  };
}

export default withRouter(GoToTop);