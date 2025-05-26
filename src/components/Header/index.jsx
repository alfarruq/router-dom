import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h3>Logo </h3>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/brand">Brand</Link>
        </li>
        <li>
          <Link to="/advantages">Advantages</Link>
        </li>
        <li>
          <Link to="/club">Club</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
