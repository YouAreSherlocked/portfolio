import React from 'react';
import '../../css/index.css';
import HeaderSmall from '../Header/HeaderSmall';
import Hud from '../Hud/Hud';

export const WorkDetail = (props) => (
  <React.Fragment>
    <HeaderSmall></HeaderSmall>
    <Hud goDown></Hud>
    <section id="workDetail">
      <div className="intro">
        <div>
          <img src={props.location.state.project.image} alt="project intro" />
        </div>
        <div>
          <h3>{props.location.state.project.title}</h3>
          <p>{props.location.state.project.description}</p>
        </div>
      </div>
    </section>
  </React.Fragment>
);
