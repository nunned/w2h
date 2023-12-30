import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./styles/Contact.css";

function Contact() {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const [sendError, setSendError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_21oz0tt_ffff",
        "template_064xf4q",
        form.current,
        "n2UTbix-bHqpZFQvF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
          setSendError(true);
        }
      );
  };

  return (
    <div className="wrap">
      <h1>Contact Us</h1>
      {emailSent ? (
        <div className="contact-response">
          Thank you! Your message has been sent.
        </div>
      ) : sendError ? (
        <div className="contact-response error">
          Sorry, there was an error sending your message. Please send your
          inquiry to
          <span className="highlighted-email"> Way2heady@gmail.com</span>.
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label htmlFor="user_name">Name</label>
          <input type="text" name="user_name" id="user_name" />

          <label htmlFor="user_email">Email</label>
          <input type="email" name="user_email" id="user_email" />

          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" />

          <input type="submit" value="Send" />
        </form>
      )}
    </div>
  );
}

export default Contact;
