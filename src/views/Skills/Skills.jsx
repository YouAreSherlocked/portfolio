import React, { Component } from 'react';
import '../../css/index.css';

class Skills extends Component {
  getBorderCrosses() {
    let elms = [];
    for (let i=0; i<8; i++) {
      elms.push(<div className="border-cross" key={i}></div>);
    }
    return elms;
  }
  render() {
    const skills = this.props.skills.map((skill, i) => (
      <div className={skill.placeholder ? "skill placeholder" : "skill"} key={i}>
        { !skill.placeholder ? 
        <React.Fragment>
          <div className="skill-score"><span>{skill.score}</span>/&thinsp;10</div>
          <div className="skill-name">{skill.title.replace("/", " / ")}</div>
          { skill.center ?
           this.getBorderCrosses()
          : null }
        </React.Fragment>
        : null }
      </div>
    ));
    return (
      <section id='skills'>
        {skills}
      </section>
    );
  };
}

export default Skills;