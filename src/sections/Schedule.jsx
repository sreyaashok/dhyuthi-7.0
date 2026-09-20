import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { scheduleDays } from "../data/schedule";
import "./Schedule.css";

function Schedule() {
  return (
    <section className="schedule-section" id="schedule">
      <div className="schedule-grid" />
      <div className="schedule-glow" />

      <div className="schedule-container">

        <motion.div
          className="schedule-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>05</span>
          <i />
          <p>SCHEDULE</p>
        </motion.div>

        <motion.div
          className="schedule-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>THE SYSTEM IS LIVE.</p>

          <h2>
            THREE DAYS.
            <span> ONE SIGNAL.</span>
          </h2>
        </motion.div>

        <motion.p
          className="schedule-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          From the first session to the final signal,
          follow everything happening across Dhyuthi 7.0.
        </motion.p>

        <div className="schedule-days">

          {scheduleDays.map((day, index) => (
            <motion.div
              className="schedule-day"
              key={day.day}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
            >

              <div className="day-header">
                <span className="day-number">
                  {day.day}
                </span>

                <div>
                  <small>{day.label}</small>
                  <h3>{day.date}</h3>
                </div>
              </div>

              <div className="day-events">

                {day.events.map((event) => (
                  <div
                    className="schedule-event"
                    key={`${day.day}-${event.time}-${event.title}`}
                  >

                    <div className="event-time">
                      {event.time}
                    </div>

                    <div className="event-marker">
                      <span />
                    </div>

                    <div className="schedule-event-content">

                      <div className="schedule-event-top">
                        <span>{event.type}</span>

                        <ArrowUpRight size={14} />
                      </div>

                      <h4>{event.title}</h4>

                    </div>

                  </div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

        <div className="schedule-footer">
          <span>PROGRAMME</span>
          <i />
          <strong>SUBJECT TO UPDATE</strong>
        </div>

      </div>
    </section>
  );
}

export default Schedule;