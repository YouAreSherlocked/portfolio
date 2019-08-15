import React, { Component } from 'react';
import '../../css/index.css';
import { withRouter, Link } from 'react-router-dom';
import helpers from '../../helpers/helpers';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIsOpen: false
    }

    this.changeMenuState = this.changeMenuState.bind(this);
  }

  scrollToElement(section) {
    helpers.scrollToElement(section.toLowerCase().replace(" ", ""));
    this.changeMenuState();
  }

  changeMenuState() {
    this.setState(prevState => ({ menuIsOpen: !prevState.menuIsOpen }));
  }

  render() {
    const { menuIsOpen } = this.state;
    const { sections } = this.props;

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
            sections.map((section, i) => (
              <p key={i} onClick={(e) => this.scrollToElement(section)}>{section}</p>
            ))
          }
          <br></br>
          <hr></hr>
          <Link to="/admin">
            <p>Admin</p>
          </Link>
        </nav>
      </React.Fragment>
    );
  };
}

export default withRouter(Navigation);