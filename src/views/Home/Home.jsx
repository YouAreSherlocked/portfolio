import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { operations, selectors } from '../../redux';
import '../../css/index.css';
import Hud from '../Hud/Hud';
import Welcome from '../welcome/Welcome';
import Work from '../Work/Work';
import Skills from '../Skills/Skills';
import Letter from '../Letter/Letter';
import QualiProjects from '../QualiProjects/QualiProjects';

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
    const { skills, sections, projects, qualiprojects } = this.props;
    return (
      this.state.isLoading ? 
        <div>Loading Data :)</div>
      :
        <React.Fragment>
          <Hud scroll={this.state.scrollPos}/>
          <Welcome></Welcome>
          {/*<div className="bg-rect bg-rect-one"></div>
            <div className="bg-rect bg-rect-two"></div>
            <div className='intro'>
            <h2>Opening</h2>
            <p className='intro-text'>Lorem Ipsum Lorem Ipsum Lore Ipsum Lorem Ipsum</p>
          </div>*/}
          <Letter title="Projekt Titel und OE" name="Vorname"></Letter>
          <Skills skills={skills}></Skills>
          <QualiProjects qualiprojects={qualiprojects}></QualiProjects>
          <Work sections={sections} projects={projects} />
        </React.Fragment>
    );
  };
}

const mapStateToProps = state => ({
  dark: selectors.getMode(state.mainState),
  sections: selectors.getSections(state.mainState),
  projects: selectors.getProjects(state.mainState),
  skills: selectors.getSkills(state.mainState),
  qualiprojects: selectors.getQualiprojects(state.mainState)
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    initState: operations.initState
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);