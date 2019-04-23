import React, { Component } from 'react';
import '../../css/index.css';
import { withRouter } from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 0,
      active: ""
    }
  }

  render() {
    return (
      <div className="right hamburger">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span> 
      </div>
    );
  };
}

export default withRouter(Navigation);