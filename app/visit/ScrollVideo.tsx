"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ScrollVideo.module.css";

/* ---------------- TYPES ---------------- */
type ScrollVideoProps = {
  video: string;
};

/* ---------------- COMPONENT ---------------- */
export default function ScrollVideo({ video }: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  /* ---------------- OBSERVER ---------------- */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.4 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* ---------------- RENDER ---------------- */
  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.show : ""}`}
    >
      <video
        ref={videoRef}
        className={styles.video}
        src={video}
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
}
