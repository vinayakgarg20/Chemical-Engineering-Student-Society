import React from "react";

const ContactUs = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <h3>Get in touch</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input type={"text"} required id="name"></input>
        </div>
        <div>
          <label htmlFor="contact-no">Contact Number</label>
          <input type={"text"} required id="contact-no"></input>
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input type={"email"} required id="email"></input>
        </div>
        <div>
          <label htmlFor="description">Type Your message here</label>
          <textarea required rows={5} id="description"></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
