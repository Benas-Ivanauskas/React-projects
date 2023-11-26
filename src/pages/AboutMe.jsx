import NavBar from "../components/NavBar";
import AboutMeLayout from "../components/AboutMeLayout";
import styles from "./AboutMe.module.css";
import Footer from "../components/Footer";

function AboutMe() {
  return (
    <main className={styles.aboutmelayout}>
      <NavBar />
      <AboutMeLayout />
      <Footer />
    </main>
  );
}

export default AboutMe;
