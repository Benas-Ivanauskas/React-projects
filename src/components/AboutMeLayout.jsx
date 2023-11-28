import { useState } from "react";
import styles from "./AboutMeLayout.module.css";
import PopUp from "./PopUp";
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
      {showPopUse && <PopUp setShowPopUse={setShowPopUse} />}
    </section>
  );
}

export default AboutMeLayout;
