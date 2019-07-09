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
    const { sections, scroll, trigger } = this.props;
    return (
      sections ?
        <section id="welcome">
          <div></div>
          <div id="welcomeSign">
            <h1>Portfolio | Timo Mayer</h1>
          </div>
          
          <img className={ `arrow-go-down${scroll < trigger ? " appear appear-from-top" : " disappear"}`} 
                src={require('../../assets/img/portfolio_down_green.svg')} 
                alt="Go To Content" 
                onClick={this.scrollDown} />
        </section>
      : null
    );
  };
}

export default withRouter(Welcome);