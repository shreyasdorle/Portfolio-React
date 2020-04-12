import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
