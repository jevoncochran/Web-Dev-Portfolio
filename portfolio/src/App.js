import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

import { Main } from "./components";

function App() {
  return (
<div className="demo-big-content">
    <Layout>
        <Header className="nav-header" title={<Link className="nav-title-link" style={{textDecoration: 'none', color: 'white'}} to="/">Portfolio</Link>} scroll>
            <Navigation style={{justifyContent: 'flex-end', width: '90%'}}>
                <Link className="nav-links" to="/about">About Me</Link>
                <Link className="nav-links" to="/resume">Resume</Link>
                <Link className="nav-links" to="/projects">Projects</Link>
                <Link className="nav-links" to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer className="drawer-title" title={<Link className="nav-title-link" style={{textDecoration: 'none', color: '#757575'}} to="/">Jevon Cochran</Link>}>
            <Navigation>
                <Link className="nav-links" to="/">Home</Link>
                <Link className="nav-links" to="/about">About Me</Link>
                <Link className="nav-links" to="/resume">Resume</Link>
                <Link className="nav-links" to="/projects">Projects</Link>
                <Link className="nav-links" to="/contact">Contact</Link>
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
