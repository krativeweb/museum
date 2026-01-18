"use client";

import { useEffect, useState } from "react";

export default function HistorySection() {
  const [history, setHistory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-history`)
      .then((res) => res.json())
      .then((data) => {
        setHistory(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("History Section API Error:", err);
        setLoading(false);
      });
  }, []);

  /* ---------------- BOOTSTRAP LOADER ---------------- */
  if (loading) {
    return (
      <section
        className="history-section d-flex justify-content-center align-items-center"
        style={{ minHeight: "50vh" }}
      >
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
    );
  }

  if (!history) return null;

  return (
    <section className="history-section">
      <div className="history-container">
        {/* LEFT CONTENT */}
        <div className="history-content">
          <span className="history-eyebrow">{history.history_eyebrow}</span>

          <h2 className="history-title">
            {history.history_title_number}{" "}
            <em>{history.history_title_emphasis}</em>
            <br />
            {history.history_title_main}
          </h2>

          <p className="history-desc">{history.history_description}</p>

          <a href={history.history_button_link} className="history-btn">
            {history.history_button_label} <span>→</span>
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="history-image">
          <img src={history.history_image} alt={history.history_image_alt} />
        </div>
      </div>
    </section>
  );
}
