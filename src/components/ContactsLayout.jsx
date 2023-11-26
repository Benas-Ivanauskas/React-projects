import styles from "./ContactsLayout.module.css";

function ContactsLayout() {
  return (
    <section className={styles.section}>
      <h1 className="connect-text">Lets Connect</h1>
      <p className="p-text">
        {" "}
        Im currently looking for new opporutnities, my inbox is always open.
        Whether you have question or just want to say hi, ill try my best to get
        back to you!
      </p>
      <img src="../public/github.png" alt="" className="img-github" />
      <img src="../public/link.png" alt="" className="img-linkedin" />

      <form className="form">
        <p>Your Email</p>
        <input placeholder="Type email..." />
        <p>Subject</p>
        <input placeholder="Just say hi..." />
        <p>Message</p>
        <input placeholder="Let's talk about..." className="message-input" />
        <button>Send Message</button>
      </form>
    </section>
  );
}

export default ContactsLayout;
