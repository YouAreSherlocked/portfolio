import React, { Component } from 'react';
import '../../css/index.css';
import Hud from '../Hud/Hud';

class WorkDetail extends Component {

  render() {
    const { project } = this.props.location.state;
    console.log(project)
    const imgs = project.imgs.map((img, i) => (
      <img src={img} alt="work-img" />
    ));
    return (
      <React.Fragment>
        <Hud small></Hud>
        <section id="workDetail">
          <div className="intro">
            <div>
              <img src={project.image} alt="project intro" />
            </div>
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
          <h3>Images</h3>
          <div className="work-imgs">
            {imgs}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default WorkDetail;
