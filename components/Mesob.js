import Image from "next/image";
import styles from "../styles/Mesob.module.css";

export default function Mesob() {
  return (
    <div className={styles.mesob}>
      <img src="/images/Cap.svg" alt="Mesob" className={styles.cap} />
      <img src="/images/Body.svg" alt="Mesob" className={styles.body} />
    </div>
  );
}
