import React, { Component } from 'react';
import '../../css/index.css';
import { withRouter } from 'react-router-dom';

class SwitchSection extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(dir) {
    if (this.props.small) {
      window.scrollBy(0, 400);
    }
    else {
      const i = this.props.sections.indexOf(this.props.activeSection);
      const goTo = this.props.sections[dir == "down" ? i+1 : i-1];
      this.props.switchActiveSection(goTo);
    }
  }

  render() {
    return (
      <React.Fragment>
        <img id="up" 
             className={this.props.scroll > this.props.trigger ? "center up go-to appear-from-bottom" : "hidden"} 
             src={require('../../assets/img/portfolio_up.svg')} 
             alt="Previous Article" 
             onClick={() => this.handleClick("up")} />
        <img id="down" 
             className="center down go-to" 
             src={require('../../assets/img/portfolio_down.svg')} 
             alt="Next Article" 
             onClick={() => this.handleClick("down")} />
      </React.Fragment>
    );
  };
}

export default withRouter(SwitchSection);