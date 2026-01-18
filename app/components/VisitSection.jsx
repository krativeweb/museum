"use client";

import { useEffect, useState } from "react";

/* ---------------- STATIC FOOTER NAV ---------------- */
const FOOTER_NAV = {
  navLeft: ["Home", "About", "History", "Collection", "Tour Policies"],
  navRight: ["Virtual Tour", "Plan a Visit", "Book Shop", "Contact Us"],
};

export default function VisitSection() {
  const [visit, setVisit] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-visit`)
      .then((res) => res.json())
      .then((data) => {
        setVisit({
          ...data,

          /* footer: static nav + api copyright */
          footer: {
            navLeft: FOOTER_NAV.navLeft,
            navRight: FOOTER_NAV.navRight,
            copyright: data.visit_footer_copyright,
          },
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Visit Section API Error:", err);
        setLoading(false);
      });
  }, []);

  /* ---------------- BOOTSTRAP LOADER ---------------- */
  if (loading) {
    return (
      <section
        className="visit-exact d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
    );
  }

  if (!visit) return null;

  return (
    <section className="visit-exact">
      <div className="visit-layout">
        {/* LEFT IMAGE */}
        <div className="visit-image d-flex">
          <img src={visit.visit_hero_image} alt={visit.visit_hero_image_alt} />

          <div className="visit-image-text">
            <span>{visit.visit_eyebrow}</span>

            <h2>
              {[visit.visit_title_line1, visit.visit_title_line2].map(
                (line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ),
              )}
            </h2>

            <a href={visit.visit_link_href}>
              {visit.visit_link_label} <i>→</i>
            </a>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="visit-panel">
          <div className="panel-block">
            <label>{visit.visit_address_label}</label>
            <p className="panel-big">
              {visit.visit_address_lines.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>

          <div className="panel-block">
            <label>{visit.visit_phone_label}</label>
            <p className="panel-big">{visit.visit_phone_value}</p>
          </div>

          <div className="panel-block">
            <label>{visit.visit_tours_label}</label>
            <p className="panel-link">
              <a href={visit.visit_tours_href}>{visit.visit_tours_text} →</a>
            </p>
          </div>

          {/* FOOTER (STATIC NAV + API COPYRIGHT) */}
          <div className="panel-footer">
            <div className="row">
              <div className="col-md-6">
                <div className="footer-cols">
                  <ul>
                    {visit.footer.navLeft.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <ul>
                    {visit.footer.navRight.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <div className="panel-copy">{visit.footer.copyright}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
