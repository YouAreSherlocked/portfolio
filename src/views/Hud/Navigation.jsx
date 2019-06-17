import React, { Component } from 'react';
import '../../css/index.css';
import { withRouter } from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIsOpen: false
    }

    this.changeMenuState = this.changeMenuState.bind(this);
  }

  changeMenuState() {
    this.setState(prevState => ({ menuIsOpen: !prevState.menuIsOpen }));
  }

  render() {
    const { menuIsOpen } = this.state;
    return (
      <React.Fragment>
        <div className="right hamburger" onClick={this.changeMenuState}>
          <input type="checkbox" checked={menuIsOpen} readOnly/>
          <span></span>
          <span></span>
          <span></span> 
        </div>
        { menuIsOpen ? <div className="menu-bg appear" onClick={this.changeMenuState}></div> : null }
        <nav className={ menuIsOpen ? "open-menu" : "" }>
          {
            this.props.sections.map((section, i) => (
              <a href={"#" + section.toLowerCase().replace(" ", "")} key={i} onClick={this.changeMenuState}>{section}</a>
            ))
          }
        </nav>
      </React.Fragment>
    );
  };
}

export default withRouter(Navigation);