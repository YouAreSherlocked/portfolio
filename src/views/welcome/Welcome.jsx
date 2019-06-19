import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../css/index.css';
import helpers from '../../helpers/helpers';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.scrollDown = this.scrollDown.bind(this);
  }

  scrollDown() {
    const dest = this.props.sections[0].toLowerCase().replace(' ', '');
    helpers.scrollToElement(dest);
  }

  render() {
    return (
      this.props.sections ?
        <section id="welcome">
          <div></div>
          <div>
            <h1>Portfolio | Timo Mayer</h1>
          </div>
         <img className="appear appear-from-top" 
              src={require('../../assets/img/portfolio_down_green.svg')} 
              alt="Go To Content" 
              onClick={this.scrollDown} />
        </section>
      : null
    );
  };
}

export default withRouter(Welcome);