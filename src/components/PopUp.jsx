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
              Email: <span className="span"> you@gmail.com</span>
            </li>
            <li className="list">
              Languages: <span className="span"> Lithuanian, English</span>
            </li>
            <li className="list">
              Freelance: <span className="span"> Available</span>
            </li>
            <button>Download CV</button>
          </main>

          <div>
            <button className="popup-btn" onClick={closePop}>
              <p className="escape-btn">❌</p>
            </button>
          </div>
          <experience>
            <h2 className="exp-text">Experience</h2>
            <div className={styles.exp}>
              <ul className="years">2018 - Present</ul>
              <ul className="position">Web Developer - Envato (exmaple)</ul>
              <ul className="respon">
                Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                labore adipisicing elit (example)
              </ul>
            </div>

            <div className={styles.exp2}>
              <ul className="years">2018 - Present</ul>
              <ul className="position">Web Developer - Envato (exmaple)</ul>
              <ul className="respon">
                Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                labore adipisicing elit (example)
              </ul>
            </div>

            <div className={styles.exp3}>
              <ul className="years">2018 - Present</ul>
              <ul className="position">Web Developer - Envato (exmaple)</ul>
              <ul className="respon">
                Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                labore adipisicing elit (example)
              </ul>
            </div>
          </experience>
        </div>
      </section>
    </>
  );
}
