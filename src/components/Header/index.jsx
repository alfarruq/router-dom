import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <header className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <hr />
      <ul>
        <li>
          <Link to="/brand">
            <span>о бренде</span>
          </Link>
        </li>
        <li>
          <Link to="/advantages">
            <span>преимущества</span>
          </Link>
        </li>
        <li>
          <Link to="/club">
            <span>открыть клуб</span>
          </Link>
        </li>
        <li>
          <Link to="/contacts">
            <span>контакты</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
