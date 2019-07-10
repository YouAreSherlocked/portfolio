import React, { Component } from 'react';
import '../../css/index.css';
import WorkSection from '../WorkSection/WorkSection';

class Work extends Component {
  render() {
    const { workSections, projects, activeSection, activeProject } = this.props;
    const sections = workSections.map(section => (
      <WorkSection 
        title={section} 
        id={section} 
        key={section} 
        projects={projects}
        activeSection={activeSection}
        activeProject={activeProject}>
      </WorkSection>
    ));
    return (
      <section id='work'>
        {sections}
      </section>
    );
  };
}

export default Work;