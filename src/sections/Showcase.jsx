import "./Showcase.css";
import { ArrowUpRight } from "lucide-react";

const showcaseData = [
  {
    year: "2024",
    title: "DHYUTHI 5.0",
    description:
      "A glimpse into Dhyuthi 5.0 — a celebration of technology, creativity, learning and collaboration.",
    image: "public/showcase/dhyuthi3.webp",
  },
  {
    year: "2023",
    title: "DHYUTHI ",
    description:
      "Looking back at Dhyuthi and the experiences that continue to shape the Dhyuthi legacy.",
    image: "public/showcase/dhyuthi5.webp",
  },
];

function Showcase() {
  return (
    <section className="showcase" id="legacy">

      <div className="showcase-header">
        <div className="showcase-label">
          <span className="showcase-dot" />
          DHYUTHI 7.0 / LEGACY
        </div>

        <span className="showcase-count">
          02 EDITIONS
        </span>
      </div>

      <div className="showcase-intro">
        <p>BEFORE THIS</p>

        <h2>
          THE
          <br />
          JOURNEY
          <span>.</span>
        </h2>

        <p className="showcase-intro-text">
          Two editions. Countless moments.
          The legacy continues with Dhyuthi 7.0.
        </p>
      </div>

      <div className="showcase-grid">

        {showcaseData.map((item) => (
          <article className="showcase-card" key={item.year}>

            <div className="showcase-image-wrapper">

              <img
                src={item.image}
                alt={item.title}
                className="showcase-image"
              />

              <div className="showcase-overlay">
                <span>DHYUTHI {item.year === "2025" ? "6.0" : "5.0"}</span>
                <ArrowUpRight size={20} />
              </div>

            </div>

            <div className="showcase-card-info">

              <div>
                <span className="showcase-year">
                  {item.year}
                </span>

                <h3>{item.title}</h3>
              </div>

              <p>{item.description}</p>

            </div>

          </article>
        ))}

      </div>

      <div className="showcase-bottom">
        <span>06 — 05</span>

        <span className="showcase-line" />

        <span>THE LEGACY CONTINUES</span>
      </div>

    </section>
  );
}

export default Showcase;
