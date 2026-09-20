import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import "./Register.css";

function Register() {
  return (
    <section className="register" id="register">

      {/* TOP LABEL */}

      <div className="register-top">
        <span className="register-label">
          DHYUTHI 7.0 / JOIN US
        </span>

        <span className="register-index">
          07 — FINAL CALL
        </span>
      </div>


      {/* REGISTER CTA */}

      <div className="register-content">

        <div className="register-heading">
          <p>YOUR NEXT</p>

          <h2>
            MOVE<span>?</span>
          </h2>
        </div>

        <div className="register-side">

          <p className="register-description">
            Don't just watch the festival unfold.
            Be part of it.
          </p>

          <a
            href="#"
            className="register-button"
          >
            <span>REGISTER NOW</span>

            <span className="register-button-icon">
              <ArrowUpRight size={22} />
            </span>
          </a>

        </div>

      </div>


      {/* CONTACT */}

      <div className="contact-section">

        <div className="contact-heading">

          <span>HAVE QUESTIONS?</span>

          <h3>
            LET'S
            <br />
            CONNECT.
          </h3>

        </div>


        <div className="contact-links">

          {/* EMAIL */}

          <a
            href="mailto:ieesctsb@gmail.com"
            className="contact-link"
          >
            <span className="contact-icon">
              <Mail size={17} />
            </span>

            <span className="contact-main">
              <small>EMAIL</small>
              ieesctsb@gmail.com
            </span>

            <ArrowUpRight size={17} />
          </a>


          {/* ADITYA */}

          <a
            href="tel:+919061950389"
            className="contact-link"
          >
            <span className="contact-icon">
              <Phone size={17} />
            </span>

            <span className="contact-main">
              <small>ADITYA A S</small>
              +91 90619 50389
            </span>

            <ArrowUpRight size={17} />
          </a>


          {/* NIYATHA */}

          <a
            href="tel:+917909115492"
            className="contact-link"
          >
            <span className="contact-icon">
              <Phone size={17} />
            </span>

            <span className="contact-main">
              <small>NIYATHA SURESH</small>
              +91 79091 15492
            </span>

            <ArrowUpRight size={17} />
          </a>


          {/* LOCATION */}

          <a
            href="https://share.google/U9qaRtRqXMBNLkZWk"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <span className="contact-icon">
              <MapPin size={17} />
            </span>

            <span className="contact-main">
              <small>VENUE</small>
              Sree Chitra Thirunal College of Engineering
            </span>

            <ArrowUpRight size={17} />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Register;