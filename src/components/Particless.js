import React from 'react'
import Particles from 'react-particles-js';


const Particless = () => {
  
    return (
       
        <Particles
    params={{
	    "particles": {
			"canvasClassName":"example",
	        "number": {
	            "value": 80
	        },
	        "size": {
	            "value": 1
	        },
			"move":{
				"speed":2
			}
	    },
		"size": {
                        "value": 1.5,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
    );
  };

export default Particless
