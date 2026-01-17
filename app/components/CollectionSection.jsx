import collection from "../api/data/collectionSection.json";

export default function CollectionSection() {
  return (
    <section className="collection-section">
      <div className="collection-container">

        {/* LEFT CONTENT */}
        <div className="collection-left">

          <span className="collection-eyebrow">
            {collection.eyebrow}
          </span>

          <h1 className="collection-title">
            {collection.titleLines.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h1>

          <p className="collection-desc">
            {collection.description}
          </p>

          <a href={collection.button.link} className="collection-btn">
            {collection.button.label} <span>→</span>
          </a>

        </div>

        {/* RIGHT LIST */}
        <div className="collection-right">
          <ul className="collection-list">
            {collection.items.map((item, i) => (
              <li key={i} className="collection-item">
                {item.sub && (
                  <span className="collection-sub">
                    {item.sub}
                  </span>
                )}
                <span className="collection-main">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
