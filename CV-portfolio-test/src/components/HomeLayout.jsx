import styles from "./HomeLayout.module.css";
import Typewriter from "react-ts-typewriter";

function HomeLayout() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className="name">Benas Ivanauskas</p>
        <p className="developer">
          <span>
            <Typewriter text="Programmer, web developer" />
          </span>{" "}
        </p>
        <p className="about">
          Self-taught web developer with a passion for coding and a commitment
          to continuous learning
        </p>
        <ul>
          <li>
            <img src="../public/fb.jpg" alt="" className="facebook" />
          </li>
          <li>
            <img src="../public/instagram.jpg" alt="" className="instagram" />
          </li>
          <li>
            <img src="../public/twitt.jpg" alt="" className="twitter" />
          </li>
        </ul>
      </div>

      <img src="../public/benas.jpg" alt="" className="benas-img" />
      <button className="btn">Donwload CV</button>
    </section>
  );
}

export default HomeLayout;
