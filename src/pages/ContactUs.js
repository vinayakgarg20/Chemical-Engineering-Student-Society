import React from "react";

const ContactUs = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="getinTouch">
        <h3>Get in touch</h3>
        <p></p>
        <div></div>
      </div>
      <div className="Form">
        <form onSubmit={submitHandler}>
          <div className="Name">
            <div>
              <label htmlFor="Fname">First Name</label>
              <input type={"text"} required id="Fname"></input>
            </div>
            <div>
              <label htmlFor="Lname">Last Name</label>
              <input type={"text"} required id="Lname"></input>
            </div>
          </div>
          <div className="contact">
            <div>
              <label htmlFor="email">Email</label>
              <input type={"email"} required id="email"></input>
            </div>
            <div>
              <label htmlFor="contact-no">Phone Number</label>
              <input type={"text"} required id="contact-no"></input>
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
  );
};

export default ContactUs;
