import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>@Copyright All rights reserved.</p>
      <div>
        <Link to="/home" className="to-page">
          Home
        </Link>
        <Link to="/aboutme" className="to-page">
          About Me
        </Link>
        <Link to="/projects" className="to-page">
          Projects
        </Link>

        <Link to="/contacts" className="to-page">
          Contacts
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
