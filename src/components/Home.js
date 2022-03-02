import React from 'react'
import { NavLink } from 'react-router-dom';
import Particles from './Particless'
import Typing from './Typing'
import photo from './images/1646218137668.jpg'

function Home() {
    return (
        <>
        <section className="margin-view">
       <Particles/>
        <div className=" gfuSqG container-fluid d-flex flex-column">
            <div className="row d-none d-sm-flex align-items-center mt-4">
                <div className="col-3">  <h4>@mayanksinghms777</h4> </div>
                <div className="col-9 d-flex flex-row justify-content-end align-items-center ml-auto">
                    <NavLink className="button-contact" to="/contact">Contact Me</NavLink>
                    <a className="button-contact" target="_blank" href="https://drive.google.com/file/d/10KucIsyJmj8-QRMyxHE3ogLZbIHQvpdy/view?usp=sharing">Resume</a>
                </div>  
            </div>
            <div className="row d-flex flex-row flex-grow-1 align-items-center justify-content-center">
                <div className="col-12 col-sm-8 p-0 h-100">
                    <div className="intro">
                        <p className="intro-one">The cutest girl </p>
                        
                        <span className="intro-two"><Typing/></span>
                        
                        <div className="d-flex d-sm-none flex-row justify-content-start align-items-center mb-4">
                            <NavLink className="button-contact" to="/contact">Contact Me</NavLink>
                            <a className="button-contact" target="_blank" href="https://drive.google.com/file/d/10KucIsyJmj8-QRMyxHE3ogLZbIHQvpdy/view?usp=sharing">Resume</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4 col p-0 h-100">
                    <div className="photo">
                        <img src={photo} width="80%" alt="" className="photo-adjust"/>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default Home
