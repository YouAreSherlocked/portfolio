import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { operations, selectors } from '../../redux';
import '../../css/index.css';
import Hud from '../Hud/Hud';
import Welcome from '../welcome/Welcome';
import Work from '../Work/Work';
import Skills from '../Skills/Skills';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      scrollPos: 0
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  async componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({isLoading: true});
    await this.props.initState();
    this.setState({isLoading: false});
  }

  handleScroll() {
    this.setState({scrollPos: window.pageYOffset})
  }

  render() {
    return (
      this.state.isLoading ? 
        <div>Loading Data :)</div>
      :
        <React.Fragment>
          <Hud switchMode={this.props.switchMode} 
               sections={this.props.sections} 
               dark={this.props.dark}
               scroll={this.state.scrollPos} 
               activeSection={this.props.activeSection}/>
          <Welcome />
          <div className='intro'>
            <h2>Opening</h2>
            <p className='intro-text'>Lorem Ipsum Lorem Ipsum Lore Ipsum Lorem Ipsum</p>
          </div>
          <Skills skills={this.props.skills}></Skills>
          <Work sections={this.props.sections} projects={this.props.projects} />
        </React.Fragment>
    );
  };
}

const mapStateToProps = state => ({
  dark: selectors.getMode(state.mainState),
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);