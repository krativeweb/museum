"use client";

import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function AboutPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [staff, setStaff] = useState([]);
  const [staffLoading, setStaffLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/about-content`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("About API Error:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/staff`)
      .then((res) => res.json())
      .then((data) => {
        // Reverse to match original visual order
        setStaff(data.reverse());
        setStaffLoading(false);
      })
      .catch((err) => {
        console.error("Staff API Error:", err);
        setStaffLoading(false);
      });
  }, []);

  /* 🔄 Loader */
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="spinner-border text-dark" role="status" />
      </div>
    );
  }

  return (
    <main className="about-page">
      <ScrollToTop />

      {/* HERO SECTION */}
      <section className="about-wrapper">
        <div className="about-left-bg" />

        <div className="about-right-bg">
          <img src={data.right_bg_image} alt="About" />
        </div>

        <header className="about-center-content">
          <span className="about-tag">{data.small_title}</span>

          <h1
            className="about-title"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.main_title),
            }}
          />
        </header>

        <section
          className="about-mission"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.mission_description),
          }}
        />
      </section>

      {/* SECOND SECTION */}
      <section className="about-second refined">
        <div className="about-second-left">
          <div className="about-image-frame">
            <img src={data.about_left_image} alt="Leadership" />
          </div>
        </div>

        <div className="about-second-right">
          <div className="about-second-content">
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.about_second_right_heading),
              }}
            />

            <h4>{data.about_second_right_sub_heading}</h4>

            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.about_second_right_description),
              }}
            />
          </div>
        </div>
      </section>

      {/* EDITORIAL NAV */}
      <section className="editorial-nav">
        {/* ROW 1 */}
        <div className="editorial-row row-1">
          <span className="editorial-kicker">
            {data.editorial_tabs[0]?.small_title}
          </span>

          <h2 className="editorial-heading">
            {data.editorial_tabs[0]?.main_title}
          </h2>

          <div className="editorial-image img-right">
            <img
              src={data.editorial_tabs[0]?.image}
              alt={data.editorial_tabs[0]?.main_title}
            />
          </div>

          <div className="editorial-arrow">
            <span>→</span>
          </div>
        </div>

        <div className="editorial-line" />

        {/* ROW 2 */}
        <div className="editorial-row row-2">
          <span className="editorial-kicker center">
            {data.editorial_tabs[1]?.small_title}
          </span>

          <h2 className="editorial-heading center">
            {data.editorial_tabs[1]?.main_title}
          </h2>

          <div className="editorial-image img-left">
            <img
              src={data.editorial_tabs[1]?.image}
              alt={data.editorial_tabs[1]?.main_title}
            />
          </div>

          <div className="editorial-arrow">
            <span>→</span>
          </div>
        </div>

        <div className="editorial-line" />

        {/* ROW 3 */}
        <div className="editorial-row row-3">
          <span className="editorial-kicker right">
            {data.editorial_tabs[2]?.small_title}
          </span>

          <h2 className="editorial-heading right">
            {data.editorial_tabs[2]?.main_title}
          </h2>

          <div className="editorial-image img-right">
            <img
              src={data.editorial_tabs[2]?.image}
              alt={data.editorial_tabs[2]?.main_title}
            />
          </div>

          {/* 👇 THIS WAS MISSED BEFORE — NOW INCLUDED */}
          <div className="editorial-image img-bottom">
            <img src={data.editorial_end_img} alt="Editorial bottom image" />
          </div>

          <div className="editorial-arrow">
            <span>→</span>
          </div>
        </div>
      </section>

      {/* FUTURE SECTION */}
      <section className="future-section">
        <img
          src={data.future_bg_image_1}
          className="manuscript manuscript-top"
          alt=""
        />
        <img
          src={data.future_bg_image_2}
          className="manuscript manuscript-bottom"
          alt=""
        />

        <div className="future-content-wrap">
          <h2
            className="future-title"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.feature_content_title),
            }}
          />

          <div
            className="future-text"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.feature_description),
            }}
          />
        </div>

        <span className="future-divider"></span>
      </section>

      {/* EDUCATION */}
      <section className="education-section">
        {/* LEFT VISUAL */}
        <div className="education-visual">
          {/* COLOR / TEXTURE BACKGROUNDS */}
          <div
            className="education-bg bg-rust"
            // style={{
            //   backgroundImage: `url(${data.education_bg_image_1})`,
            // }}
          ></div>

          <div
            className="education-bg bg-paper"
            style={{
              backgroundImage: `url(${data.education_bg_image_3})`,
            }}
          ></div>

          <div
            className="education-bg bg-weave"
            style={{
              backgroundImage: `url(${data.education_bg_image_2})`,
            }}
          ></div>

          {/* FOREGROUND IMAGE */}
          <div className="education-foreground-image">
            <img
              src={data.education_bg_image_1}
              alt={data.education_content_heading}
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="education-content">
          <div className="education-text">
            <h2>{data.education_content_heading}</h2>

            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.education_content_description),
              }}
            />
          </div>
        </div>
      </section>

      {/* COTTAGE */}
      <section className="cottage-section">
        {/* MANUSCRIPT IMAGE */}
        <img
          src={data.cottage_main_bg_image}
          className="cottage-manuscript"
          alt=""
        />

        <div className="cottage-inner">
          {/* LEFT TEXT */}
          <div className="cottage-text">
            <h2>{data.cottage_content_title}</h2>

            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.cottage_description),
              }}
            />
          </div>

          {/* RIGHT VISUAL */}
          <div className="cottage-visual">
            {/* ✅ THIS WAS MISSED */}
            <div className="cottage-bg bg-green" />

            <div
              className="cottage-bg bg-pattern"
              style={{
                backgroundImage: `url(${data.cottage_pattern_image})`,
              }}
            />

            {/* FOREGROUND IMAGE */}
            <div className="cottage-image">
              <img
                src={data.cottage_right_image}
                alt={data.cottage_content_title}
              />
            </div>
          </div>
        </div>
      </section>

      {/* LIBRARY */}
      <section className="library-section">
        {/* MANUSCRIPT IMAGE — THIS WAS MISSED */}
        <img
          src={data.library_bg_image_1}
          alt="Historic manuscript"
          className="library-manuscript"
        />

        <div className="library-inner">
          {/* LEFT VISUAL */}
          <div className="library-visual">
            <div
              className="library-bg"
              // style={{
              //   backgroundImage: `url(${data.library_bg_image_1})`,
              // }}
            />

            {/* ✅ SECOND BACKGROUND LAYER */}
            <div
              className="library-bgtwo"
              style={{
                backgroundImage: `url(${data.library_bg_image_3})`,
              }}
            />

            <div className="library-image">
              <img src={data.library_bg_image_2} alt="The Library interior" />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="library-text">
            <h2>{data.library_title}</h2>

            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.library_description),
              }}
            />
          </div>
        </div>
      </section>

      <section className="staff-section">
        <div className="staff-header">
          <span className="staff-line"></span>
          <h2>OUR STAFF</h2>
        </div>

        {staffLoading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "200px" }}
          >
            <div className="spinner-border text-dark" role="status" />
          </div>
        ) : (
          <div className="staff-grid">
            {staff.map((member) => (
              <div key={member.id} className="staff-item">
                <h3>{member.name}</h3>
                <p>{member.designation}</p>
                <span className="staff-divider"></span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section
        className="contact-cta"
        style={{
          backgroundImage: `url(${data.cta_background_img})`,
        }}
      >
        <div className="contact-overlay" />

        <div className="contact-content">
          <span className="contact-kicker">{data.cta_title1}</span>

          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.cta_content),
            }}
          />

          <a href="/contact" className="contact-btn">
            {data.cta_btn_title}
            <span className="contact-arrow">→</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
