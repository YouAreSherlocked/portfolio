import React, { Component } from 'react';
import '../../css/index.css';
import { withRouter } from 'react-router-dom';

class SwitchArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 0,
      active: ""
    }
  }

  render() {
    return (
      <React.Fragment>
        <img id="up" className="center up go-to" src={require('../../assets/img/portfolio_up.svg')} alt="Previous Article" style={this.state.scroll} />
        <img id="down" className="center down go-to" src={require('../../assets/img/portfolio_down.svg')} alt="Previous Article" />
      </React.Fragment>
    );
  };
}

export default withRouter(SwitchArticle);