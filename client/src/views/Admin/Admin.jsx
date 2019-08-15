import React, { Component, Fragment } from 'react';
import '../../css/index.css';
import Hud from '../Hud/Hud';

import * as fetch from '../../services';
import * as migrations from '../../services/migrations';

class Admin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      sections: [],
      worksections: [],
      technologies: [],
      references: [],
      qualiprojects: [],
      skills: []
    }
  }

  async componentDidMount() {
    const projects = await fetch.projects.getAllProjects();
    const sections = await fetch.sections.getAllSections();
    const worksections = await fetch.worksections.getAllWorksections();
    const technologies = await fetch.technologies.getAllTechnologies();
    const references = await fetch.references.getAllReferences();
    const qualiprojects = await fetch.qualiprojects.getAllQualiprojects();
    const skills = await fetch.skills.getAllSkills();
    console.log(projects)

    this.setState({
        ...projects,
        ...sections,
        ...worksections,
        ...technologies,
        ...references,
        ...qualiprojects,
        ...skills
    })
  }

  async uploadData(type) {
      switch(type) {
        case 'projects':
          await migrations.migrateProjects();
          break;
        case 'sections':
          await migrations.migrateSections();
          break;
        case 'worksections':
            await migrations.migrateWorksections();
            break;
        case 'technologies':
            await migrations.migrateTechnologies();
            break;
        case 'references':
          await migrations.migrateReferences();
          break;
        case 'qualiprojects':
          await migrations.migrateQualiprojects();
          break;
        case 'skills':
          await migrations.migrateSkills();
          break;
        default:
          return null;
      }
    
  }

  async deleteData(type) {
    switch(type) {
        case 'projects':
          await fetch.projects.deleteAllProjects();
          break;
        case 'sections':
          await fetch.sections.deleteAllSections();
          break;
        case 'worksections':
            await fetch.worksections.deleteAllWorksections();
            break;
        case 'technologies':
            await fetch.technologies.deleteAllTechnologies();
            break;
        case 'references':
            await fetch.references.deleteAllReferences();
            break;
        case 'qualiprojects':
            await fetch.qualiprojects.deleteAllQualiprojects();
            break;
        case 'skills':
            await fetch.skills.deleteAllSkills();
            break;
        default:
            return null;
      }
  }

  render() {
    return(
      <Fragment>
        <section id="admin">
            <Hud small></Hud>
            {Object.keys(this.state).map((section, i) => (
                <Fragment key={i}>
                {console.log(this.state[section])}
                    <h2>{section}</h2>
                    <table id="admin-table-projects">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Title</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state[section].map((section, i) => (
                        <tr key={i}>
                            <td>{section._id}</td>
                            <td>{section.title}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                    <div className="btn-group">
                        <button onClick={() => this.uploadData(section)}>Migrate {section}</button>
                        <button onClick={() => this.deleteData(section)}>Delete All {section}</button>
                    </div>
                </Fragment>
            ))}
          </section>
      </Fragment>
    );
  }
}

export default Admin;