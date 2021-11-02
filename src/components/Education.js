import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Education() {

    AOS.init()

    const eduGIF = useRef(null);

    useEffect(() => {
      lottie.loadAnimation({
        container: eduGIF.current,
        render: "svg",
        loop: true,
        autoplay: true,
        animationData: require("./images/30304-back-to-school.json")
      });
      return () => {
        lottie.destroy();
      };
  
    }, []);

    return (
        <>
           <section className="about">
           <div className="education-container container d-flex flex-column align-items-center justify-content-center">
                <div className="mt-5 row d-flex flex-row align-items-center justify-content-center w-100">
                <h1 className="heading-edu mb-4 d-flex align-items-center justify-content-center" data-aos="fade-down" >My Education <i class="fas fa-user-graduate"></i></h1>
                    <div className="col-12 col-sm-8 p-0 h-100">
                        <div className="edu1 row w-100">
                            <div class="col-12 mb-4">
                                <h4 data-aos="fade-right">Btech | CSE</h4>
                                <h4 className="font-weight">Dehradun Institute Of Technology, Dehradun</h4>
                                <h6 className="font-weight"><i class="mr-2 fas fa-calendar-week"></i>2018 - Present</h6>
                                <p class="mt-3"></p>
                            </div>
                        </div>
                        <div className="edu1 row w-100">
                        <div class="col-12">
                            <h4 data-aos="fade-right">Intermediate | PCM</h4>
                            <h4 className="font-weight">Glenhill School, Varanasi</h4>
                            <h6 className="font-weight"><i class="mr-2 fas fa-calendar-week"></i>2018</h6>
                            <p class="mt-4"></p>
                        </div>
                        </div>
                        <div className="edu1 row w-100">
                        <div class="col-12">
                            <h4 data-aos="fade-right">High School</h4>
                            <h4 className="font-weight">Glenhill School</h4>
                            <h6 className="font-weight"><i class="mr-2 fas fa-calendar-week"></i>2016</h6>
                            <p class="mt-4"></p>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 mt-1 col-sm-4 p-0 h-100 d-flex justify-content-center">
                      <div className="gif" width="90%" ref={eduGIF}></div>
                    </div>
                </div>
            </div>
           </section>
        </>
    )
}

export default Education
