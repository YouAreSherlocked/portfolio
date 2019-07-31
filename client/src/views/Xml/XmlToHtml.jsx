
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../css/index.css'
import getXmlData from './XmlExample';

let xmlData2 = (`
<?xml version='1.0' encoding='utf-8'?>
<Library>
   <Books count='1'>
       <Book id='1'>
           <Name>Me Before You</Name>
           <Author>Jojo Moyes</Author>
       </Book>
   </Books>
   <Music count=1>
       <CD id='2'>
           <Name>Houses of the Holy</Name>
           <Artist>Led Zeppelin</Artist>
       </CD>
   </Music>
</Library>`
);

let parser = require('fast-xml-parser');
let he = require('he');
console.log(getXmlData);
let xmlData = getXmlData;
 
let options = {
    attributeNamePrefix : "@_",
    attrNodeName: "attr", //default is 'false'
    textNodeName : "#text",
    ignoreAttributes : true,
    ignoreNameSpace : false,
    allowBooleanAttributes : false,
    parseNodeValue : true,
    parseAttributeValue : false,
    trimValues: true,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    localeRange: "", //To support non english character in tag/attribute values.
    parseTrueNumberOnly: false,
    attrValueProcessor: a => he.decode(a, {isAttributeValue: true}),//default is a=>a
    tagValueProcessor : a => he.decode(a) //default is a=>a
};
 
class XmlToHtml extends Component {

  convert() {
    console.log(xmlData)
    if( parser.validate(xmlData) === true) { //optional (it'll return an object in case it's not valid)
      let jsonObj = parser.parse(xmlData,options);
      console.log(jsonObj)
  }
   
    // Intermediate obj
    let tObj = parser.getTraversalObj(xmlData,options);
    let jsonObj = parser.convertToJson(tObj,options);
    console.log(tObj)
    console.log(jsonObj)
  }
  
  
  render = () => {
    return (
      <section>
        <div onClick={this.convert}>Test</div> 
      </section>
    );
  };

}

export default withRouter(XmlToHtml);
