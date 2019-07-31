import React, { Component } from 'react';
import '../../css/index.css';
import { withRouter } from 'react-router-dom';

const parts = [
  50,
  30,
  20
];
const height = 400;
const space = 2;
const persY = 324.69;

const pathPersTwo = `M92.63,66.94H59.52V56.69A28.35,28.35,0,1,0,31.17,28.35,
                     28.34,28.34,0,0,0,59.52,56.69V66.94H26.41A26.41,26.41,0,
                     0,0,0,93.35v87.79a9.93,9.93,0,0,0,9.92,9.93h0a9.93,9.93,
                     0,0,0,9.92-9.93V101h7.32v87.4h.07V311.93a12.76,12.76,0,1,
                     0,25.51,0V188.35H66.29V311.93a12.76,12.76,0,1,0,25.51,
                     0V188.35h.08V101h7.31v80.19a9.93,9.93,0,0,0,9.92,9.93h0a9.93,
                     9.93,0,0,0,9.92-9.93V93.35A26.41,26.41,0,0,0,92.63,66.94Z`;

class SvgTest extends Component {

  // Get Startposition of Part by adding Startposition and Height of previous Part
  getStart = i => { return i === 0 ? 0 : this.getStart(i-1) + this.getHeight(i-1) + space }

  // Get Height of Part by Persentage
  getHeight = i => { return persY / 100 * parts[i] }

  render() {
    const graphPers = (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.03 324.69" height={height}  style={{display: "block", margin: " 100px auto"}} preserveAspectRatio>
          <defs>
            <clipPath id="cutOneS">
              <rect x="0" y={this.getStart(0)} width="200" height={this.getHeight(0)} />
            </clipPath>
            <clipPath id="cutTwoS">
              <rect x="0" y={this.getStart(1)} width="200" height={this.getHeight(1)} />
            </clipPath>
            <clipPath id="cutThreeS">
              <rect x="0" y={this.getStart(2)} width="200" height={this.getHeight(2)} />
            </clipPath>
          </defs>

          <path d={pathPersTwo} clipPath="url(#cutOneS)" fill="#0EABA9" />
          <path d={pathPersTwo} clipPath="url(#cutTwoS)" fill="#A63297" />
          <path d={pathPersTwo} clipPath="url(#cutThreeS)" fill="#91BA2F" />
          <rect x="39.86" y="56.69" width="38.81" height="10.25" fill="#ffffff"/>
        </svg>
    );
    return (
      <React.Fragment>
          <div class="card">
            <h2>Kundenerlebniss Allgemein</h2>
            <div class="card-content">
              <div class="graph">
                {graphPers}
              </div>
              <div className="graph-legend">
                <div>
                  <p></p>
                  <div className="icon"></div>
                  <p>Kunden mit blablbla</p>
                </div>
              </div>
              <div className="graph-legend">
                <div>
                  <p></p>
                  <div className="icon"></div>
                  <p>Kunden mit blablbla</p>
                </div>
              </div>
              <div className="graph-legend">
                <div>
                  <p></p>
                  <div className="icon"></div>
                  <p>Kunden mit blablbla</p>
                </div>
              </div>
            </div>
          </div>
      </React.Fragment>
    );
  };
}

export default withRouter(SvgTest);