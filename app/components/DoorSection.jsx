"use client";

import { useEffect, useState } from "react";

export default function DoorSection() {
  const [door, setDoor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/door-section`)
      .then((res) => res.json())
      .then((data) => {
        setDoor(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Door Section API Error:", err);
        setLoading(false);
      });
  }, []);

  /* ---------------- BOOTSTRAP LOADER ---------------- */
  if (loading) {
    return (
      <section className="door-section min-vh-100 d-flex justify-content-center align-items-center">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
    );
  }

  if (!door) return null;

  const titleWords = door.door_title.split(" ");

  return (
    <section className="door-section min-vh-100">
      <div className="container-fluid px-0 h-100">
        <div className="row g-0 h-100 align-items-stretch">
          {/* LEFT IMAGE */}
          <div className="col-lg-3 d-flex justify-content-end align-items-center">
            <div className="left-image-wrap">
              <img
                src={door.doorleftImage}
                alt="Historic Interior"
                className="img-fluid"
              />
            </div>
          </div>

          {/* CENTER CONTENT */}
          <div className="col-lg-4 d-flex align-items-center">
            <div className="center-content">
              <span className="eyebrow">{door.eyebrow}</span>

              <h2 className="timeless-title">
                {titleWords.slice(0, 2).join(" ")} <br />
                {titleWords.slice(2, 5).join(" ")} <br />
                {titleWords.slice(5, 8).join(" ")} <br />
                {titleWords.slice(8).join(" ")}
              </h2>

              <p className="timeless-desc">{door.description_door}</p>
            </div>
          </div>

          {/* RIGHT RED PANEL + IMAGE */}
          <div className="col-lg-5 red-panel d-flex align-items-center justify-content-center">
            <div className="right-image-wrap">
              <img
                src={door.doorrightImage}
                alt="Museum Entrance"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
