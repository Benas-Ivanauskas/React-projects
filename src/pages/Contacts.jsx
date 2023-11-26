import ContactsLayout from "../components/ContactsLayout";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import styles from "./Contacts.module.css";

function Contacts() {
  return (
    <main className={styles.contacts}>
      <NavBar />
      <ContactsLayout />
      <Footer />
    </main>
  );
}

export default Contacts;
