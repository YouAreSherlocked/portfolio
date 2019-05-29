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
          <input type="checkbox" checked={menuIsOpen} />
          <span></span>
          <span></span>
          <span></span> 
        </div>
        { menuIsOpen ? <div className="menu-bg appear" onClick={this.openMenu}></div> : null }
        <nav className={ menuIsOpen ? "open-menu" : "" }>
          <a href="#letter">Letter</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </nav>
      </React.Fragment>
    );
  };
}

export default withRouter(Navigation);