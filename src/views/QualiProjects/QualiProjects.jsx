import React, { Component } from 'react';
const dateOptions = {  year: 'numeric', month: 'long' };

class QualiProject extends Component {

  render() {
    const projects = this.props.qualiprojects.map((project, i) => (
        <tr key={i}>
          <td>{ project.title }</td>
          <td>
            <ul>
              { project.description.map((point, i) => (
                <li>{ point }</li>
              )) }
            </ul>
          </td>
          <td><a href={project.qpa.link}>{ project.qpa.name }</a></td>
          <td>{ project.start.toLocaleDateString("en-US", dateOptions) }</td>
          <td>{ project.end.toLocaleDateString("en-US", dateOptions) }</td>
        </tr>
    ));
    const { qualiprojects } = this.props;
    return (
      <section id="quali-projects">
        <h3>Qualiprojects</h3>
        <table className="quali-projects-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>QPA</th>
              <th>Start</th>
              <th>End</th>
            </tr>
          </thead>
          <tbody>
            { projects }
          </tbody>
        </table>
      </section>
    );
  }
}

export default QualiProject;