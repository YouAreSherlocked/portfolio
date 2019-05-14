import React, { Component } from 'react';
import '../../css/index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { operations, selectors } from '../../redux';

import Orientation from './Orientation';
import Mode from './Mode';
import Navigation from './Navigation';
import GoToTop from './GoToTop';
import SwitchSection from './SwitchSection';

class Hud extends Component {
  
  render() {
    const { scroll, sections, darkMode, switchMode } = this.props;
    const trigger = 600;
    const hud = (
      <div className = "hud">
        <Mode darkMode={darkMode}
              switchMode={switchMode}>
        </Mode>
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

const mapStateToProps = state => ({
  darkMode: selectors.getMode(state.mainState),
  sections: selectors.getSections(state.mainState),
  projects: selectors.getProjects(state.mainState),
  skills: selectors.getSkills(state.mainState),
  activeSection: selectors.getActiveSection(state.mainState)
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    initState: operations.initState,
    switchMode: operations.switchMode,
    switchActiveSection: operations.switchActiveSection
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Hud);