import React, { Component } from 'react';

class Letter extends Component {
  render() {
    const { title, name } = this.props;
    return (
      <section id="letter">
        <p>
          Bewerbung für das Projekt<br></br>
          <h4>{title}</h4><br></br>
          Hallo {name}<br></br>
          <br></br>
          Ich will bei euch arbeiten.<br></br>
          Ich will an euren Erfahrungen teilhaben.<br></br>
          Ich will meine Kreativität und Ideen mit denjenigen von euch verbinden um neues zu erschaffen.<br></br>
          <br></br>
          Als ich dein ausgeschriebenes Projekt sah, war ich sofort begeistert. Die Mischung aus Kreativität, Programmierung, 
          Selbständigkeit und möglichem Tutoring spricht mich besonders stark an. Selbstständigkeit ist eine Stärke von mir und 
          eine Eigenschaft, welche ich als sehr wichtig empfinde. Ich liebe es, bei einem Auftrag mit- und weiterzudenken und 
          möglichst kreative Ideen zu entwickeln, welche der Kunde oder Arbeitgeber noch nicht einmal erwartet hätten. 
          Dies zeigte sich bereits in dutzenden privaten Grafik Design Projekten und deren Feedbacks. Durch das Mitleiten 
          einer Jugendgruppe mit rund 80 Jugendlichen kann ich wöchenlich in Verantwortung und Selbstinitiative vorwärtskommen. 
          Das Minimum reicht mir nicht und ich lerne aus Fehlern. Erfahrungen in HTML/CSS und JS konnte ich bereits in mehreren 
          Swisscom Projekten sowie in privaten Auträgen sammeln. Ich lerne schnell durch analytisches und zielorientieres Denken 
          und bringe viel Leidenschaft mit. Mein Stand in Frontendprogrammierung kannst du am Besten an dieser Bewerbungswebsite 
          ablesen, welche ich programmiert habe. 
          <br></br><br></br>
          Ich bin überzeugt, dass du einen Gewinn aus mir ziehen kannst und ich aus euch. Ich würde mich freuen dich besser kennen 
          zu lernen. Wenn dich das auch freuen würde schick doch kurz dieses Mail ab um ein Datum abzumachen.
          <br></br><br></br>
          Freundliche Grüsse<br></br>
          <img class="signature" src={require('../../assets/img/signature.png')} />
          Timo Mayer<br></br>
          Lernender Informatiker<br></br>
          Applikationsentwicklung 2. Lehrjahr
        </p>
      </section>
    );
  }
}

export default Letter;