import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <header className="container">
      <NavLink to="/">
        <img className="logo" src={logo} alt="" />
      </NavLink>
      <hr />
      <ul>
        <li>
          <NavLink
            to="/brand"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>о бренде</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/advantages"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>преимущества</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/club"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>открыть клуб</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>контакты</span>
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
