import React from 'react'
import { NavLink } from 'react-router-dom';
import Particles from './Particless'
import Typing from './Typing'
import photo from './images/gr-min.jpg'

function Home() {
    return (
        <>
        <section className="margin-view">
       <Particles/>
        <div className=" gfuSqG container-fluid d-flex flex-column">
            <div className="row d-none d-sm-flex align-items-center mt-4">
                <div className="col-3">  <h4>@mayanksinghms777</h4> </div>
                <div className="col-9 d-flex flex-row justify-content-end align-items-center ml-auto">
                    <a className="button-contact" target="__blank__" href="mailto:mayanksinghms777@gmail.com" >Contact Me</a>
                    <a className="button-contact" target="_blank" href="https://drive.google.com/file/d/1MVlBPzJk-BiUPhGbjulRBIUB0PBiHlrE/view?usp=sharing">Resume</a>
                </div>  
            </div>
            <div className="row d-flex flex-row flex-grow-1 align-items-center justify-content-center">
                <div className="col-12 col-sm-8 p-0 h-100">
                    <div className="intro">
                        <p className="intro-one">Hi, my name is ....</p>
                        
                        <span className="intro-two"><Typing/></span>
                        
                        <div className="d-flex d-sm-none flex-row justify-content-start align-items-center mb-4">
                            <NavLink className="button-contact" to="/contact">Contact Me</NavLink>
                            <a className="button-contact" target="_blank" href="https://drive.google.com/file/d/1MVlBPzJk-BiUPhGbjulRBIUB0PBiHlrE/view?usp=sharing">Resume</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4 col p-0 h-100">
                    <div className="photo">
                        <img src={photo} width="70%" alt="" className="photo-adjust"/>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default Home
