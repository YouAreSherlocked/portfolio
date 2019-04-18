import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../css/index.css';
import Hud from '../Hud/Hud';
import Welcome from '../welcome/Welcome';
import Work from '../Work/Work';

class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <Hud />
        <Welcome />
        <div className='intro'>
          <h2>Opening</h2>
          <p className='intro-text'>Lorem Ipsum Lorem Ipsum Lore Ipsum Lorem Ipsum</p>
        </div>
        <Work />
      </React.Fragment>
    );
  };
}

export default withRouter(Home);