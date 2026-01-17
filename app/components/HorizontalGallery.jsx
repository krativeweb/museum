import gallery from "../api/data/horizontalGallery.json";

export default function HorizontalGallery() {
  return (
    <section className="museum-garden-section">
      <div className="container-fluid px-0">
        <div className="row g-0">

          {/* LEFT RED STRIP */}
          <div className="col-lg-1 red-strip"></div>

          {/* MAIN CONTENT */}
          <div className="col-lg-10">
            <div className="container-fluid">

              {/* TOP ROW */}
              <div className="row align-items-start">

                {/* Image 1 – Top Left Mural */}
                <div className="col-lg-4 mural-wrap">
                  <img
                    src={gallery.topMural.image}
                    alt={gallery.topMural.alt}
                    className="img-fluid bordered-img mural-img"
                  />
                </div>

                {/* Text block */}
                <div className="col-lg-4 text-block vision-text">
                  <h6>{gallery.visionBlock.title}</h6>
                  <p>{gallery.visionBlock.description}</p>
                  <span className="plus">+</span>
                </div>

                {/* India Map + Text */}
                <div className="col-lg-4 map-wrap text-center">
                  <img
                    src={gallery.indiaMap.image}
                    alt=""
                    className="img-fluid map-img"
                  />
                  <div className="map-text">
                    <h6>{gallery.indiaMap.title}</h6>
                    <p>{gallery.indiaMap.description}</p>
                  </div>
                </div>

              </div>

              {/* MIDDLE ROW */}
              <div className="row align-items-center mb-5">

                {/* Bottom Left Framed Art */}
                <div className="col-lg-3 framed-wrap">
                  <img
                    src={gallery.framedArt.image}
                    alt={gallery.framedArt.alt}
                    className="img-fluid bordered-img framed-img"
                  />
                </div>

                {/* Center Hero Image */}
                <div className="col-lg-8 center-wrap">
                  <div className="center-hero">
                    <img
                      src={gallery.centerHero.image}
                      alt=""
                      className="img-fluid"
                    />

                    <div className="hero-overlay">
                      <h2>
                        {gallery.centerHero.titleLines.map((line, i) => (
                          <span key={i}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </h2>

                      <p>
                        {gallery.centerHero.description
                          .split("\n\n")
                          .map((para, i) => (
                            <span key={i}>
                              {para}
                              <br /><br />
                            </span>
                          ))}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT STATUE */}
          <div className="col-lg-1 statue-col statue-wrap">
            <img
              src={gallery.statue.image}
              alt={gallery.statue.alt}
              className="statue-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
