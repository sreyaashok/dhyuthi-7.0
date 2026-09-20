import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Countdown from "./Countdown";
import "./Hero.css";

const particles = Array.from({ length: 45 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() * 2.5 + 1,
  delay: Math.random() * 4,
  duration: Math.random() * 5 + 4,
}));

function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="hero" id="home">

      {/* =====================================
          BACKGROUND
      ===================================== */}

      <div className="hero-background">
        <div className="hero-grid" />

        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-glow hero-glow-three" />

        <div className="hero-noise" />

        {particles.map((particle) => (
          <span
            key={particle.id}
            className="hero-particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>


      {/* =====================================
          GIANT BACKGROUND 7
      ===================================== */}

      <motion.div
        className="hero-number"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: 0.8,
        }}
      >
        7
      </motion.div>


      {/* =====================================
          PORTAL / DHYUTHI CORE
      ===================================== */}

      <motion.div
        className="portal-wrapper"
        style={{
          x: mouse.x * 18,
          y: mouse.y * 12,
        }}
      >

        <div className="portal-system">

          {/* OUTER RING */}

          <motion.div
            className="portal-ring portal-ring-outer"
            initial={{
              opacity: 0,
              scale: 0.55,
              rotate: -20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 360,
            }}
            transition={{
              opacity: {
                duration: 1.2,
                delay: 1.2,
              },
              scale: {
                duration: 2.5,
                delay: 1.2,
                ease: [0.16, 1, 0.3, 1],
              },
              rotate: {
                duration: 45,
                delay: 3.2,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />

          {/* PURPLE RING */}

          <motion.div
            className="portal-ring portal-ring-purple"
            initial={{
              opacity: 0,
              scale: 0.45,
              rotate: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: -360,
            }}
            transition={{
              opacity: {
                duration: 1.2,
                delay: 1.55,
              },
              scale: {
                duration: 2.4,
                delay: 1.55,
                ease: [0.16, 1, 0.3, 1],
              },
              rotate: {
                duration: 34,
                delay: 3.4,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />

          {/* CYAN RING */}

          <motion.div
            className="portal-ring portal-ring-cyan"
            initial={{
              opacity: 0,
              scale: 0.35,
              rotate: -45,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 360,
            }}
            transition={{
              opacity: {
                duration: 1.2,
                delay: 1.9,
              },
              scale: {
                duration: 2.2,
                delay: 1.9,
                ease: [0.16, 1, 0.3, 1],
              },
              rotate: {
                duration: 25,
                delay: 3.6,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />

          {/* THIN INNER RING */}

          <motion.div
            className="portal-ring portal-ring-thin"
            initial={{
              opacity: 0,
              scale: 0.3,
              rotate: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: -360,
            }}
            transition={{
              opacity: {
                duration: 1,
                delay: 2.2,
              },
              scale: {
                duration: 2,
                delay: 2.2,
                ease: [0.16, 1, 0.3, 1],
              },
              rotate: {
                duration: 18,
                delay: 3.8,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />


          {/* INNER GEOMETRY */}

          <motion.div
            className="portal-inner"
            initial={{
              opacity: 0,
              scale: 0.5,
              rotate: -20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 360,
            }}
            transition={{
              opacity: {
                duration: 1.2,
                delay: 1.5,
              },
              scale: {
                duration: 2,
                delay: 1.5,
                ease: [0.16, 1, 0.3, 1],
              },
              rotate: {
                duration: 30,
                delay: 3.7,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            <span />
            <span />
            <span />
            <span />
          </motion.div>


          {/* ENERGY CORE */}

          <motion.div
            className="energy-core"
            initial={{
              opacity: 0,
              scale: 0.2,
            }}
            animate={{
              opacity: 1,
              scale: [0.8, 1.05, 1],
            }}
            transition={{
              opacity: {
                duration: 1.2,
                delay: 1.3,
              },
              scale: {
                duration: 2,
                delay: 1.3,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
          >
            <div className="core-glow" />
            <div className="core-circle" />
            <div className="core-dot" />
          </motion.div>


          {/* ORBIT DOTS */}

          <motion.span
            className="orbit-dot orbit-dot-one"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 1 }}
          />

          <motion.span
            className="orbit-dot orbit-dot-two"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 1 }}
          />

          <motion.span
            className="orbit-dot orbit-dot-three"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 1 }}
          />

          <motion.span
            className="orbit-dot orbit-dot-four"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          />


          {/* SCAN LINE */}

          <motion.div
            className="portal-scan"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              top: ["15%", "85%", "15%"],
            }}
            transition={{
              duration: 5,
              delay: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

        </div>
      </motion.div>


      {/* =====================================
          HERO CONTENT
      ===================================== */}

      <div className="hero-content">

        {/* EYEBROW */}

        <motion.div
          className="hero-eyebrow"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.7,
          }}
        >
          <span className="eyebrow-line" />
          IEEE SCT STUDENT BRANCH
        </motion.div>


        {/* STATUS */}

        <motion.div
          className="hero-status"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.9,
          }}
        >
          <span className="status-dot" />
          REGISTRATIONS OPEN
        </motion.div>


        {/* TITLE */}

        <motion.h1
          className="hero-title"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.95,
          }}
        >
          DHYUTHI
          <span>7.0</span>
        </motion.h1>


        {/* TAGLINE */}

        <motion.p
          className="hero-tagline"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 1.35,
          }}
        >
          Where technology meets imagination.
          <br />
          Where ideas become impact.
        </motion.p>


        {/* META */}

        <motion.div
          className="hero-meta"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1.55,
          }}
        >
          <span>2026</span>
          <span className="meta-divider" />
          <span>SCTCE</span>
          <span className="meta-divider" />
          <span>TRIVANDRUM</span>
        </motion.div>


        {/* BUTTONS */}

        <motion.div
          className="hero-actions"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1.7,
          }}
        >
          <a
            href="#register"
            className="hero-primary-button"
          >
            Register Now
            <ArrowUpRight size={17} />
          </a>

          <a
            href="#about"
            className="hero-secondary-button"
          >
            Explore Dhyuthi
            <ArrowRight size={17} />
          </a>
        </motion.div>


        {/* =====================================
            COUNTDOWN
        ===================================== */}

        <motion.div
          className="hero-countdown"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1.9,
          }}
        >

          {/* VISIBLE TEST COUNTDOWN */}

          <div
            style={{
              position: "relative",
              zIndex: 99999,
              display: "block",
              width: "100%",
              maxWidth: "500px",
              marginTop: "30px",
              padding: "20px",
              background: "#111827",
              border: "2px solid #00eaff",
              borderRadius: "8px",
              color: "white",
              textAlign: "center",
              boxSizing: "border-box",
              boxShadow: "0 0 30px rgba(0, 234, 255, 0.25)",
            }}
          >

            <div
              style={{
                color: "#00eaff",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "3px",
                marginBottom: "15px",
              }}
            >
              COUNTDOWN TO DHYUTHI 7.0
            </div>


            <div
              style={{
                fontSize: "40px",
                fontWeight: "700",
                color: "#ffffff",
                lineHeight: "1",
              }}
            >
              12 : 08 : 42 : 19
            </div>


            <div
              style={{
                marginTop: "10px",
                fontSize: "9px",
                letterSpacing: "2px",
                color: "#94a3b8",
              }}
            >
              DAYS &nbsp;&nbsp; HOURS &nbsp;&nbsp; MIN &nbsp;&nbsp; SEC
            </div>

          </div>

        </motion.div>

      </div>


      {/* =====================================
          EDITION
      ===================================== */}

      <motion.div
        className="hero-edition"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 1.4,
        }}
      >
        EDITION
        <strong>07</strong>
      </motion.div>


      {/* =====================================
          BOTTOM TEXT
      ===================================== */}

      <motion.div
        className="hero-bottom"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 2.1,
        }}
      >
        <span>TECHNOLOGY</span>
        <i>•</i>
        <span>CREATIVITY</span>
        <i>•</i>
        <span>COLLABORATION</span>
      </motion.div>


      {/* =====================================
          SCROLL INDICATOR
      ===================================== */}

      <motion.div
        className="hero-scroll"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 2.3,
        }}
      >
        <span>SCROLL TO EXPLORE</span>

        <div className="scroll-line">
          <div className="scroll-progress" />
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;