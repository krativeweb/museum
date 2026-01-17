"use client";

import styles from "./PlacesCarousel.module.css";
import { useEffect, useRef, useState } from "react";

type Place = {
  id: string | number;
  title: string;
  description: string;
  gallery_image: string;
};

export default function PlacesCarousel() {
  const [places, setPlaces] = useState<Place[]>([]);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // ✅ FIXED TYPE
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ---------------- FETCH API ---------------- */
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/place-to-visit`)
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data || []);
      })
      .catch((err) => {
        console.error("Places API Error:", err);
      });
  }, []);

  /* ---------------- AUTO SCROLL ---------------- */
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || places.length === 0) return;

    const CARD_SCROLL = 360;

    const start = () => {
      if (intervalRef.current) return;

      intervalRef.current = setInterval(() => {
        if (
          carousel.scrollLeft + carousel.clientWidth >=
          carousel.scrollWidth - 5
        ) {
          carousel.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carousel.scrollBy({ left: CARD_SCROLL, behavior: "smooth" });
        }
      }, 3000);
    };

    const stop = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? start() : stop();
      },
      { threshold: 0.3 },
    );

    observer.observe(carousel);

    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);
    carousel.addEventListener("touchstart", stop);
    carousel.addEventListener("touchend", start);

    return () => {
      stop();
      observer.disconnect();
      carousel.removeEventListener("mouseenter", stop);
      carousel.removeEventListener("mouseleave", start);
      carousel.removeEventListener("touchstart", stop);
      carousel.removeEventListener("touchend", start);
    };
  }, [places]);

  /* ---------------- RENDER ---------------- */
  return (
    <section className={styles.section}>
      <span className={styles.label}>Galleries To Explore</span>
      <h2 className={styles.heading}>PLACES TO VISIT</h2>

      <div className={styles.carousel} ref={carouselRef}>
        {places.map((place) => (
          <div className={styles.card} key={place.id}>
            <div className={styles.imageWrap}>
              <img src={place.gallery_image} alt={place.title} />
            </div>

            <div className={styles.cardContent}>
              <h3>{place.title}</h3>

              <div className={styles.meta}>
                <span className={styles.line} />
                <span
                  className={styles.category}
                  dangerouslySetInnerHTML={{
                    __html: place.description,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
