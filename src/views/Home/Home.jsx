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
import Login from '../Login/Login';

const crypto = require("crypto");

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isLoading: true,
      scrollPos: 0
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.checkAuth = this.checkAuth.bind(this);
  }

  async componentDidMount() {
    await console.log(this.props.homeScroll)
    if (localStorage.getItem("auth") === this.sha1(password)) {
      this.setState({
        isAuthenticated: true
      })
    }
    
    window.addEventListener('scroll', this.handleScroll);
    this.setState({isLoading: true});
    await this.props.initState();
    await this.setState({ scrollPos: this.props.homeScroll });
    this.setState({isLoading: false});
  }

  handleScroll() {
    this.setState({ scrollPos: window.pageYOffset });
    // this.props.storeHomeScroll(window.pageYOffset);
  }

  componentWillUnmount() {
    this.props.storeHomeScroll(window.pageYOffset);
  }

  sha1(data) {
    return crypto.createHash("sha1").update(data, "binary").digest("hex");
  }

  checkAuth(input) {
    if (input === password) {
      this.setState({
        isAuthenticated: true
      })
      localStorage.setItem("auth", this.sha1(password));
    }
  }

  render() {
    const { skills, workSections, projects, qualiprojects, sections } = this.props;
    return (
      !this.state.isAuthenticated ? 
        <Login checkAuth={this.checkAuth}></Login>
      :
      this.state.isLoading ? 
        <div>Loading Data :)</div>
      :
        <React.Fragment>
          <Hud scroll={this.state.scrollPos}/>
          <Welcome sections={sections}></Welcome>
          <Letter title="Full Stack Developer / Webentwicklung SimpleScreen" name="Benaja"></Letter>
          <Skills skills={skills}></Skills>
          <QualiProjects qualiprojects={qualiprojects}></QualiProjects>
          <Work workSections={workSections} projects={projects} />
        </React.Fragment>
    );
  };
}

const mapStateToProps = state => ({
  dark: selectors.getMode(state.mainState),
  workSections: selectors.getWorkSections(state.mainState),
  projects: selectors.getProjects(state.mainState),
  skills: selectors.getSkills(state.mainState),
  qualiprojects: selectors.getQualiprojects(state.mainState),
  homeScroll: selectors.getHomeScroll(state.mainState),
  sections: selectors.getSections(state.mainState)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    initState: operations.initState,
    storeHomeScroll: operations.storeHomeScroll
  }, dispatch);
};

const password = "test";
export default connect(mapStateToProps, mapDispatchToProps)(Home);