import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import hotelimg from "./images/Screenshot 2021-10-21 at 4.38.35 PM.png"
import weatherimg from "./images/Screenshot 2021-10-31 at 1.23.39 PM.png"
import dashimg from "./images/3556960.jpg"

function Projects() {

    const projectGIF = useRef(null);

    useEffect(() => {
      lottie.loadAnimation({
        container: projectGIF.current,
        render: "svg",
        loop: true,
        autoplay: true,
        animationData: require("./images/42817-about-project.json")
      });
      return () => {
        lottie.destroy();
      };
  
    }, []);

    return (
        <>
           <section className="about">
           <div className="education-container container d-flex flex-column align-items-center justify-content-center">
                <div className=" row d-flex flex-row align-items-center justify-content-center w-100">
                    <div className="col-12 col-sm-8 p-0 h-100">
                        <div className="projectgif"  ref={projectGIF}></div>
                    </div>
                </div>
                    
                        <div className=" row p-0 m-0 mt-5 w-100 justify-content-center">
                            <div class="p-2 col-12 d-flex flex-column align-items-center justify-content-center">
                                <div className="row w-100">
                                    <div className="col-12 col-sm-6 d-flex flex-row align-item-center justify-content-center">
                                        <img className="align-self-center" width="90%" src={hotelimg} alt="" />
                                    </div>
                                    <div class="col-12 col-sm-6 mt-2 mt-sm-0 d-flex flex-column align-item-center justify-content-center">
                                    <h5 class="w-100 gs_reveal ipsType_center">Hotel Managment System
                                        <div className="project-links">
                                        <a target="_blank" rel="noreferrer" href="https://github.com/mayanksinghms777/Hotel-MKS-Dashboard"><i class="ml-4 mr-1 fab fa-github"></i></a>
                                        <a target="_blank" rel="noreferrer" href="https://hotelmks-dashboard.herokuapp.com/"><i class="ml-2 mr-1 fa fa-external-link-alt"></i></a>
                                        </div>
                                    </h5>
                                    <p>A software to manage Hotel System using Dashboard which is created by mern stack.</p>
                                    <div><span class=" badge">JavaScript</span>
                                    <span class=" badge">React.js</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" row p-0 m-0 mt-5 w-100 justify-content-center">
                            <div class="p-2 col-12 d-flex flex-column align-items-center justify-content-center">
                                <div className="row w-100">
                                    <div className="col-12 col-sm-6 d-flex flex-row align-item-center justify-content-center">
                                        <img className="align-self-center" width="90%" height="85%" src={dashimg} alt="" />
                                    </div>
                                    <div class="col-12 col-sm-6 mt-2 mt-sm-0 d-flex flex-column align-item-center justify-content-center">
                                    <h5 class="w-100 gs_reveal ipsType_center">Company Dashboard 
                                    <div className="project-links">
                                        <a target="_blank" rel="noreferrer" href="https://github.com/mayanksinghms777/mks-dashboard"><i class="ml-4 mr-1 fab fa-github"></i></a>
                                        <a target="_blank" rel="noreferrer" href=" https://mks-dashboard.herokuapp.com/"><i class="ml-2 mr-1 fa fa-external-link-alt"></i></a>
                                        </div>
                                    </h5>
                                    <p>A software to manage Comapny's Employees using Dashboard which is created by mern stack.</p>
                                    <div><span class="badge">JavaScript</span>
                                    <span class="badge">React.js</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" row p-0 m-0 mt-5 w-100 justify-content-center">
                            <div class="p-2 col-12 d-flex flex-column align-items-center justify-content-center">
                                <div className="row w-100">
                                    <div className="col-12 col-sm-6 d-flex flex-row align-item-center justify-content-center">
                                        <img className="align-self-center" width="90%" height="80%" src={weatherimg} alt="" />
                                    </div>
                                    <div class="col-12 col-sm-6 mt-2 mt-sm-0 d-flex flex-column align-item-center justify-content-center">
                                    <h5 class="w-100 gs_reveal ipsType_center">Weather App
                                    <div className="project-links">
                                        <a target="_blank" rel="noreferrer" href="https://github.com/mayanksinghms777/weather_app"><i class="ml-4 mr-1 fab fa-github"></i></a>
                                        <a target="_blank" rel="noreferrer" href="https://mayank-weatherapp.herokuapp.com/"><i class="ml-2 mr-1 fa fa-external-link-alt"></i></a>
                                    </div>
                                    </h5>
                                    <p>A software using Api show the current temperature of given state or country.</p>
                                    <div><span class="badge">JavaScript</span>
                                    <span class="badge">React.js</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                  
            </div>
           </section>
        </>
    )
}

export default Projects
