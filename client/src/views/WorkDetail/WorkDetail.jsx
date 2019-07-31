import React, { Component, Fragment } from 'react';
import '../../css/index.css';
import Hud from '../Hud/Hud';
import helpers from '../../helpers/helpers';
import { selectors } from '../../redux';
import { connect } from 'react-redux';

class WorkDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      project: {}
    }
  }

  componentDidMount() {
    localStorage.setItem('projectId', this.props.match.params.id)
    //console.log(this.props.activeProject)
    this.setState({
      project: this.props.location.state !== undefined ? this.props.location.state.project : this.props.activeProject
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
     this.projectIsReady() ?
      <Fragment>
        <Hud small></Hud>
        <section id="workDetail">
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
        </section>
      </Fragment>
      : <p>Loading :) </p>
    );
  }
}

const mapStateToProps = state => ({
  activeProject: selectors.getProjectById(state.mainState, localStorage.getItem('projectId'))
});

export default connect(mapStateToProps)(WorkDetail);
