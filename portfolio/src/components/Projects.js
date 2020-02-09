import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from "react-mdl";

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories (){
        if (this.state.activeTab === 0) {
            return (
            <div className="projects-grid">
                <Card shadow={5} style={{minwidth: '450', margin: 'auto', textAlign: 'center'}}>
                    <CardTitle style={{
                            color: '#fff', 
                            height: '176px', 
                            background: 'url(https://reactjs.org/logo-og.png) center / cover'
                        }} 
                    />
                    <CardTitle className="card-title-text" style={{margin: '0 auto'}}>React Project #1</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minwidth: '450', margin: 'auto', textAlign: 'center'}}>
                    <CardTitle style={{
                            color: '#fff', 
                            height: '176px', 
                            background: 'url(https://reactjs.org/logo-og.png) center / cover'
                        }}
                    />
                    <CardTitle className="card-title-text" style={{margin: '0 auto'}}>React Project #2</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minwidth: '450', margin: 'auto', textAlign: 'center'}}>
                    <CardTitle style={{
                            color: '#fff', 
                            height: '176px', 
                            background: 'url(https://reactjs.org/logo-og.png) center / cover'
                        }}
                    />
                    <CardTitle className="card-title-text" style={{margin: '0 auto'}}>React Project #3</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minwidth: '450', margin: 'auto', textAlign: 'center'}}>
                        <CardTitle style={{
                                color: '#000', 
                                height: '176px', 
                                background: 'url(https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36) center / cover'
                            }} 
                        />
                        <CardTitle className="card-title-text" style={{margin: '0 auto'}}>Angular Project #1</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minwidth: '450', margin: 'auto', textAlign: 'center'}}>
                        <CardTitle style={{
                                color: '#000', 
                                height: '176px', 
                                background: 'url(https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36) center / cover'
                            }} 
                        />
                        <CardTitle className="card-title-text" style={{margin: '0 auto'}}>Angular Project #2</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minwidth: '450', margin: 'auto', textAlign: 'center'}}>
                        <CardTitle style={{
                                color: '#000', 
                                height: '176px', 
                                background: 'url(https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36) center / cover'
                            }} 
                        />
                        <CardTitle className="card-title-text" style={{margin: '0 auto'}}>Angular Project #3</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minwidth: '450', margin: 'auto', textAlign: 'center'}}>
                        <CardTitle className="vuejs-card-title" style={{
                            color: '#000', 
                            height: '176px', 
                            background: 'url(https://vuejs.org/images/logo.png) center / cover',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }} />
                        <CardTitle className="card-title-text" style={{margin: '0 auto'}}>VueJS Project #1</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minwidth: '450', margin: 'auto', textAlign: 'center'}}>
                        <CardTitle className="vuejs-card-title" style={{
                            color: '#000', 
                            height: '176px', 
                            background: 'url(https://vuejs.org/images/logo.png) center / cover',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }} />
                        <CardTitle className="card-title-text" style={{margin: '0 auto'}}>VueJS Project #2</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minwidth: '450', margin: 'auto', textAlign: 'center'}}>
                        <CardTitle className="vuejs-card-title" style={{
                            color: '#000', 
                            height: '176px', 
                            background: 'url(https://vuejs.org/images/logo.png) center / cover',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }} />
                        <CardTitle className="card-title-text" style={{margin: '0 auto'}}>VueJS Project #3</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minwidth: '450', margin: 'auto', textAlign: 'center'}}>
                        <CardTitle className="mongoDB-card-title" style={{
                            color: '#000', 
                            height: '176px', 
                            background: 'url(https://www.sensorstechforum.com/wp-content/uploads/2017/09/mongodb-secuity-attacks-image-sensorstechforum-com.png) center / cover',
                            backgroundSize: 'contain'
                        }} />
                        <CardTitle className="card-title-text" style={{margin: '0 auto'}}>MongoDB Project #1</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minwidth: '450', margin: 'auto', textAlign: 'center'}}>
                    <CardTitle className="mongoDB-card-title" style={{
                            color: '#000', 
                            height: '176px', 
                            background: 'url(https://www.sensorstechforum.com/wp-content/uploads/2017/09/mongodb-secuity-attacks-image-sensorstechforum-com.png) center / cover',
                            backgroundSize: 'contain'
                        }} />
                        <CardTitle className="card-title-text" style={{margin: '0 auto'}}>MongoDB Project #2</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minwidth: '450', margin: 'auto', textAlign: 'center'}}>
                    <CardTitle className="mongoDB-card-title" style={{
                            color: '#000', 
                            height: '176px', 
                            background: 'url(https://www.sensorstechforum.com/wp-content/uploads/2017/09/mongodb-secuity-attacks-image-sensorstechforum-com.png) center / cover',
                            backgroundSize: 'contain'
                        }} />
                        <CardTitle className="card-title-text" style={{margin: '0 auto'}}>MongoDB Project #3</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render() {
    
        return (
            <div>
                <div className="category-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={tabId => this.setState({ activeTab: tabId })} ripple>
                        <Tab>React</Tab>
                        <Tab>Angular</Tab>
                        <Tab>VueJS</Tab>
                        <Tab>MongoDB</Tab>
                    </Tabs>
                </div>
                <Grid>
                    <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}