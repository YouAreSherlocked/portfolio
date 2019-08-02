import React, { Component, Fragment } from 'react';
import '../../css/index.css';
import Hud from '../Hud/Hud';
import helpers from '../../helpers/helpers';
import { selectors, operations } from '../../redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class WorkDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      project: {}
    }
  }

  async componentDidMount() {
    console.log(this.props.projects)
    const id = this.props.match.params.id;
    await this.props.switchActiveProject(id);
    localStorage.setItem('projectId', id)
    this.setState({
      project: this.props.location.state !== undefined ? this.props.location.state.project : this.props.activeProjectById
    });

    window.scrollTo(0, 0);
  }

  scrollDown() {
    const dest = 'work-detail-imgs';
    helpers.scrollToElement(dest);
  }

  getImgs(project) {
    return (
      project.imgs.map((img, i) => (
        <Fragment key={i}>
          <img src={img.img} alt="work-img" />
        </Fragment>
      ))
    )
  }

  projectIsReady() {
    return Object.getOwnPropertyNames(this.state.project).length !== 0;
  }

  render() {
    const { project } = this.state;
    const imgs = this.projectIsReady() ? project.imgs.map((img, i) => (
      <Fragment key={i}>
        <img src={img.img} alt="work-img" />
      </Fragment>
    )) : null;

    return (
      <Fragment>
      <Hud small></Hud>
      <section id="workDetail">
        { this.projectIsReady() ?
          <Fragment>
          <div className="intro">
            <div>
              <img src={project.image} alt="project intro" />
            </div>
            <div>
              <h3>{project.title}</h3>
              <p>{project.inProgress ? "Project is currently in Progress" : project.description}</p>
              <h5>Technologies</h5>
              { project.technologies.map((tech, i) => (
                <p key={i}>{tech}</p>
              )) }
            </div>
          </div>
          { imgs.length !== 0 ? 
            <Fragment>
              <div className="work-detail-imgs" id="work-detail-imgs">
                <h3>Images</h3>
                { imgs }
              </div>
            </Fragment>
          : null }
            <img className="appear appear-from-top arrow-go-down" 
                src={require('../../assets/img/portfolio_down_green.svg')} 
                alt="Go To Images" 
                onClick={this.scrollDown} />
          </Fragment>
            : <p>Loading :) </p> }
          </section>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, props) => ({
  activeProjectById: selectors.getProjectById(state, props.match.params.id),
  activeProjectId: selectors.getActiveWorkId,
  projects: selectors.getProjects(state)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    switchActiveProject: operations.switchActiveWork
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkDetail);
