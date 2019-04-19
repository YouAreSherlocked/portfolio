import React, { Component } from 'react';
import '../../css/index.css';
import { switchMode } from '../../redux/actions/switch_mode';
import { connect } from 'react-redux';
import {goDark, goBright } from '../../redux/operations';
import Orientation from './Orientation';
import Mode from './Mode';

class Hud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnTop: true,
      scroll: {
        top: '60px',
        opacity: '0'
      }
    }

    this.handleClickTop = this.handleClickTop.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleClickTop() {
    window.scrollTo(0, 0);
  }

  handleScroll() {
    const { isOnTop } = this.state;
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

    this.setState({
      isOnTop: top > 50 ? false : true,
      scroll: { top: isOnTop ? '60px' : '20px', 
                opacity: isOnTop ? '0' : '1'
              },
    });
  }

  render() {
  const hud = (

      <div className = "hud">
        <Mode changeMode={this.props.switchMode}></Mode>
        <img className="right go-to-top" src={require('../../assets/img/portfolio_go_to_top.svg')} alt="Go To Top" onClick={this.handleClickTop} />
        <img id="down" className="center down go-to" src={require('../../assets/img/portfolio_down.svg')} alt="Previous Article" />
        <div className='flyout-menu'>
        </div>

      {!this.props.goDown ? 
      <React.Fragment>
        <Orientation sections={this.props.sections}></Orientation>
        <div className="right hamburger">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span> 
        </div>

        <img id="up" className="center up go-to" src={require('../../assets/img/portfolio_up.svg')} alt="Previous Article" style={this.state.scroll} />

      </React.Fragment>
      : null }
      </div>
    );
    return (
      <React.Fragment>
        {hud}
      </React.Fragment>
    );
  };
}

const mapStateToProps = state => ({
  dark: state.state.dark,
  sections: state.state.sections
});

const mapDispatchToProps = dispatch => ({
  switchMode: () => dispatch ({ type: 'SWITCH_MODE'})
});

export default connect(mapStateToProps, { switchMode })(Hud);