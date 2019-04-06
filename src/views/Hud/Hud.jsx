import React, { Component } from 'react';
import '../../css/index.css';
import { switchMode } from '../../redux/actions/switch_mode';
import { connect } from 'react-redux';
import {goDark, goBright } from '../../redux/operations';

class Hud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnTop: true,
      sun: true,
      moon: false,
      scroll: {
        top: '60px',
        opacity: '0'
      }
    }

    this.handleClickMode = this.handleClickMode.bind(this);
    this.handleClickTop = this.handleClickTop.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleClickMode() {
    this.changeMode();
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

  changeMode() {
    this.props.dark ? goBright() : goDark();
    this.setState(prev => ({
      sun: !prev.sun,
      moon: !prev.moon
    }));
    this.props.switchMode(!this.props.dark);
  }

  render() {
  const hud = (
      <div className = "hud">
        <div className="left orientation">
          <div className="line"></div>
          <div id="p1"></div>
          <div id="p2"></div>
          <div id="p3"></div>
          <div id="p4"></div>
        </div>
        <div className="right hamburger">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span> 
        </div>
        <div className="right mode" onClick={this.handleClickMode}>
          <div className={`mode-obj ${this.state.sun ? 'sun' : 'sun-inactive'}`}></div>
          <div className="mode-seperator"></div>
          <div className={`mode-obj ${this.state.moon ? 'moon' : 'moon-inactive'}`}></div>
        </div>
        <img className="right go-to-top" src={require('../../assets/img/portfolio_go_to_top.svg')} alt="Go To Top" onClick={this.handleClickTop} />
        <img id="up" className="center up go-to" src={require('../../assets/img/portfolio_up.svg')} alt="Previous Article" style={this.state.scroll} />
        <img id="down" className="center down go-to" src={require('../../assets/img/portfolio_down.svg')} alt="Previous Article" />
        <div className='flyout-menu'>
        </div>
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
export default connect(mapStateToProps, { switchMode })(Hud);