import { Link } from "react-router-dom";
import styles from "./NavLogo.module.css";

function NavLogo() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src="../public/ben.jpg" alt="" className="logo" />
      </Link>
    </nav>
  );
}

export default NavLogo;
