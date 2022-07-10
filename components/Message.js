import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import style from "../styles/Message.module.css";

export default function Message() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7qzgs2r",
        "template_07kztow",
        formRef.current,
        "H3d4wkxOfYSB8wkZa"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <form className={style.message} ref={formRef} onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          placeholder="Name"
          name="user_name"
        />
        <input
          className={style.input}
          type="text"
          placeholder="Email"
          name="user_email"
        />
        <input
          className={style.input}
          type="text"
          placeholder="Subject"
          name="user_subject"
        />
        <textarea
          className={style.txt}
          placeholder="Message"
          name="message"
          rows="5"
        />
        <button className={style.btn}>Send</button>
        {done && (
          <p className={style.m_done}>Your message has been sent. Thank you!</p>
        )}
      </form>
    </>
  );
}
