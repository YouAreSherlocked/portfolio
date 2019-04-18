import React from 'react';
import '../../css/index.css';
import HeaderSmall from '../Header/HeaderSmall';

export const WorkDetail = (props) => (
  <React.Fragment>
    <HeaderSmall></HeaderSmall>
    <section id="workDetail">
      <h3>Detail {props.match.params.id}</h3>
      <div className="intro">
        <div>
          <img src={props.image} />
        </div>
        <div>
          <p>{props.descriptions}</p>
        </div>
      </div>
    </section>
  </React.Fragment>
);
