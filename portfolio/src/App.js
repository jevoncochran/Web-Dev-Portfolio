import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

import { Main } from "./components";

function App() {
  return (
<div className="demo-big-content">
    <Layout>
        <Header className="nav-header" title="Jevon Cochran" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Jevon Cochran">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
