import React, { Component } from 'react';
import '../../css/index.css';
import { withRouter } from 'react-router-dom';

class SwitchArticle extends Component {
  render() {
    return (
      <React.Fragment>
        <img id="up" className={this.props.scroll > this.props.trigger ? "center up go-to appear-from-bottom" : "hidden"} src={require('../../assets/img/portfolio_up.svg')} alt="Previous Article" />
        <img id="down" className="center down go-to" src={require('../../assets/img/portfolio_down.svg')} alt="Previous Article" />
      </React.Fragment>
    );
  };
}

export default withRouter(SwitchArticle);