import React, { Component } from 'react';
import '../../css/index.css';
import { withRouter, } from 'react-router-dom';
import { operations } from '../../redux';

class Mode extends Component {
  constructor(props) {
    super(props);

    this.changeMode = this.changeMode.bind(this);
  }

  changeMode() {
    this.props.switchMode(!this.props.darkMode);
  }

  render() {
    const { darkMode } = this.props;
    return (
      <div className="right mode" onClick={this.changeMode}>
        <div className={`mode-obj ${darkMode ? 'sun-inactive' : 'sun'}`}></div>
        <div className="mode-seperator"></div>
        <div className={`mode-obj ${darkMode ? 'moon' : 'moon-inactive'}`}></div>
        <p>Go {darkMode ? "Bright" : "Dark"}</p>
      </div>
    );
  };
}

export default withRouter(Mode);