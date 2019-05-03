import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../css/index.css';

class Welcome extends Component {
  render() {
    return (
      <section id="welcome">
        <div>
          <h2>Art</h2>
          <p><span>Portfolio</span> Timo Mayer</p>
        </div>
        <div>
          <h2>Web</h2>
        </div>
      </section>
    );
  };
}

export default withRouter(Welcome);