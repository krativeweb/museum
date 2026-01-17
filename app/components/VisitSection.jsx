import visit from "../api/data/visitSection.json";

export default function VisitSection() {
  return (
    <section className="visit-exact">
      <div className="visit-layout">

        {/* LEFT IMAGE */}
        <div className="visit-image d-flex">
          <img
            src={visit.heroImage.src}
            alt={visit.heroImage.alt}
          />

          <div className="visit-image-text">
            <span>{visit.heroText.eyebrow}</span>

            <h2>
              {visit.heroText.titleLines.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>

            <a href={visit.heroText.link.href}>
              {visit.heroText.link.label} <i>→</i>
            </a>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="visit-panel">

          <div className="panel-block">
            <label>{visit.address.label}</label>
            <p className="panel-big">
              {visit.address.lines.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>

          <div className="panel-block">
            <label>{visit.phone.label}</label>
            <p className="panel-big">
              {visit.phone.value}
            </p>
          </div>

          <div className="panel-block">
            <label>{visit.tours.label}</label>
            <p className="panel-link">
              <a href={visit.tours.href}>
                {visit.tours.linkText} →
              </a>
            </p>
          </div>

          {/* FOOTER */}
          <div className="panel-footer">
            <div className="row">

              <div className="col-md-6">
                <div className="footer-cols">
                  <ul>
                    {visit.footer.navLeft.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <ul>
                    {visit.footer.navRight.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <div className="panel-copy">
                  {visit.footer.copyright}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
