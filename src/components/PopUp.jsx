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
          <h2>Personal info </h2>
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
            <button className="popup-btn" onClick={closePop}>
              ❌
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
