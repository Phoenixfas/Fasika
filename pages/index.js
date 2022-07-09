import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useStore from "../store/store";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Tibeb from "../components/Tibeb";
import Mesob from "../components/Mesob";
import Modal from "../components/Modal";
import TibebDiag from "../components/TibebDiag";

const greetVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      type: "spring",
      stiffness: 200,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 1.5,
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Home() {
  const [greetingShown, setGreetingShown] = useState(true);
  setTimeout(() => {
    setGreetingShown(false);
  }, 2000);

  const setMesobOpen = useStore((state) => state.setMesobOpen);
  const mesobOpen = useStore((state) => state.mesobOpen);

  const setModalVisible = useStore((state) => state.setModalVisible);

  useEffect(() => {
    const toggle = () => {
      mesobOpen ? null : setModalVisible(false);
    };
    toggle();
  }, [mesobOpen]);

  return (
    <div className={styles.container}>
      <Image
        src={"/images/Bg.svg"}
        alt="background"
        layout="fill"
        className={styles.bg}
        onClick={mesobOpen ? setMesobOpen : null}
      />
      <Tibeb />
      <TibebDiag />
      <AnimatePresence>
        {greetingShown && (
          <motion.div
            className={styles.text}
            variants={greetVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h1>እንብላ!</h1>
          </motion.div>
        )}
      </AnimatePresence>
      <Modal />
      <Mesob />
    </div>
  );
}
