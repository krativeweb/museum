"use client";

import { useEffect, useState } from "react";

export default function HorizontalGallery() {
  const [gallery, setGallery] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-horizontal-gallery`)
      .then((res) => res.json())
      .then((data) => {
        setGallery(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Horizontal Gallery API Error:", err);
        setLoading(false);
      });
  }, []);

  /* ---------------- BOOTSTRAP LOADER ---------------- */
  if (loading) {
    return (
      <section
        className="museum-garden-section d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
    );
  }

  if (!gallery) return null;

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
                    src={gallery.topMural_image}
                    alt={gallery.topMural_alt}
                    className="img-fluid bordered-img mural-img"
                  />
                </div>

                {/* Text block */}
                <div className="col-lg-4 text-block vision-text">
                  <h6>{gallery.vision_title}</h6>
                  <p>{gallery.vision_description}</p>
                  <span className="plus">+</span>
                </div>

                {/* India Map + Text */}
                <div className="col-lg-4 map-wrap text-center">
                  <img
                    src={gallery.indiaMap_image}
                    alt=""
                    className="img-fluid map-img"
                  />
                  <div className="map-text">
                    <h6>{gallery.indiaMap_title}</h6>
                    <p>{gallery.indiaMap_description}</p>
                  </div>
                </div>
              </div>

              {/* MIDDLE ROW */}
              <div className="row align-items-center mb-5">
                {/* Bottom Left Framed Art */}
                <div className="col-lg-3 framed-wrap">
                  <img
                    src={gallery.framedArt_image}
                    alt={gallery.framedArt_alt}
                    className="img-fluid bordered-img framed-img"
                  />
                </div>

                {/* Center Hero Image */}
                <div className="col-lg-8 center-wrap">
                  <div className="center-hero">
                    <img
                      src={gallery.centerHero_image}
                      alt=""
                      className="img-fluid"
                    />

                    <div className="hero-overlay">
                      <h2>
                        {[
                          gallery.centerHero_title1,
                          gallery.centerHero_title2,
                        ].map((line, i) => (
                          <span key={i}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </h2>

                      <p>
                        {gallery.centerHero_description
                          .split("\n\n")
                          .map((para, i) => (
                            <span key={i}>
                              {para}
                              <br />
                              <br />
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
              src={gallery.statue_image}
              alt={gallery.statue_alt}
              className="statue-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
