import React from 'react'

function Contact() {
    return (
        <>
             <section className="about">
                <div className="expriences-container container d-flex flex-column align-items-center justify-content-center">
                    <div className="row p-0 m-0 w-100 d-flex flex-row align-items-start justify-content-center">
                        <div className="p-0 col-12 col-sm-8 d-flex flex-column align-items-center justify-content-center">
                        <h1 className="mb-4">Contact Me <i class="fas fa-id-card-alt"></i></h1>
                        <div className="row w-100">
                        <form>
                        <input class="mb-3 mt-4 form-control form-control-lg" type="text" placeholder="Your Name" aria-label=".form-control-lg example"></input>

                        <input class=" mb-3 form-control form-control-lg" type="text" placeholder="Email" aria-label=".form-control-lg example"></input>

                        <input class=" mb-3 form-control form-control-lg" type="text" placeholder="Phone Number" aria-label=".form-control-lg example"></input>

                        <textarea class="form-control mb-3 form-control form-control-lg" id="exampleFormControlTextarea1" type="text"  aria-label=".form-control-lg example" placeholder="Tell us about your project"></textarea>

                        <div className="form-group text-left">
                            <div className="iosheading header-section gs_reveal ipsType_center">
                            <p>How did you reach about me?</p>
                            <div className="">
                                
                                <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off"/>
                                <label class="btn btn-outline-primary mr-2" for="btn-check-outlined"> Google</label>
                      
                                
                                <input type="checkbox" class="btn-check" id="btn-check-2-outlined" autocomplete="off"/>
                                <label class="btn btn-outline-primary m-2" for="btn-check-outlined">Social Media</label>
                               
                                
                                <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off"/>
                                <label class="btn btn-outline-primary m-2" for="btn-check-outlined"> Friend</label>
                             
                               
                                <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off"/>
                                <label class="btn btn-outline-primary mr-2" for="btn-check-outlined"> Tech Event</label>
                            
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary ml-4  mb-3 p-2 mt-4">Submit</button>
                    </form>
                        </div>
                        </div>
                        <div className="p-0 mt-1 col-12 col-sm-8 d-flex flex-column align-items-center justify-content-center">
                        <h1 className="mb-4 ">OR</h1>
                            <div className="row mail">
                                <a className="button-contact btn m-0 mb-5" target="__blank__" href="mailto:mayanksinghms777@gmail.com" ><b>Mail me</b></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
