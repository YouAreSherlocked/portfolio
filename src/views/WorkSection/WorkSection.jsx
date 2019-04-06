import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../css/index.css';

class WorkSection extends Component {
  getProjectCards(projects) {
    const cards = projects.map((project, i) => (
      <div className="project-card" key={i}>
        <p>{project.title}</p>
      </div>
    ));
    return (
      cards
    );
  }

  render() {
    return (
      <div className='work-section'>
        <h3>{this.props.title}</h3>
        <div className='gallery'>
            {this.getProjectCards(this.props.projects)}
        </div>
      </div>
    );
  };
}

export default withRouter(WorkSection);