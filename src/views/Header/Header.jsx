import React, { Component } from 'react';
import '../../css/index.css';
import logo from '../../assets/img/logo.png';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sectionNames: ['Illustrations', 'Photography', 'Graphic Design', 'Websites']
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.location.href = '/';
  }

  render() {
    /*const { sectionNames } = this.state;
      const sections = sectionNames.map(section => {
      const link = '#' + {section};
      return <a key={section} href={link}>{section}</a>
    });*/

    return (
      <div className='header'>
        <img alt='Logo' className='logo' src={logo} onClick={ this.handleClick } />
      </div>
    );
  };
}

export default Header;