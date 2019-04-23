import React, { Component } from 'react';
import '../../css/index.css';
import { connect } from 'react-redux';
import Orientation from './Orientation';
import Mode from './Mode';
import Navigation from './Navigation';
import GoToTop from './GoToTop';
import SwitchArticle from './SwitchArticle';

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
        <Mode></Mode>
        <div className='flyout-menu'>
        </div>

      {!this.props.goDown ? 
      <React.Fragment>
        <Orientation sections={this.props.sections}></Orientation>
        <Navigation></Navigation>
        <SwitchArticle></SwitchArticle>
        <GoToTop></GoToTop>
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

export default connect(mapStateToProps, mapDispatchToProps)(Hud);