import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

import favelaHeadshot from "../assets/favela-headshot.jpg";

export class Resume extends Component {
    render() {
        return (
            <div>
                <div>
                    <Grid>
                        <Cell col={4}>
                            <div style={{textAlign: 'center'}}>
                                <img 
                                    src={favelaHeadshot}
                                    alt="avatar"
                                    style={{height: '200px'}}
                                />
                            </div>
                            <h2 style={{paddingTop: '2em'}}>Jevon Cochran</h2>
                            <h4 style={{color: 'grey'}}>Programmer</h4>
                            <hr style={{borderTop: '3px solid #833FB2', width: '50%'}} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <hr style={{borderTop: '3px solid #833FB2', width: '50%'}} />
                            <h5>Address</h5>
                            <p>5542 Foothill Blvd</p>
                            <p>Oakland, CA 94605</p>
                            <h5>Phone</h5>
                            <p>(510) 424-8976</p>
                            <h5>Email</h5>
                            <p>jevon.cochran@gmail.com</p>
                            <h5>Web</h5>
                            <p>mywebsite.com</p>
                            <hr style={{borderTop: '3px solid #833FB2', width: '50%'}} />
                        </Cell>
                        <Cell className="resume-right" col={8}>
                            <h2>Education</h2>
                            <Education 
                                startYear="2010"
                                endYear="2014"
                                schoolName="University of California, Berkley"
                                schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            />
                            <Education 
                                startYear="2019"
                                endYear="2020"
                                schoolName="Lambda School"
                                schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            />
                            <hr style={{borderTop: '3px solid #E22947'}} />

                            <h2>Experience</h2>
                            <Experience 
                                startYear="2009"
                                endYear="2012"
                                jobName="first job"
                                jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            />
                            <Experience 
                                startYear="2012"
                                endYear="2015"
                                jobName="second job"
                                jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            />
                            <hr style={{borderTop: '3px solid #E22947'}} />
                            <h2>Skills</h2>
                            <Skills 
                                skill="javascript"
                                progress={100}
                            />
                            <Skills 
                                skill="HTML/CSS"
                                progress={85}
                            />
                            <Skills 
                                skill="NodeJS"
                                progress={50}
                            />
                            <Skills 
                                skill="React"
                                progress={25}
                            />
                        </Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}