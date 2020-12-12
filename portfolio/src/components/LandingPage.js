import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import myImg from "../assets/jevon_cochran_quibdo.jpg";

export class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="img-square">
              <img src={myImg} alt="black male avatar" className="avatar-img" />
            </div>
            <div className="banner-text">
              <h1>Jevon Cochran</h1>
              <h2>Full Stack Web Developer</h2>
              <hr />
              <p>
                HTML/CSS | Javascript | React | Python | React Native | NodeJS
              </p>
              <div className="social-links">
                <a href="google.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-staylinked" aria-hidden="true" />
                </a>

                <a href="google.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github-square" aria-hidden="true" />
                </a>

                <a href="google.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube-square" aria-hidden="true" />
                </a>

                <a href="google.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-stack-overflow" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
