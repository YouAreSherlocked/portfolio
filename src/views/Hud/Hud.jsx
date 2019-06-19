import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    const { scroll, small, sections, darkMode, switchMode, activeSection, switchActiveSection } = this.props;
    const trigger = 800;
    const hud = (
      scroll > trigger ?
      <div className = "hud appear">
        <Mode darkMode={darkMode} switchMode={switchMode}></Mode>
      {/*<SwitchSection 
                        scroll={scroll}
                        switchActiveSection={switchActiveSection}
                        activeSection={activeSection}
                        sections={sections}
                        small={small}>
          </SwitchSection>*/}

        {this.props.small ?
          <Link to="/">
            <img src={require("../../assets/img/portfolio_go_back.svg")} alt="go back" className="go-back top left" />
          </Link>
        : null}

        {!this.props.small ? 
          <React.Fragment>

            <Orientation sections={sections}
                        scroll={scroll}
                        switchActiveSection={switchActiveSection}
                        activeSection={activeSection}>
            </Orientation>
            <Navigation sections={sections} scroll={scroll}></Navigation>
            <GoToTop></GoToTop>
          </React.Fragment>
        : null }

      </div>
      : null
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