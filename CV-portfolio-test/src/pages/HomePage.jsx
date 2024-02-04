import NavBar from "../components/NavBar";
import styles from "./HomePage.module.css";
import HomeLayout from "../components/HomeLayout";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <main className={styles.homepage}>
      <NavBar />
      <HomeLayout />
      <Footer />
    </main>
  );
}

export default HomePage;
