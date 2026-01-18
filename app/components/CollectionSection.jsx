"use client";

import { useEffect, useState } from "react";

export default function CollectionSection() {
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-collection`)
      .then((res) => res.json())
      .then((data) => {
        setCollection(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Collection Section API Error:", err);
        setLoading(false);
      });
  }, []);

  /* ---------------- BOOTSTRAP LOADER ---------------- */
  if (loading) {
    return (
      <section
        className="collection-section d-flex justify-content-center align-items-center"
        style={{ minHeight: "50vh" }}
      >
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
    );
  }

  if (!collection) return null;

  return (
    <section className="collection-section">
      <div className="collection-container">
        {/* LEFT CONTENT */}
        <div className="collection-left">
          <span className="collection-eyebrow">
            {collection.collection_eyebrow}
          </span>

          <h1 className="collection-title">
            {collection.collection_titleLines.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h1>

          <p className="collection-desc">{collection.collection_description}</p>

          <a
            href={collection.collection_button_link}
            className="collection-btn"
          >
            {collection.collection_button_label} <span>→</span>
          </a>
        </div>

        {/* RIGHT LIST */}
        <div className="collection-right">
          <ul className="collection-list">
            {collection.collection_items.map((item, i) => (
              <li key={i} className="collection-item">
                {item.sub && <span className="collection-sub">{item.sub}</span>}
                <span className="collection-main">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
