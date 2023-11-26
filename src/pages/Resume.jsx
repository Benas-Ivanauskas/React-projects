import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ResumeLayout from "../components/ResumeLayout";
import styles from "./Resume.module.css";

function Resume() {
  return (
    <section className={styles.resume}>
      <NavBar />
      <ResumeLayout />
      <Footer />
    </section>
  );
}

export default Resume;
Resume;
