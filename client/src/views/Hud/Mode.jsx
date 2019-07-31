import React, { Component } from 'react';
import '../../css/index.css';

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
          <div className={`mode-obj ${darkMode ? 'sun' : 'sun-active'}`}></div>
          <div className="mode-seperator line"></div>
          <div className={`mode-obj ${darkMode ? 'moon-active' : 'moon'}`}></div>
          <p>Go {darkMode ? "Bright" : "Dark"}</p>
        </div>
    );
  };
}

export default Mode;