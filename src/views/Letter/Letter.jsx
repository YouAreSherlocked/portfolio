import React, { Component } from 'react';
import { NewLineKind } from 'typescript';

class Letter extends Component {

  render() {
    const { title, name } = this.props;
    const link = 'mailto:Timo.Mayer@swisscom.com?subject=Projekt%20Zusage%20&amp;body=Hallo%20Timo%0D%0A%0D%0ADu%20hast%20uns%20überzeugt%20und%20wir%20würden%20dich%20gerne%20besser%20kennen%20lernen.Geht%20es%20dir%20am%20...%20?%0A%0ALiebe%20Grüsse%0A$t';
    return (
      <section id="letter">
        <div>
          <p>
            Bewerbung für das Projekt<br></br>
          </p>
          <h4>{title}</h4><br></br>
          <p>
          Hallo {name}<br></br>
          <br></br>
          Ich will bei euch arbeiten.<br></br>
          Ich will an euren Erfahrungen teilhaben.<br></br>
          Ich will meine Kreativität und Ideen mit denjenigen von euch verbinden um neues zu erschaffen.<br></br>
          <br></br>
          Als ich dein ausgeschriebenes Projekt sah, war ich sofort begeistert. Da ich mich gerne im Backend
          weiterentwickeln will aber auch sehr gerne im Frontend tätig bin, scheint dieses Projekt das Optimale zu sein. 
          Mit Erfahrungen in ASP.NET MVC durch zwei Qualiprojekte, Erfahrungen in Javascript (React, Vue, JQuery, Vanilla) 
          durch ein weiteres Qualiprojekt & privaten Arbeiten und vielen kreativen Erfahrungen welche ich sammeln konnte, 
          kann ich sicherlich einen unterstützenden und aufbauenden Beitrag an SimpleScreen leisten.

          Durch das Mitleiten einer Jugendgruppe mit rund 80 Jugendlichen kann ich wöchentlich in Verantwortung und Selbstinitiative vorwärtskommen. 
          Das Minimum reicht mir nicht und ich lerne aus Fehlern. Ich lerne schnell durch analytisches Denken 
          und bringe viel Leidenschaft mit.
          <br></br><br></br>
          Ich bin überzeugt, dass du einen Gewinn aus mir ziehen kannst und ich aus euch. Es würde mich freuen dich und das Projekt  besser kennen 
          zu lernen. Wenn dich das auch freuen würde schick doch dieses 
          <a href="mailto:Timo.Mayer@swisscom.com?subject=Projekt%20Zusage%20&amp;body=Hallo%20Timo%0D%0A%0D%0ADu%20hast%20uns%20überzeugt%20und%20wir%20würden%20dich%20gerne%20besser%20kennen%20lernen.%20;)%0AGeht%20es%20dir%20am%20...%20?%0A%0ALiebe%20Grüsse%0ABenaja"> Mail </a>
          ab um gleich ein Datum abzumachen.
          <br></br><br></br>
          Freundliche Grüsse<br></br>
          <img className="signature" src={require('../../assets/img/signature.png')} alt="siganture" />
          Timo Mayer<br></br>
          Lernender Informatiker<br></br>
          Applikationsentwicklung 2. Lehrjahr
          </p>
        </div>
      </section>
    );
  }
}

export default Letter;