import history from "../api/data/historySection.json";

export default function HistorySection() {
  return (
    <section className="history-section">
      <div className="history-container">

        {/* LEFT CONTENT */}
        <div className="history-content">

          <span className="history-eyebrow">
            {history.eyebrow}
          </span>

          <h2 className="history-title">
            {history.title.number} <em>{history.title.emphasis}</em><br />
            {history.title.main}
          </h2>

          <p className="history-desc">
            {history.description}
          </p>

          <a href={history.button.link} className="history-btn">
            {history.button.label} <span>→</span>
          </a>

        </div>

        {/* RIGHT IMAGE */}
        <div className="history-image">
          <img
            src={history.image.src}
            alt={history.image.alt}
          />
        </div>

      </div>
    </section>
  );
}
