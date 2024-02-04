import { useState } from "react";
import styles from "./PopUp.module.css";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function PopUp({ setShowPopUse }) {
  const [showContent, setShowContent] = useState(false);

  //open
  useEffect(() => setShowContent(true), []);

  //HandleClose PopUp
  const closePop = () => {
    setShowContent(false);
    setTimeout(() => {
      setShowPopUse(false);
    }, 200);
  };
  return (
    <>
      <section className={styles.section}>
        <div className="popuse-container"></div>
        <div
          className={`${styles.popuse} ${showContent && styles.showContent}`}
        >
          <h2 className="personal-text">Personal info </h2>
          <main>
            <li className="list">
              First name: <span className="span">Benas</span>
            </li>
            <li className="list">
              Last name: <span className="span">Ivanauskas</span>
            </li>
            <li className="list">
              Age: <span className="span">27 Years</span>
            </li>
            <li className="list">
              Phone: <span className="span"> +370*****</span>
            </li>
            <li className="list">
              Adress: <span className="span"> Vilnius</span>
            </li>
            <li className="list">
              Email: <span className="span"> Benas.Ivanauskas@gmail.com</span>
            </li>
            <li className="list">
              Languages: <span className="span"> Lithuanian, English</span>
            </li>
            <li className="list">
              Freelance: <span className="span"> Available</span>
            </li>
            {/* <button>Download CV</button> */}
          </main>

          <div>
            <button className="popup-btn" onClick={closePop}>
              <p className="escape-btn">❌</p>
            </button>
          </div>
          <experience>
            <h2 className="exp-text">Experience</h2>
            <div className={styles.exp}>
              <ul className="years">2021-06 / 2023-12</ul>
              <ul className="position">Work Manager - MVP Lietuva</ul>
              <ul className="respon">
                The HVAC Work Manager leads and organizes HVAC projects, manages
                teams, and ensures quality and safety for successful outcomes.
              </ul>
            </div>

            <div className={styles.exp2}>
              <ul className="years">2020-06 / 2021-06</ul>
              <ul className="position">Work Manager - Infes</ul>
              <ul className="respon">
                Sewage treatment equipment installation works, outdoor and
                indoor engineering network installation, planning and
                organization
              </ul>
            </div>

            <div className={styles.exp3}>
              <ul className="years">2019-06 - 2020-06</ul>
              <ul className="position">Work Manager - Vesa ir partneriai</ul>
              <ul className="respon">
                Responsible for HVAC system installation, including
                organization, planning, and quality assurance of work
                performance
              </ul>
            </div>
          </experience>
          <main2 className={styles.about}>
            <h2 className="abouttext">About Me</h2>
            <p className="text">
              After many years working in the HVAC field, I ve decided to pursue
              a career change. I m a self-taught beginner web developer with a
              keen focus on mastering front-end skills. I am actively learning
              and commited to continouse progress.
              <br /> Feel free to check my works on GitHub at
              https://github.com/Benas-Ivanauskas, and I welcome any comments or
              feedback. interested position junior front-end developer.
            </p>
          </main2>
        </div>
      </section>
    </>
  );
}
