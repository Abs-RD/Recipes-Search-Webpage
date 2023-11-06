import React, { useState } from "react";
import "./contactUs.css";

const FORM_ENDPOINT = ""; // TODO - filled at the 2nd return section

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setTimeout(() => {
        setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
        <>
        <br/>
            <div style={{fontWeight: 'bold'}}>
            <div className="text-2xl">Thank you!</div><br/>
            <div className="text-md">We'll be in touch soon.</div>
            </div>
        </>
        );
    }

  return (
    <div className="container-form-container">
      <div className="form-container">
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
            <div className="form-header" style={{textAlign: 'center'}}>
                <h1>Contact Us</h1>
                <p>
                Got a question? We'd love to hear from you.<br/>
                Send a message and we'll respond as soon as possible
                </p>
            </div><br/><br/>

            <div className="form-row">
                <div className="col">
                    <label>First Name:</label>
                        <input type="firstname" placeholder="John" className="form-control"/>
                </div>

                <div className="col">
                    <label>Last Name:</label>
                        <input type="lastname" placeholder="Doe" className="form-control"/>
                </div>
            </div>

            <div className="form-row">
                <div className="col" style={{ marginTop: "3rem" }}>
                    <label>Email Address:</label>
                        <input type="email" placeholder="example@email.com" className="form-control"/>
                </div>

                <div className="col" style={{ marginLeft: "1rem", marginTop: "3rem" }}>
                    <label>Confirm Email:</label>
                        <input type="confirmemail" placeholder="example@email.com" className="form-control"/>
                </div>
            </div>

            <div className="form-row">
                <div className="col" style={{ marginTop: "3rem" }}>
                    <label>Day Contact:</label>
                        <input type="daycontact" placeholder="01234567890" className="form-control"/>
                </div>

                <div className="col" style={{ marginLeft: "1rem", marginTop: "2rem" }}>
                    <label>Mobile Contact:</label>
                        <input type="mobilecontact" placeholder="+44 1234567890" className="form-control"/>
                </div>
            </div>

            <div className="form-row" style={{ marginTop: "4rem" }}>
                <label>Your message:</label>
                    <textarea
                    placeholder="Your message"
                    name="message"
                    className="form-control"
                    rows={6}
                    required
                    />
            </div>
            <br/>
            <br/>

            <div className="form-row">
                <button type="submit" className="btn-submit">
                Submit
                </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
