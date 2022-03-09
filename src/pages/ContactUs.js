import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { useRef } from "react";

const ContactUs = () => {
  const form = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_3u82gxo",
        "template_qyvr9bb",
        form.current,
        "fwpp4k-kljuwfDYiq"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank You, We'll contact you shortly!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      );
  };
  return (
    <div className="Container">
      <div className="getinTouch">
        <h3>Get in touch.</h3>
        <p>
          The department of Chemical Engineering at IITR offers a state of the
          art curriculum for its students at all levels to prepare them to
          become leaders of tomorrow who can transform the chemical industries
          to solve the socio-economic problems in a sustainable manner.
        </p>
        <div className="Sociallinks">
          <p> ch.iitr.ac.in</p>
          <p> +91 95872 00161</p>
          <p> iitr.ac.in</p>
          <p> Roorkee, Uttarakhand, India</p>
        </div>
      </div>

      <div className="Form">
        <form ref={form} onSubmit={submitHandler}>
          <div className="Name">
            <div className="first">
              <label htmlFor="Fname">First Name*</label>
              <div className="search">
                <input type={"text"} name="f_name" required id="Fname"></input>
              </div>
            </div>
            <div className="last">
              <label htmlFor="Lname">Last Name</label>
              <div className="search">
                <input type={"text"} name="l_name" id="Lname"></input>
              </div>
            </div>
          </div>
          <div className="contact">
            <div className="emailchess">
              <label htmlFor="email">Email*</label>
              <div className="search">
                <input type={"text"} name="email" required id="email"></input>
              </div>
            </div>
            <div className="contactchess">
              <label htmlFor="contact-no">Phone Number</label>
              <div className="search">
                <input
                  type={"text"}
                  name="contact_number"
                  id="contact-no"
                ></input>
              </div>
            </div>
          </div>
          <div className="message">
            <label htmlFor="description">Message*</label>
            <div className="search">
              <textarea
                name="message"
                placeholder="Write your message here..."
                required
                id="description"
              ></textarea>
            </div>
          </div>

          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
