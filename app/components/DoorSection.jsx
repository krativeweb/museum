import door from "../api/data/doorSection.json";

export default function DoorSection() {
  return (
    <section className="door-section min-vh-100">
      <div className="container-fluid px-0 h-100">
        <div className="row g-0 h-100 align-items-stretch">

          {/* LEFT IMAGE */}
          <div className="col-lg-3 d-flex justify-content-end align-items-center">
            <div className="left-image-wrap">
              <img
                src={door.leftImage}
                alt="Historic Interior"
                className="img-fluid"
              />
            </div>
          </div>

          {/* CENTER CONTENT */}
          <div className="col-lg-4 d-flex align-items-center">
            <div className="center-content">

              <span className="eyebrow">
                {door.eyebrow}
              </span>

              <h2 className="timeless-title">
                {door.title.split(" ").slice(0, 2).join(" ")} <br />
                {door.title.split(" ").slice(2, 5).join(" ")} <br />
                {door.title.split(" ").slice(5, 8).join(" ")} <br />
                {door.title.split(" ").slice(8).join(" ")}
              </h2>

              <p className="timeless-desc">
                {door.description}
              </p>

            </div>
          </div>

          {/* RIGHT RED PANEL + IMAGE */}
          <div className="col-lg-5 red-panel d-flex align-items-center justify-content-center">
            <div className="right-image-wrap">
              <img
                src={door.rightImage}
                alt="Museum Entrance"
                className="img-fluid"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
