"use client";

import { useEffect, useState } from "react";

export default function ExploreSection() {
  const [explore, setExplore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-explore`)
      .then((res) => res.json())
      .then((data) => {
        setExplore(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Explore Section API Error:", err);
        setLoading(false);
      });
  }, []);

  /* ---------------- BOOTSTRAP LOADER ---------------- */
  if (loading) {
    return (
      <section
        className="explore-mansion d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
    );
  }

  if (!explore) return null;

  return (
    <section className="explore-mansion">
      <div className="explore-wrapper">
        {/* LEFT FULL IMAGE */}
        <div className="explore-left">
          <img
            src={explore.explore_left_image}
            alt={explore.explore_left_image_alt}
          />
        </div>

        {/* RIGHT CONTENT AREA */}
        <div className="explore-right">
          {/* FLOATING FABRIC IMAGE */}
          <div className="fabric-float">
            <img
              src={explore.explore_floating_image}
              alt={explore.explore_floating_image_alt}
            />
          </div>

          <div className="explore-content">
            <span className="explore-eyebrow">{explore.explore_eyebrow}</span>

            <h2 className="explore-title">
              {explore.explore_title_main}{" "}
              <em>{explore.explore_title_emphasis}</em>
              <br />
              {explore.explore_title_sub}
            </h2>

            {explore.explore_paragraphs.split("\n\n").map((text, i) => (
              <p key={i}>{text}</p>
            ))}

            <a href={explore.explore_button_link} className="explore-link">
              {explore.explore_button_label} <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
