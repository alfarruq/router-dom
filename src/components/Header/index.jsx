import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <header>
      <img src={logo} alt="" />

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
