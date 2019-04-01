import React, { Component } from 'react';
//import propTypes from 'prop-types';
//import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../../css/index.css';
import Hud from '../Hud/Hud';
import Section from '../Section/Section';

class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <Hud />
        <div className='intro'>
          <h2>Opening</h2>
          <p className='intro-text'>Lorem Ipsum Lorem Ipsum Lore Ipsum Lorem Ipsum</p>
        </div>
        <Section />
      </React.Fragment>
    );
  };
}

export default withRouter(Home);