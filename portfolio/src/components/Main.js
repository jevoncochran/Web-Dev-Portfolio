import React from "react";
import { Switch, Route } from "react-router-dom";

import { LandingPage, AboutMe, Contact, Projects, Resume } from "../components";

export const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/about" component={AboutMe} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
        </Switch>
    )
}