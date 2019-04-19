import React, { Component } from 'react';
import '../../css/index.css';
import { withRouter } from 'react-router-dom';

class Orientation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 0,
      active: ""
    }

    this.showTitle = this.showTitle.bind(this);
    this.hideTitle = this.hideTitle.bind(this);
  }

  createPoints() {
    return(
      this.props.sections.map(section => (
        <a href={"#" + section.toLowerCase().replace(" ", "")} key={section} onMouseOver={() => this.showTitle(section)} onMouseOut={this.hideTitle}>
          <div className={this.state.active === section ? "active" : ""}></div>
          <p className={this.state.active === section ? "active appear-from-left" : ""}>{section}</p>
        </a>
      ))
    );
  }

  showTitle(e) {
    this.setState({
      active: e
    });
  }

  hideTitle() {
    this.setState({
      active: ""
    });
  }

  render() {
    return (
      <div className="left orientation">
        <div className="line"></div>
        {this.createPoints()}
      </div>
    );
  };
}

export default withRouter(Orientation);