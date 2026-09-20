import "./Showcase.css";

function Showcase() {
  return (
    <section className="showcase-section" id="legacy">
      <div className="showcase-container">

        <div className="showcase-header">
          <span className="showcase-kicker">THE LEGACY</span>

          <h2>
            DHYUTHI
            <span> THROUGH THE YEARS.</span>
          </h2>

          <p>
            A journey shaped by technology, creativity,
            collaboration and the people who made it happen.
          </p>
        </div>

        <div className="showcase-grid">

          <div className="showcase-card">
            <div className="showcase-image">
              <img
                src="/showcase/dhyuthi3.webp "
                alt="Dhyuthi 2025"
              />

              <div className="showcase-overlay">
                <span>DHYUTHI 6.0</span>
                <span>2025</span>
              </div>
            </div>

            <div className="showcase-info">
              <span>06</span>
              <div>
                <h3>Dhyuthi 6.0</h3>
                <p>Innovation. Energy. Experience.</p>
              </div>
            </div>
          </div>

          <div className="showcase-card">
            <div className="showcase-image">
              <img
                src="/showcase/dhyuthi5.webp "
                alt="Dhyuthi 2024"
              />

              <div className="showcase-overlay">
                <span>DHYUTHI 5.0</span>
                <span>2024</span>
              </div>
            </div>

            <div className="showcase-info">
              <span>05</span>
              <div>
                <h3>Dhyuthi 5.0</h3>
                <p>Where ideas became reality.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Showcase;