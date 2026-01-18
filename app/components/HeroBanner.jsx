"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ScrollZoomImage from "./ScrollZoomImage";

export default function HeroBanner() {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-hero`)
      .then((res) => res.json())
      .then((data) => {
        setHero(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Hero API Error:", err);
        setLoading(false);
      });
  }, []);

  /* ---------------- BOOTSTRAP LOADER ---------------- */
  if (loading) {
    return (
      <section
        className="hero-banner d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
    );
  }

  if (!hero) return null;

  return (
    <section className="hero-banner">
      {/* LOGO */}
      <div className="hero-logo">
        <Image
          src={hero.logo}
          alt="Museum Logo"
          width={160}
          height={160}
          priority
        />
      </div>

      <div className="container-fluid p-0">
        <div className="row g-0 min-vh-100">
          {/* LEFT CONTENT */}
          <div className="col-lg-6 d-flex align-items-center hero-content">
            <div className="content-wrapper">
              <span className="hero-top text-light">{hero.heroTop}</span>

              <h1 className="hero-title">
                {hero.title}
                <br />
                <span>{hero.highlight}</span>
                <br />
                {hero.subtitle}
              </h1>

              <p className="hero-desc">{hero.description}</p>

              <div className="opening-hours-wrapper">
                <div className="opening-hours-card">
                  <p className="opening-label">Opening Hours</p>
                  <h2 className="opening-time">{hero.openingTime}</h2>
                  <p className="opening-days">{hero.openingDays}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 hero-image zoom-wrapper">
            <Image
              src={hero.heroImage}
              alt="Historic Interior"
              fill
              priority
              sizes="50vw"
              className="hero-img zoom-img"
            />
          </div>
        </div>
      </div>

      <ScrollZoomImage
        targetClass=".hero-img"
        triggerClass=".hero-banner"
        fromScale={1}
        toScale={1.25}
      />
    </section>
  );
}
