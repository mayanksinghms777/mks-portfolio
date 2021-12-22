import React, { useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import lottie from "lottie-web";


function Aboutus() {

    AOS.init()

    const aboutGIF = useRef(null);

    useEffect(() => {
      lottie.loadAnimation({
        container: aboutGIF.current,
        render: "svg",
        loop: true,
        autoplay: true,
        animationData: require("./images/82974-add-user.json")
      });
      return () => {
        lottie.destroy();
      };
  
    }, []);

    return (
        <>
        <section className="about">
            <div className="about-container container d-flex flex-column align-items-center justify-content-center">
                <div className="mt-5 row d-flex flex-row align-items-center justify-content-center w-100">
                    <div className="col-12 col-sm-8 p-0 h-100">
                            <h1 className="mb-4" data-aos="zoom-in" >About Me</h1>
                            <h4>Computer Science Engineer</h4>
                            <p className="p-tag">Hello There! I am <b>Mayank Kumar Singh</b>, an aspiring <i>Computer Science Engineer</i>. My interests lies in the domain of <u>Web Development</u> and <u>Business Analyst</u>. I'm a fourth year student, learning skills in <u>Software development</u>  and <u>Web development.</u> </p>
                            <p></p>
                            <div className="d-flex flex-row justify-content-center w-100">
                                <a className="button-contact" target="__blank__" href="mailto:mayanksinghms777@gmail.com" >Contact Me</a>
                                <a target="_blank" data-aos="fade-left" className="button-contact" href="https://drive.google.com/file/d/1MVlBPzJk-BiUPhGbjulRBIUB0PBiHlrE/view?usp=sharing">Resume</a>
                            </div>
                    </div>
                    <div className="col-12 mt-1 col-sm-4 p-0 h-100 d-flex justify-content-center">
                      {/*  <img src={photo} width="60%" alt="" className="photo-adjust"/> */}
                      <div className="gif" width="90%" ref={aboutGIF}></div>
                    </div>
                </div>
                <div className="mt-5 mb-5 row d-flex flex-row w-100">
                    <div className="col-12 d-flex flex-column align-items-center justify-content-center w-100 p-0 h-100">
                        <h3 data-aos="flip-left" >Skills</h3>
                        <table class="table mt-4">
                            <tbody>
                                <tr>
                                    <td>Languages</td>
                                    <td>
                                        <span class="badge ">C/C++</span>
                                        <span class="badge ">Java</span>
                                        <span class="badge ">JavaScript</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Framework & Libraries</td>
                                    <td>
                                        <span class="badge ">Node.js</span>
                                        <span class="badge ">React Js</span>
                                        <span class="badge ">Express Js</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Database</td>
                                    <td>
                                        <span class="badge ">SQL</span>
                                        <span class="badge ">MongoDB</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Cloud Service</td>
                                    <td>
                                        <span class="badge ">Google Cloud Platform</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Operating System</td>
                                    <td>
                                        <span class="badge ">Window</span>
                                        <span class="badge ">Mac</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
           
        </>
    )
}

export default Aboutus
