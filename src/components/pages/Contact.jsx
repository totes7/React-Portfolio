import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { send } from "emailjs-com";
import "./styles/Contact.css";

function Contact() {
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    send("service_8brub0n", "sample1", toSend, "w3PTPQHEg7TjRVSxm")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    setToSend({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    alert("Message sent successfully!");
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 form">
              <h2>Leave a message</h2>
              <form id="myForm" className="mb-3">
                <label htmlFor="name-input" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name-input"
                  placeholder="Name"
                  value={toSend.name}
                  onChange={handleChange}
                />
                <label htmlFor="email-input" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email-input"
                  placeholder="name@example.com"
                  value={toSend.email}
                  onChange={handleChange}
                />
                <label htmlFor="subject-input" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  id="subject-input"
                  placeholder="Subject"
                  value={toSend.subject}
                  onChange={handleChange}
                />
                <label htmlFor="message-input" className="form-label">
                  Message
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  id="message-input"
                  rows="4"
                  placeholder="Leave a message"
                  value={toSend.message}
                  onChange={handleChange}
                ></textarea>
              </form>
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-secondary"
              >
                Send
              </button>
            </div>
            <div className="col-lg-6 contact-links">
              <h2>Contacts</h2>
              <div className="btn-section">
                <Link
                  target="_blank"
                  to="https://github.com/totes7?tab=repositories"
                  role="button"
                  className="link-button"
                >
                  <i className="fa-brands fa-github"></i>
                  <br />
                  GuitHub
                </Link>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/antonio-manno-0b0138236/"
                  role="button"
                  className="link-button"
                >
                  <i className="fa-brands fa-linkedin"></i>
                  <br />
                  LinkedIn
                </Link>
                <Link
                  target="_blank"
                  to="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=antonio.manno.7@gmail.com&tf=1
                "
                  role="button"
                  className="link-button"
                >
                  <i className="fa-solid fa-envelope"></i>
                  <br />
                  Gmail
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
