import React from "react";
import { Link } from "react-router-dom";
import "./styles/Contact.css";

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 form">
              <h2>Leave a message</h2>
              <div class="mb-3">
                <label for="name-input" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name-input"
                  placeholder="Name"
                />
                <label for="email-input" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email-input"
                  placeholder="name@example.com"
                />
                <label for="subject-input" class="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="subject-input"
                  placeholder="Subject"
                />
              </div>
              <div class="mb-3">
                <label for="message-input" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="message-input"
                  rows="4"
                  placeholder="Leave a message"
                ></textarea>
              </div>
              <button className="btn btn-secondary">Send</button>
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
                  <i class="fa-brands fa-github"></i>
                  <br />
                  GuitHub
                </Link>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/antonio-manno-0b0138236/"
                  role="button"
                  className="link-button"
                >
                  <i class="fa-brands fa-linkedin"></i>
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
                  <i class="fa-brands fa-google"></i>
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
