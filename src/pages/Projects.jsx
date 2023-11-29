import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProjectsLayout from "../components/ProjectsLayout";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.resume}>
      <NavBar />
      <ProjectsLayout />
      <Footer />
    </section>
  );
}

export default Projects;
