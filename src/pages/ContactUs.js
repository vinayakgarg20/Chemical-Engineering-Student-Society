import React from "react";
import "./Contact.css";

const ContactUs = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="Container">
        
          <div className="getinTouch">
          <h3>Get in touch</h3>
          <p>The department of Chemical Engineering at IITR offers a state of the art curriculum for its students at all levels to prepare them to become leaders of tomorrow who can transform the chemical industries to solve the socio-economic problems in a sustainable manner.</p>
          <div className="Sociallinks">
            <p>	ch.iitr.ac.in</p>
            <p>  +91 95872 00161</p>
            <p>   	iitr.ac.in</p>
            <p>   Roorkee, Uttarakhand, India</p>
            </div>

          
        
          </div>
        
        <div className="Form">
        <form onSubmit={submitHandler}>
          <div className="Name">
            <div className="first">
              <label htmlFor="Fname">First Name</label>
              <div className="search">
                
                  <input type={"text"} required id="Fname"></input>

                
              </div>
              
              
            </div>
            <div className="last">
              <label htmlFor="Lname">Last Name</label>
              <div className="search">
                
                  <input type={"text"} required id="Lname"></input>

                
              </div>
              
              
            </div>
          </div>
          <div className="contact">
            <div className="emailchess">
              <label htmlFor="email">Email</label>
              <div className="search">
                
                  <input type={"text"} required id="email"></input>
                
              
              </div>
            </div>
            <div className="contactchess">
              <label htmlFor="contact-no">Phone Number</label>
              <div className="search">
                
                  <input type={"text"} required id="contact-no"></input>
                
                  
              </div>   
              
            </div>
          </div>
          <div className="message">
            <label htmlFor="description">Message</label>
            <textarea
              placeholder="Write your message here..."
              required
              rows={5}
              id="description"
            ></textarea>
          </div>
          <div className="button">
            <button>Submit</button>
          </div>
        </form>
      </div>
        
      </div>
      
      
      
    </div>
  );
};

export default ContactUs;
