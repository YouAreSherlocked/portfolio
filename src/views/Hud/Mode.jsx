import React, { Component } from 'react';
import '../../css/index.css';
import { withRouter, } from 'react-router-dom';
import { operations } from '../../redux';

class Mode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sun: true,
      moon: false
    }

    this.handleClickMode = this.handleClickMode.bind(this);
  }

  handleClickMode() {
    this.changeMode();
  }

  changeMode() {
    this.props.dark ? operations.goBright() : operations.goDark();
    this.setState(prev => ({
      sun: !prev.sun,
      moon: !prev.moon
    }));
    operations.switchMode(!this.props.dark);
  }

  render() {
    return (
      <div className="right mode" onClick={this.handleClickMode}>
        <div className={`mode-obj ${this.state.sun ? 'sun' : 'sun-inactive'}`}></div>
        <div className="mode-seperator"></div>
        <div className={`mode-obj ${this.state.moon ? 'moon' : 'moon-inactive'}`}></div>
        <p>Go {this.state.moon ? "Bright" : "Dark"}</p>
      </div>
    );
  };
}

export default withRouter(Mode);