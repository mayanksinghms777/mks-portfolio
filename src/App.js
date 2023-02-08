import React from 'react'
import './App.css';
import { Route, Redirect, BrowserRouter } from "react-router-dom"
import Home from './components/Home';
import Navbar from './components/Navbar'
import Aboutus from './components/Aboutus';
import Expriences from './components/Expriences';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App =() => {
  return (
    <>
    <BrowserRouter basename="/mks-portfolio">   
    <Navbar/>
     <Route exact path ="/">
          <Home/>
      </Route>

      <Route exact path ="/aboutus">
          <Aboutus/>
      </Route>
      <Route exact path ="/expriences">
          <Expriences/>
      </Route>
      <Route exact path ="/education">
          <Education/>
      </Route>
      <Route exact path ="/projects">
          <Projects/>
      </Route>
      <Route exact path ="/contact">
          <Contact/>
      </Route>
      <Redirect to="/" />
      </BrowserRouter>

    </>
  )
}

export default App
