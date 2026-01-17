import explore from "../api/data/exploreSection.json";

export default function ExploreSection() {
  return (
    <section className="explore-mansion">
      <div className="explore-wrapper">

        {/* LEFT FULL IMAGE */}
        <div className="explore-left">
          <img
            src={explore.leftImage.src}
            alt={explore.leftImage.alt}
          />
        </div>

        {/* RIGHT CONTENT AREA */}
        <div className="explore-right">

          {/* FLOATING FABRIC IMAGE */}
          <div className="fabric-float">
            <img
              src={explore.floatingImage.src}
              alt={explore.floatingImage.alt}
            />
          </div>

          <div className="explore-content">

            <span className="explore-eyebrow">
              {explore.eyebrow}
            </span>

            <h2 className="explore-title">
              {explore.title.main} <em>{explore.title.emphasis}</em><br />
              {explore.title.sub}
            </h2>

            {explore.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}

            <a
              href={explore.button.link}
              className="explore-link"
            >
              {explore.button.label} <span>→</span>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
