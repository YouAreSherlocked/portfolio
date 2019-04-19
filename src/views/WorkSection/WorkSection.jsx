import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../../css/index.css';

class WorkSection extends Component {
  createProjectCards(projects) {
    const cards = projects.map((project, i) => (
      <div className="project-card" key={i} style={{backgroundImage: "url(" + project.image + ")"}}>
        <Link to={{
          pathname: `/detail/${project.title}`,
          state: {project}
        }} project={project}>
          <p>{project.title}</p>
        </Link>
      </div>
    ));
    return (
      cards
    );
  }

  render() {
    const { projects } = this.props;
    return (
      <div className='work-section' id={this.props.title.toLowerCase().replace(" ", "")}>
        <h3>{this.props.title}</h3>
        <div className='gallery'>
            {this.createProjectCards(projects)}
        </div>
      </div>
    );
  };
}

export default withRouter(WorkSection);