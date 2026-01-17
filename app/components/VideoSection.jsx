import video from "../api/data/videoSection.json";

export default function VideoSection() {
  return (
    <section className="video-hero">

      {/* LEFT OFF-WHITE STRIP */}
      <div className="video-left-strip"></div>

      {/* VIDEO */}
      <video
        className="hero-video"
        src={video.video.src}
        autoPlay={video.video.autoPlay}
        muted={video.video.muted}
        loop={video.video.loop}
        playsInline={video.video.playsInline}
      />

      {/* FLOATING THUMBNAIL */}
      <div className="video-thumbnail">
        <img
          src={video.thumbnail.src}
          alt={video.thumbnail.alt}
        />
      </div>

    </section>
  );
}
