import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-grid" />

      <div className="about-glow" />

      <div className="about-container">

        {/* Section label */}
        <motion.div
          className="about-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>02</span>
          <i />
          <p>ABOUT DHYUTHI 7.0</p>
        </motion.div>


        {/* Main heading */}
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="about-small-title">
            THE NEXT SIGNAL
          </p>

          <h2>
            STARTS
            <span> HERE.</span>
          </h2>
        </motion.div>


        {/* Description */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <div className="about-line" />

          <p>
            <strong>Dhyuthi 7.0</strong>, the flagship
            technical festival of IEEE SCT Student
            Branch, brings together ideas, technology,
            and innovation under one platform. Through
            competitions, pre-events, technical
            workshops, and interactive experiences,
            participants get the opportunity to explore
            emerging technologies, build new skills,
            collaborate with fellow innovators, and turn
            ideas into action.
          </p>

          <p className="about-final">
            A festival to <span>discover.</span>{" "}
            A platform to <span>create.</span>{" "}
            A community to <span>innovate.</span>
          </p>
        </motion.div>


        {/* Stats */}
        <div className="about-stats">

          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
          >
            <span className="stat-number">
              07
            </span>

            <span className="stat-label">
              EDITION
            </span>

            <span className="stat-description">
              A growing legacy
            </span>
          </motion.div>


          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
          >
            <span className="stat-number">
              2026
            </span>

            <span className="stat-label">
              YEAR
            </span>

            <span className="stat-description">
              The next chapter
            </span>
          </motion.div>


          <motion.div
            className="stat-card stat-card-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.6,
            }}
          >
            <span className="stat-number">
              ∞
            </span>

            <span className="stat-label">
              POSSIBILITIES
            </span>

            <span className="stat-description">
              Ideas without limits
            </span>
          </motion.div>

        </div>


        {/* Bottom phrase */}
        <motion.div
          className="about-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.7,
          }}
        >
          <span>DISCOVER</span>
          <i>•</i>
          <span>CREATE</span>
          <i>•</i>
          <span>INNOVATE</span>
        </motion.div>

      </div>
    </section>
  );
}

export default About;