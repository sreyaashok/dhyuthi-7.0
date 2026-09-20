import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { tracks } from "../data/tracks";
import "./Tracks.css";

function Tracks() {
  return (
    <section className="tracks-section" id="tracks">
      <div className="tracks-grid" />

      <div className="tracks-container">

        <motion.div
          className="tracks-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>04</span>
          <i />
          <p>TRACKS</p>
        </motion.div>

        <motion.div
          className="tracks-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>FOUR DIRECTIONS.</p>

          <h2>
            ONE <span>FUTURE.</span>
          </h2>
        </motion.div>

        <motion.p
          className="tracks-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Four domains. Four perspectives. One platform
          for ideas that challenge what technology can become.
        </motion.p>

        <div className="tracks-list">

          {tracks.map((track, index) => (
            <motion.article
              className="track-card"
              key={track.name}
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
            >

              <div className="track-number">
                {track.number}
              </div>

              <div className="track-main">

                <div className="track-title-row">
                  <h3>{track.name}</h3>

                  <motion.div
                    className="track-arrow"
                    whileHover={{
                      rotate: 45,
                    }}
                  >
                    <ArrowUpRight size={20} />
                  </motion.div>
                </div>

                <p className="track-tagline">
                  {track.tagline}
                </p>

                <p className="track-description">
                  {track.description}
                </p>

                <div className="track-tech">
                  {track.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

              </div>

              <div className="track-index">
                0{index + 1}
              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Tracks;