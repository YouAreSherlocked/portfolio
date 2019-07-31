import React, { Component } from 'react';
const dateOptions = {  year: 'numeric', month: 'long' };

class QualiProject extends Component {

  render() {
    const projects = this.props.qualiprojects.map((project, i) => (
      <div className="quader-card quader-card-big qualiproject remain-black" key={i} >
          <h4>{project.title}</h4>
          <ul>
            { project.description.map((point, i) => (
              <li key={i}>{ point }</li>
            )) }
          </ul>
          <p><b>QPA</b> <a href={project.qpa.link} target="_blank" rel="noopener noreferrer">{ project.qpa.name }</a></p>
          <p><b>Start</b> { project.start.toLocaleDateString("en-US", dateOptions) }</p>
          <p><b>End</b> { project.end.toLocaleDateString("en-US", dateOptions) }</p>
      </div>
    ));
    return (
      <section id="qualiprojects">
        <h3 className={this.props.activeSection === 'Qualiprojects' ? "active-title" : ""}>Qualiprojects</h3>
        <div className="quali-projects">
          {projects}
        </div>
      </section>
    );
  }
}

export default QualiProject;