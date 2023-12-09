import { useState } from "react";
import styles from "./Forma.module.css";
import emailjs from "@emailjs/browser";

function Forma() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [mess, setMess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const serviceId = "service_mk8e6z6";
    const publicKey = "eJFJ5rCj5HIxj7VFs";
    const templateId = "template_9y2bda4";

    const templateParams = {
      from_email: email,
      from_subject: subject,
      message: mess,
      to_name: "Benas",
    };

    emailjs.send(serviceId, publicKey, templateParams, templateId).then(
      (result) => {
        console.log(result, "Sent");
      },
      (error) => {
        console.log(error, "Error");
      }
    );
  }
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .send(
  //     "service_mk8e6z6",
  //      "template_9y2bda4",
  //     form.current,
  //      "UVsZHAJ2AXkEaQlnF"
  //    )
  //    .then(
  //    (result) => {
  //       console.log(result, "Message succesfully send");
  //    },
  //    (error) => {
  //      console.log(error, "Error");
  //     }
  //  );
  //};
  return (
    <section className={styles.section}>
      <form className="form" onSubmit={handleSubmit}>
        <p>Your Email</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Type email..."
        />
        <p>Subject</p>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Just say hi..."
        />
        <p>Message</p>
        <input
          type="text"
          value={mess}
          onChange={(e) => setMess(e.target.value)}
          placeholder="Let's talk about..."
          className="message-input"
        />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Forma;
