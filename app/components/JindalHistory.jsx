import explore from "../api/data/jindalHistory.json";

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
            <h2 className="explore-title">
              {explore.title.main} <em>{explore.title.emphasis}</em><br />
              {explore.title.sub}
            </h2>

            {explore.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}


          </div>
        </div>

      </div>
    </section>
  );
}
