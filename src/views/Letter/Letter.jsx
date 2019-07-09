import React, { Component } from 'react';
import Curriculum from '../curriculum/Curriculum';
import helpers from '../../helpers/helpers';


class Letter extends Component {

  getLetter() {
    let letter = "";
    switch (localStorage.getItem("auth")) {
      case helpers.hash("simplescreen"):
        letter = (
          <div>
          <p>
            Bewerbung für das Projekt<br></br>
          </p>
          <h4>Full Stack Developer / Webentwicklung SimpleScreen</h4><br></br>
          <p>
          Hallo Benaja<br></br>
          <br></br>
          Ich will bei euch arbeiten.<br></br>
          Ich will an euren Erfahrungen teilhaben.<br></br>
          Ich will meine Kreativität und Ideen mit denjenigen von euch verbinden um neues zu erschaffen.<br></br>
          <br></br>
          Als ich dein ausgeschriebenes Projekt sah, war ich sofort begeistert. Da ich mich gerne im Backend
          weiterentwickeln will aber auch sehr gerne im Frontend tätig bin, scheint dieses Projekt das Optimale zu sein. 
          Mit Erfahrungen in ASP.NET MVC durch zwei Qualiprojekte, Erfahrungen in Javascript (React, Vue, JQuery, Vanilla) 
          durch ein weiteres Qualiprojekt & privaten Arbeiten und vielen kreativen Erfahrungen welche ich sammeln konnte, 
          kann ich sicherlich einen unterstützenden und aufbauenden Beitrag an SimpleScreen leisten.<br></br>

          Durch das Mitleiten einer Jugendgruppe mit rund 80 Jugendlichen kann ich wöchentlich in Verantwortung und Selbstinitiative vorwärtskommen. 
          Das Minimum reicht mir nicht und ich lerne aus Fehlern. Ich lerne schnell durch analytisches Denken 
          und bringe viel Leidenschaft mit.
          <br></br><br></br>
          Ich bin überzeugt, dass du einen Gewinn aus mir ziehen kannst und ich aus euch. Es würde mich freuen dich und das Projekt  besser kennen 
          zu lernen. Wenn dich das auch freuen würde schick doch dieses 
          <a href="mailto:Timo.Mayer@swisscom.com?subject=Projekt%20Zusage%20&amp;body=Hallo%20Timo%0D%0A%0D%0ADu%20hast%20uns%20überzeugt%20und%20wir%20würden%20dich%20gerne%20besser%20kennen%20lernen.%20;)%0AGeht%20es%20dir%20am%20...%20?%0A%0ALiebe%20Grüsse"> Mail </a>
          ab um gleich ein Datum abzumachen.
          <br></br><br></br>
          Freundliche Grüsse<br></br>
          <img className="signature" src={require('../../assets/img/signature.png')} alt="siganture" />
          Timo Mayer<br></br>
          Lernender Informatiker<br></br>
          Applikationsentwicklung 2. Lehrjahr
          </p>
        </div>
        );
        break;
      case helpers.hash("dqmtool"):
        letter = (
          <div>
          <p>
            Bewerbung für das Projekt<br></br>
          </p>
          <h4>Data Quality Management Tool v1.1</h4><br></br>
          <p>
          Hallo Pascal<br></br>
          <br></br>
          Ich will bei euch arbeiten.<br></br>
          Ich will an euren Erfahrungen teilhaben.<br></br>
          Ich will meine Kreativität und Ideen mit denjenigen von euch verbinden um neues zu erschaffen.<br></br>
          <br></br>
          Als ich dein ausgeschriebenes Projekt sah, war ich sofort begeistert. Da ich mich gerne im Backend
          weiterentwickeln will aber auch sehr gerne im Frontend tätig bin, scheint dieses Projekt das Optimale zu sein. 
          Mit Erfahrungen in ASP.NET MVC durch zwei Qualiprojekte, Erfahrungen in Javascript (React, Vue, JQuery, Vanilla) 
          durch ein weiteres Qualiprojekt & privaten Arbeiten und vielen kreativen Erfahrungen welche ich sammeln konnte, 
          kann ich sicherlich einen unterstützenden und aufbauenden Beitrag am DQM Tool leisten.<br></br>

          Durch das Mitleiten einer Jugendgruppe mit rund 80 Jugendlichen kann ich wöchentlich in Verantwortung und Selbstinitiative vorwärtskommen. 
          Das Minimum reicht mir nicht und ich lerne aus Fehlern. Ich lerne schnell durch analytisches Denken 
          und bringe viel Leidenschaft mit.
          <br></br><br></br>
          Ich bin überzeugt, dass du einen Gewinn aus mir ziehen kannst und ich aus euch. Es würde mich freuen dich und das Projekt  besser kennen 
          zu lernen. Wenn dich das auch freuen würde schick doch dieses 
          <a href="mailto:Timo.Mayer@swisscom.com?subject=Projekt%20Zusage%20&amp;body=Hallo%20Timo%0D%0A%0D%0ADu%20hast%20uns%20überzeugt%20und%20wir%20würden%20dich%20gerne%20besser%20kennen%20lernen.%20;)%0AGeht%20es%20dir%20am%20...%20?%0A%0ALiebe%20Grüsse"> Mail </a>
          ab um gleich ein Datum abzumachen.
          <br></br><br></br>
          Freundliche Grüsse<br></br>
          <img className="signature" src={require('../../assets/img/signature.png')} alt="siganture" />
          Timo Mayer<br></br>
          Lernender Informatiker<br></br>
          Applikationsentwicklung 2. Lehrjahr
          </p>
        </div>
        );
        break;
        case helpers.hash("vicotv"):
        letter = (
          <div>
          <p>
            Bewerbung für das Projekt<br></br>
          </p>
          <h4>Backend Entwicklung bei VicoTV</h4><br></br>
          <p>
          Hallo Patric<br></br>
          <br></br>
          Ich will bei euch arbeiten.<br></br>
          Ich will an euren Erfahrungen teilhaben.<br></br>
          Ich will meine Kreativität und Ideen mit denjenigen von euch verbinden um neues zu erschaffen.<br></br>
          <br></br>
          Als ich dein ausgeschriebenes Projekt sah, war ich sofort begeistert. Da ich mich gerne im Backend
          weiterentwickeln will aber auch sehr gerne im Frontend tätig bin, scheint dieses Projekt das Optimale zu sein. 
          Mit Erfahrungen in ASP.NET MVC durch zwei Qualiprojekte, Erfahrungen in Javascript (React, Vue, JQuery, Vanilla) 
          durch ein weiteres Qualiprojekt & privaten Arbeiten und vielen kreativen Erfahrungen welche ich sammeln konnte, 
          kann ich sicherlich einen unterstützenden und aufbauenden Beitrag an VicoTV leisten.<br></br>

          Durch das Mitleiten einer Jugendgruppe mit rund 80 Jugendlichen kann ich wöchentlich in Verantwortung und Selbstinitiative vorwärtskommen. 
          Das Minimum reicht mir nicht und ich lerne aus Fehlern. Ich lerne schnell durch analytisches Denken 
          und bringe viel Leidenschaft mit.
          <br></br><br></br>
          Ich bin überzeugt, dass du einen Gewinn aus mir ziehen kannst und ich aus euch. Es würde mich freuen dich und das Projekt  besser kennen 
          zu lernen. Wenn dich das auch freuen würde schick doch dieses 
          <a href="mailto:Timo.Mayer@swisscom.com?subject=Projekt%20Zusage%20&amp;body=Hallo%20Timo%0D%0A%0D%0ADu%20hast%20uns%20überzeugt%20und%20wir%20würden%20dich%20gerne%20besser%20kennen%20lernen.%20;)%0AGeht%20es%20dir%20am%20...%20?%0A%0ALiebe%20Grüsse"> Mail </a>
          ab um gleich ein Datum abzumachen.
          <br></br><br></br>
          Freundliche Grüsse<br></br>
          <img className="signature" src={require('../../assets/img/signature.png')} alt="siganture" />
          Timo Mayer<br></br>
          Lernender Informatiker<br></br>
          Applikationsentwicklung 2. Lehrjahr
          </p>
        </div>
        );
        break;
        case helpers.hash("dqmscorecard"):
        letter = (
          <div>
          <p>
            Bewerbung für das Projekt<br></br>
          </p>
          <h4>DQM - Score Card</h4><br></br>
          <p>
          Hallo Sebastian<br></br>
          <br></br>
          Ich will bei euch arbeiten.<br></br>
          Ich will an euren Erfahrungen teilhaben.<br></br>
          Ich will meine Kreativität und Ideen mit denjenigen von euch verbinden um neues zu erschaffen.<br></br>
          <br></br>
          Da ich mich besonders im Backend und in verschiedenen OOP Sprachen weiterentwickeln will, scheint dieses Projekt das Optimale zu sein. 
          Mit Erfahrungen in ASP.NET MVC durch zwei Qualiprojekte, Erfahrungen in Javascript (React, Vue, JQuery, Vanilla) 
          durch ein weiteres Qualiprojekt & privaten Arbeiten und vielen kreativen Erfahrungen welche ich sammeln konnte, 
          kann ich sicherlich einen unterstützenden und aufbauenden Beitrag an der DQM Score Card leisten.<br></br>

          Durch das Mitleiten einer Jugendgruppe mit rund 80 Jugendlichen kann ich wöchentlich in Verantwortung und Selbstinitiative vorwärtskommen. 
          Das Minimum reicht mir nicht und ich lerne aus Fehlern. Ich lerne schnell durch analytisches Denken 
          und bringe viel Leidenschaft mit.
          <br></br><br></br>
          Ich bin überzeugt, dass du einen Gewinn aus mir ziehen kannst und ich aus euch. Es würde mich freuen dich und das Projekt  besser kennen 
          zu lernen. Wenn dich das auch freuen würde schick doch dieses 
          <a href="mailto:Timo.Mayer@swisscom.com?subject=Projekt%20Zusage%20&amp;body=Hallo%20Timo%0D%0A%0D%0ADu%20hast%20uns%20überzeugt%20und%20wir%20würden%20dich%20gerne%20besser%20kennen%20lernen.%20;)%0AGeht%20es%20dir%20am%20...%20?%0A%0ALiebe%20Grüsse"> Mail </a>
          ab um gleich ein Datum abzumachen.
          <br></br><br></br>
          Freundliche Grüsse<br></br>
          <img className="signature" src={require('../../assets/img/signature.png')} alt="siganture" />
          Timo Mayer<br></br>
          Lernender Informatiker<br></br>
          Applikationsentwicklung 2. Lehrjahr
          </p>
        </div>
        );
        break;

      default:
        letter = "";
        break;
    }

    return letter;
  }

  render() {
    return (
      <section id="letter">
        <Curriculum></Curriculum>
        {this.getLetter()}
      </section>
    );
  }
}

export default Letter;