import "./index.css";

function BlueBackTitle({ title, subtitle, description, padding, gap }) {
  return (
    <section className="bluebacktitle">
      <div
        style={{ padding: `${padding}px 0`, gap: `${gap}px` }}
        className="container"
      >
        {title && <h3>{title}</h3>}
        {subtitle && <h1>{subtitle}</h1>}
        {description && <h2>{description}</h2>}
      </div>
    </section>
  );
}

export default BlueBackTitle;
