import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">

          <div className="footer-ieee">
            IEEE
          </div>

          <div className="footer-divider"></div>

          <div className="footer-branch">
            SCT STUDENT BRANCH
          </div>

          <h2>
            DHYUTHI
            <span>7.0</span>
          </h2>

          <p>
            Where ideas meet possibility.
          </p>

        </div>


        <div className="footer-column">

          <span className="footer-column-title">
            EXPLORE
          </span>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#tracks">Tracks</a>
          <a href="#schedule">Schedule</a>
          <a href="#legacy">Legacy</a>

        </div>


        <div className="footer-column">

          <span className="footer-column-title">
            CONNECT
          </span>

          <a href="#register">
            Register
          </a>

          <a href="mailto:ieesctsb@gmail.com">
            Email
          </a>

          <a
            href="https://share.google/U9qaRtRqXMBNLkZWk"
            target="_blank"
            rel="noreferrer"
          >
            Location
            <ArrowUpRight size={13} />
          </a>

        </div>

      </div>


      <div className="footer-contact">

        <a href="mailto:ieesctsb@gmail.com">
          <Mail size={15} />
          ieesctsb@gmail.com
        </a>

        <a href="tel:+919061950389">
          ADITYA A S&nbsp;&nbsp; +91 90619 50389
        </a>

        <a href="tel:+917909115492">
          NIYATHA SURESH&nbsp;&nbsp; +91 79091 15492
        </a>

        <a
          href="https://share.google/U9qaRtRqXMBNLkZWk"
          target="_blank"
          rel="noreferrer"
        >
          <MapPin size={15} />
          PAPPANAMCODE, THIRUVANANTHAPURAM
        </a>

      </div>


      <div className="footer-bottom">

        <span>
          © 2026 IEEE SCT STUDENT BRANCH
        </span>

        <span className="footer-line"></span>

        <span>
          DHYUTHI 7.0
        </span>

        <a
          href="#home"
          className="back-top"
        >
          BACK TO TOP
          <ArrowUpRight size={14} />
        </a>

      </div>

    </footer>
  );
}

export default Footer;