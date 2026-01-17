export default function ReachUsSection({ data }) {
  return (
    <section className="reach-wrap">
      <div className="reach-left" />

      <div
        className="reach-right"
        style={{
          backgroundImage: `url(${data?.contact_banner})`,
        }}
      />

      <div className="reach-center">
        <span className="reach-small">{data?.contact_banner_title}</span>

        <h1
          className="reach-title"
          dangerouslySetInnerHTML={{
            __html: data?.contact_banner_maintitle,
          }}
        />
      </div>
    </section>
  );
}
