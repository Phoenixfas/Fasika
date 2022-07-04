import Image from "next/image";
import styles from "../styles/Tibeb.module.css";

export default function Tibeb() {
  return (
    <div>
      <Image
        src="/images/Tilet.svg"
        alt="Tibeb"
        layout="fill"
        className={styles.tibeb}
      />
    </div>
  );
}
