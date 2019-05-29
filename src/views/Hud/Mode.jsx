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
    const { darkMode, scroll, trigger } = this.props;
    return (
      scroll > trigger ?
        <div className="right mode appear" onClick={this.changeMode}>
          <div className={`mode-obj ${darkMode ? 'sun-inactive' : 'sun'}`}></div>
          <div className="mode-seperator line"></div>
          <div className={`mode-obj ${darkMode ? 'moon' : 'moon-inactive'}`}></div>
          <p>Go {darkMode ? "Bright" : "Dark"}</p>
        </div>
      : null
    );
  };
}

export default Mode;