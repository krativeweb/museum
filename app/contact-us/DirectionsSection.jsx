export default function DirectionsSection({ data }) {
  return (
    <section className="directions-section">
      {/* Decorative manuscript (API-driven) */}
      <div
        className="manuscript-bg"
        style={{
          backgroundImage: `url(${data?.direction_bg_image})`,
        }}
      />

      <div className="directions-inner">
        {/* LEFT CONTENT */}
        <div className="directions-content">
          <span className="directions-eyebrow">
            {data?.direction_main_title || "DIRECTIONS"}
          </span>

          <h2
            className="directions-title"
            dangerouslySetInnerHTML={{
              __html: data?.direction_content_title,
            }}
          />

          <div
            className="directions-text"
            dangerouslySetInnerHTML={{
              __html: data?.direction_description,
            }}
          />

          {data?.direction_button_title && (
            <button className="directions-btn">
              {data.direction_button_title} <span>→</span>
            </button>
          )}
        </div>

        {/* RIGHT IMAGE */}
        <div className="directions-image-wrap">
          <img
            src={data?.direction_image}
            alt="Directions Map"
            className="directions-image"
          />
        </div>
      </div>
    </section>
  );
}
