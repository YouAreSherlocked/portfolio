import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/index.css';

class WorkSection extends Component {

  createProjectCards(projects) {
    return projects.map((project, i) => (
      project.category === this.props.title ?
        <div className="project-card" key={i} style={{backgroundImage: "url(" + project.thumbnail + ")"}}>
          <Link to={{
                  pathname: `/detail/${project.category.toLowerCase()}/${project.id}`,
                  state: {project}
                }}>
            {project.title}
            { project.inProgress ? <h2>In Progress</h2> : null }
          </Link>
        </div>
      : null
    ));
  }

  render() {
    const { projects, title } = this.props;
    return (
      <div className='work-section' id={title.toLowerCase().replace(" ", "")}>
        <h3 className={this.props.activeSection === title ? "active-title" : ""}>{title}</h3>
        <div className='gallery'>
            {this.createProjectCards(projects)}
        </div>
      </div>
    );
  };
}

export default WorkSection;