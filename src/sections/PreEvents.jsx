import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { preEvents } from "../data/preEvents";
import "./PreEvents.css";

function PreEvents() {
  return (
    <section className="preevents-section" id="events">

      <div className="preevents-noise" />
      <div className="preevents-glow" />

      <div className="preevents-container">

        {/* SECTION LABEL */}

        <motion.div
          className="preevents-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>03</span>
          <i />
          <p>PRE-EVENTS</p>
        </motion.div>


        {/* HEADING */}

        <div className="preevents-heading">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            THE BUILD-UP
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            THE SIGNAL
            <span> STARTS EARLY.</span>
          </motion.h2>

        </div>


        {/* DESCRIPTION */}

        <motion.div
          className="preevents-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="intro-line" />

          <p>
            Before the main festival begins, the first signals
            are already moving. Pre-events bring challenges,
            creativity, competition, and collaboration to the
            forefront — setting the stage for Dhyuthi 7.0.
          </p>
        </motion.div>


        {/* EVENT TIMELINE */}

        <div className="preevents-list">

          <div className="timeline-line" />

          {preEvents.map((event, index) => (

            <motion.article
              className="preevent-item"
              key={event.number}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -35 : 35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                margin: "-70px",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
            >

              {/* NODE */}

              <div className="event-node">
                <span />
              </div>


              {/* NUMBER */}

              <div className="event-number">
                {event.number}
              </div>


              {/* CONTENT */}

              <div className="event-content">

                <div className="event-top">

                  <span className="event-type">
                    {event.type}
                  </span>

                  <span className="event-status">
                    {event.status}
                  </span>

                </div>

                <h3>{event.name}</h3>

                <p>{event.description}</p>

                <div className="event-action">
                  <span>DETAILS</span>

                  <ArrowUpRight size={15} />
                </div>

              </div>

            </motion.article>

          ))}

        </div>


        {/* BOTTOM */}

        <motion.div
          className="preevents-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >

          <div className="bottom-signal">
            <span />
            <span />
            <span />
          </div>

          <p>
            MORE SIGNALS ARE COMING
          </p>

          <strong>
            STAY CONNECTED.
          </strong>

        </motion.div>

      </div>

    </section>
  );
}

export default PreEvents;