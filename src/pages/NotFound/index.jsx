import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main style={{ padding: "50px", textAlign: "center" }}>
      <h1>404</h1>
      <p>Страница не найдена 😢</p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "20px",
          color: "#3498db",
          textDecoration: "underline",
        }}
      >
        На главную →
      </Link>
    </main>
  );
}

export default NotFound;
