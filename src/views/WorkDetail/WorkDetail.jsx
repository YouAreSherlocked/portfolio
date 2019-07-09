import React, { Component, Fragment } from 'react';
import '../../css/index.css';
import Hud from '../Hud/Hud';
import helpers from '../../helpers/helpers';

class WorkDetail extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  scrollDown() {
    const dest = 'work-detail-imgs';
    helpers.scrollToElement(dest);
  }

  render() {
    const { project } = this.props.location.state;
    const imgs = project.imgs.map((img, i) => (
      <Fragment key={i}>
        <img src={img.img} alt="work-img" />
      </Fragment>
    ));
    return (
      this.props.location.state.project ?
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
                {imgs}
              </div>
            </Fragment>
          : null }
            <img className="appear appear-from-top arrow-go-down" 
                src={require('../../assets/img/portfolio_down_green.svg')} 
                alt="Go To Images" 
                onClick={this.scrollDown} />
        </section>
      </Fragment>
      : <p>Loading :)</p>
    );
  }
}

export default WorkDetail;
