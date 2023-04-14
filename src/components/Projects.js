import React, { useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import lottie from "lottie-web";
import hotelimg from "./images/Screenshot 2021-10-21 at 4.38.35 PM.png"
import chatimg from "./images/chatimg.png"
import img3d from "./images/3D.jpg"
import shoesEcommerceImg from "./images/shoesEcommerceImg.webp"
import dashimg from "./images/3556960.jpg"

function Projects() {
    
    AOS.init()

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
                                        <img className="align-self-center" width="90%" src={shoesEcommerceImg} alt="" />
                                    </div>
                                    <div class="col-12 col-sm-6 mt-2 mt-sm-0 d-flex flex-column align-item-center justify-content-center">
                                    <h5 class="w-100" data-aos="fade-down" >Shoes E-commerce Website
                                        <div className="project-links">
                                        <a target="_blank" rel="noreferrer" href="https://github.com/mayanksinghms777/shoes-store-back"><i class="ml-4 mr-1 fab fa-github"></i></a>
                                        <a target="_blank" rel="noreferrer" href="https://shoe-store-front.vercel.app/"><i class="ml-2 mr-1 fa fa-external-link-alt"></i></a>
                                        </div>
                                    </h5>
                                    <p>A Shoes E-commerce FullStack website made with payment integration, api calls and many more functionalities. </p>
                                    <div><span class=" badge">Next.js</span>
                                    <span class=" badge">React.js</span>
                                    <span class=" badge">Redux</span>
                                    <span class=" badge">Stripe</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className=" row p-0 m-0 mt-5 w-100 justify-content-center">
                            <div class="p-2 col-12 d-flex flex-column align-items-center justify-content-center">
                                <div className="row w-100">
                                    <div className="col-12 col-sm-6 d-flex flex-row align-item-center justify-content-center">
                                        <img className="align-self-center" width="90%" src={img3d} alt="" />
                                    </div>
                                    <div class="col-12 col-sm-6 mt-2 mt-sm-0 d-flex flex-column align-item-center justify-content-center">
                                    <h5 class="w-100" data-aos="fade-down" >3D Web Portfolio
                                        <div className="project-links">
                                        <a target="_blank" rel="noreferrer" href="https://https://github.com/mayanksinghms777/3D-portfolio-mks"><i class="ml-4 mr-1 fab fa-github"></i></a>
                                        <a target="_blank" rel="noreferrer" href="https://mayanksinghms777.github.io/3D-portfolio-mks/"><i class="ml-2 mr-1 fa fa-external-link-alt"></i></a>
                                        </div>
                                    </h5>
                                    <p>A 3D visual interface personal portfolio website from scratch. Open it on desktop.</p>
                                    <div><span class=" badge">Three.js</span>
                                    <span class=" badge">React.js</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" row p-0 m-0 mt-5 w-100 justify-content-center">
                            <div class="p-2 col-12 d-flex flex-column align-items-center justify-content-center">
                                <div className="row w-100">
                                    <div className="col-12 col-sm-6 d-flex flex-row align-item-center justify-content-center">
                                        <img className="align-self-center" width="90%" src={hotelimg} alt="" />
                                    </div>
                                    <div class="col-12 col-sm-6 mt-2 mt-sm-0 d-flex flex-column align-item-center justify-content-center">
                                    <h5 class="w-100" data-aos="fade-down" >Hotel Managment System
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
                                    <h5 class="w-100" data-aos="fade-up" >Company Dashboard 
                                    <div className="project-links">
                                        <a target="_blank" rel="noreferrer" href="https://github.com/mayanksinghms777/mks-dashboard"><i class="ml-4 mr-1 fab fa-github"></i></a>
                                        <a target="_blank" rel="noreferrer" href=" https://mks-dashboard.herokuapp.com/"><i class="ml-2 mr-1 fa fa-external-link-alt"></i></a>
                                        </div>
                                    </h5>
                                    <p data-aos="fade-down-left">A software to manage Comapny's Employees using Dashboard which is created by mern stack.</p>
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
                                        <img className="align-self-center" width="90%" height="80%" src={chatimg} alt="" />
                                    </div>
                                    <div class="col-12 col-sm-6 mt-2 mt-sm-0 d-flex flex-column align-item-center justify-content-center">
                                    <h5 class="w-100" data-aos="fade-up" >RealTime Chat App
                                    <div className="project-links">
                                        <a target="_blank" rel="noreferrer" href="https://github.com/mayanksinghms777/ChatApp"><i class="ml-4 mr-1 fab fa-github"></i></a>
                                        <a target="_blank" rel="noreferrer" href="https://github.com/mayanksinghms777/ChatApp"><i class="ml-2 mr-1 fa fa-external-link-alt"></i></a>
                                    </div>
                                    </h5>
                                    <p data-aos="fade-down-left">This is realtime chat app using powerfull tool i.e socket.io and javascript.</p>
                                    <div><span class="badge">Socket.io</span>
                                    <span class="badge">Javascript</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="p-0 mt-5 col-12 col-sm-8 d-flex flex-column align-items-center justify-content-center">
                            <div className="row mail">
                                <a className="button-contact btn m-0 mb-5" target="__blank__" href="https://github.com/mayanksinghms777?tab=repositories"><b>More Projects &nbsp;<span><i class="ml-4 mr-1 fab fa-github"></i></span></b></a>
                            </div>
                        </div>
            </div>
           </section>
        </>
    )
}

export default Projects
