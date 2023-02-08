import React from 'react'
import './App.css';
import { Route, Redirect } from "react-router-dom"
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
    <Navbar/>
     <Route exact path ="/gh-pages-url/">
          <Home/>
      </Route>

      <Route exact path ="/gh-pages-url/aboutus">
          <Aboutus/>
      </Route>
      <Route exact path ="/gh-pages-url/expriences">
          <Expriences/>
      </Route>
      <Route exact path ="/gh-pages-url/education">
          <Education/>
      </Route>
      <Route exact path ="/gh-pages-url/projects">
          <Projects/>
      </Route>
      <Route exact path ="/gh-pages-url/contact">
          <Contact/>
      </Route>
      <Redirect to="/gh-pages-url/" />
    </>
  )
}

export default App
