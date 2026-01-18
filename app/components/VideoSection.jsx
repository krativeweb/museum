"use client";

import { useEffect, useState } from "react";

export default function VideoSection() {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-video`)
      .then((res) => res.json())
      .then((data) => {
        setVideo(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Video Section API Error:", err);
        setLoading(false);
      });
  }, []);

  /* ---------------- BOOTSTRAP LOADER ---------------- */
  if (loading) {
    return (
      <section
        className="video-hero d-flex justify-content-center align-items-center"
        style={{ minHeight: "50vh" }}
      >
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
    );
  }

  if (!video) return null;

  return (
    <section className="video-hero">
      {/* LEFT OFF-WHITE STRIP */}
      <div className="video-left-strip"></div>

      {/* VIDEO */}
      <video
        className="hero-video"
        src={video.home_video_src}
        autoPlay={video.home_video_autoplay}
        muted={video.home_video_muted}
        loop={video.home_video_loop}
        playsInline={video.home_video_inline}
      />

      {/* FLOATING THUMBNAIL */}
      <div className="video-thumbnail">
        <img src={video.home_video_thumb} alt={video.home_video_thumb_alt} />
      </div>
    </section>
  );
}
