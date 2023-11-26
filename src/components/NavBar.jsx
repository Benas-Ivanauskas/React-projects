import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import NavLogo from "./NavLogo";

function NavBar() {
  return (
    <>
      <NavLogo />
      <nav className={styles.nav}>
        <ul>
          <li className="hoverme1">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="hoverme2">
            <NavLink to="/aboutme">About Me</NavLink>
          </li>
          <li className="hoverme1">
            <NavLink to="/resume">Resume</NavLink>
          </li>
          <li className="hoverme1">
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
