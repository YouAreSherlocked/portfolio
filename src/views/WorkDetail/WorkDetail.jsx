import React, { Component, Fragment } from 'react';
import '../../css/index.css';
import Hud from '../Hud/Hud';

class WorkDetail extends Component {

  render() {
    const { project } = this.props.location.state;
    const imgs = project.imgs.map((img, i) => (
      <div className="work-imgs-object" key={i}>
        <img src={img.img} alt="work-img" />
        <p>{img.text}</p>
        <hr></hr>
      </div>
    ));
    return (
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
              <p>{project.technologies[0]}</p>
            </div>
          </div>
          { imgs.length !== 0 ? 
            <Fragment>
              <h3>Images</h3>
              <div className="work-imgs">
                {imgs}
              </div>
            </Fragment>
          : null }
        </section>
      </Fragment>
    );
  }
}

export default WorkDetail;
