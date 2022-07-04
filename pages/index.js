import Image from "next/image";
import styles from "../styles/Home.module.css";
import Tibeb from "../components/Tibeb";
import Mesob from "../components/Mesob";

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        src={"/images/Bg.svg"}
        alt="background"
        layout="fill"
        className={styles.bg}
      />
      <Tibeb />
      <h1>እንብላ!</h1>
      <Mesob />
    </div>
  );
}
