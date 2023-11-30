import styles from "./ContactsLayout.module.css";
import GoogleMap from "./GoogleMap";
import Forma from "./Forma";

function ContactsLayout() {
  return (
    <section className={styles.section}>
      <div className="connect">
        <h1 className="connect-text">Lets Connect</h1>
        <p className="p-text">
          {" "}
          Im currently looking for new opporutnities, my inbox is always open.
          Whether you have question or just want to say hi, ill try my best to
          get back to you!
        </p>
        <img src="../public/github.png" alt="" className="img-github" />
        <img src="../public/link.png" alt="" className="img-linkedin" />
      </div>
      <div className="input-container">
        <Forma />
      </div>
      <GoogleMap />
    </section>
  );
}

export default ContactsLayout;
