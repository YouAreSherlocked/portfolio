import React, { Component } from 'react';
import '../../css/index.css';
const logos = {
  htmlcss: require('../../assets/img/skills/htmlcss.png'),
  vanillajs: require('../../assets/img/skills/vanillajs.png'),
  reactredux: require('../../assets/img/skills/reactredux.png'),
  vue: require('../../assets/img/skills/vue.png'),
  csharp: require('../../assets/img/skills/csharp.png'),
  java: require('../../assets/img/skills/java.png'),
  php: require('../../assets/img/skills/php.png'),
  laravel: require('../../assets/img/skills/laravel.png'),
  sql: require('../../assets/img/skills/sql.png'),
  rubyonrails: require('../../assets/img/skills/rubyonrails.png'),
}

class Skills extends Component {
  getBorderCrosses() {
    let elms = [];
    for (let i=0; i<8; i++) {
      elms.push(<div className="border-cross" key={i}></div>);
    }
    return elms;
  }

  getLogo(name) {
    return logos[name];
  }

  render() {
    const skills = this.props.skills.map((skill, i) => (
      <div className="skill" key={i} style={{backgroundImage: `url(${this.getLogo(skill.title.toLowerCase().replace(/ /g, '').replace(/\//g, '').replace(/#/g, 'sharp'))})`}}>
        <React.Fragment>
          <div className="skill-score"><span>{skill.score}</span>/&thinsp;10</div>
          <div className="skill-name">{skill.title.replace("/", " / ")}</div>
          { skill.center ?
           this.getBorderCrosses()
          : null }
        </React.Fragment>
      </div>
    ));
    return (
      <section id='skills'>
        <h3>Skills</h3>
        <div className="skills">
          {skills}
        </div>
      </section>
    );
  };
}

export default Skills;