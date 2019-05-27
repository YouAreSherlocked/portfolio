import React, { Component } from 'react';
import '../../css/index.css';
import { withRouter } from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIsOpen: false
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.setState(prevState => ({ menuIsOpen: !prevState.menuIsOpen }));
  }

  render() {
    const { menuIsOpen } = this.state;
    return (
      <React.Fragment>
        <div className="right hamburger" onClick={this.openMenu}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span> 
        </div>
        { menuIsOpen ? <div className="menu-bg appear"></div> : null }
        <nav className={ menuIsOpen ? "open-menu" : "" }>
          <p>Letter</p>
          <p>Skills</p>
          <p>Projects</p>
        </nav>
      </React.Fragment>
    );
  };
}

export default withRouter(Navigation);