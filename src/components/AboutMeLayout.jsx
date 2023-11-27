import { useState } from "react";
import styles from "./AboutMeLayout.module.css";

function AboutMeLayout() {
  const [showPopUse, setShowPopUse] = useState(false);

  function handleClick() {
    setShowPopUse((show) => !show);
  }

  return (
    <section className={styles.section}>
      <div className="container-1">
        <h1>About me </h1>
        <h3>Hi, Im Benas Ivanauskas</h3>
        <p>
          Im a self-taught web developer with a background in work management.
          My years in managerial roles have honed my communication and task
          distribution skills. Motivated by a passion for coding, I made a
          deliberate shift to web development. I bring a strong work ethic,
          adaptability, and a commitment to continuous learning to every project
        </p>
      </div>
      <div className="container-2">
        <h3>What is my skill level?</h3>
        <p>
          Beginner web developer with skills in HTML, CSS, and JavaScript,
          focusing on React. Actively learning and committed to progress.
        </p>
      </div>
      <div>
        <img
          src="../public/programmer.jpg"
          alt="programmer"
          className="section-img"
        />
      </div>

      <button className="see-more-btn" onClick={handleClick}>
        {showPopUse ? "Close" : "See More"}
      </button>
      {showPopUse && <PopUse setShowPopUse={setShowPopUse} />}
    </section>
  );
}

export default AboutMeLayout;

function PopUse({ setShowPopUse }) {
  function handleClick() {
    setShowPopUse(false);
  }
  return (
    <>
      <div className="popuse-container"></div>
      <div className="popuse">
        <h2>Personal info</h2>
        <main>
          <li className="list">
            First name: <span>Benas</span>
          </li>
          <li className="list">
            Last name: <span>Ivanauskas</span>
          </li>
          <li className="list">
            Age: <span>27 Years</span>
          </li>
          <li className="list">
            Phone: <span> +370*****</span>
          </li>
          <li className="list">
            Adress: <span> Vilnius</span>
          </li>
          <li className="list">
            Email: <span> you@gmail.com</span>
          </li>
          <li className="list">
            Languages: <span> Lithuania, English</span>
          </li>
          <li className="list">
            Freelance: <span> Available</span>
          </li>
          <button>Download CV</button>
        </main>

        <div>
          <button className="popup-btn" onClick={handleClick}>
            ❌
          </button>
        </div>
      </div>
    </>
  );
}
