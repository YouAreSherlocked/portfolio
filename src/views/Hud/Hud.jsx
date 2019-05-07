import React, { Component } from 'react';
import '../../css/index.css';
import Orientation from './Orientation';
import Mode from './Mode';
import Navigation from './Navigation';
import GoToTop from './GoToTop';
import SwitchSection from './SwitchSection';

class Hud extends Component {
  
  render() {
    const { scroll, sections } = this.props;
    const trigger = 600;
    const hud = (
      <div className = "hud">
        <Mode></Mode>
        <div className='flyout-menu'>
        </div>

      {!this.props.goDown ? 
        <React.Fragment>
          <Orientation sections={sections}
                       trigger={trigger}
                       scroll={scroll}>
          </Orientation>
          <Navigation></Navigation>
          <SwitchSection trigger={trigger}
                         scroll={scroll}>
          </SwitchSection>
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

export default Hud;