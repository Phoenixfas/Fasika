import { useEffect } from "react";
import useStore from "../store/store";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/Mesob.module.css";

export default function Mesob() {
  const setMesobOpen = useStore((state) => state.setMesobOpen);
  const mesobOpen = useStore((state) => state.mesobOpen);

  const modalVisible = useStore((state) => state.modalVisible);
  const setModalVisible = useStore((state) => state.setModalVisible);

  useEffect(() => {
    const toggle = () => {
      mesobOpen ? setModalVisible(true) : setModalVisible(false);
    };
    toggle();
  }, [mesobOpen]);

  const variants = {
    initial: {
      x: null,
      y: null,
      rotate: 0,
    },
    anim1: {
      x: [null, 0, 200],
      y: [null, -20, -40],
      rotate: [0, 0, 100],
      transition: { duration: 1, ease: "easeInOut" },
    },
    anim2: {
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={styles.mesob}
      whileHover={{
        scale: 1.1,
        cursor: "pointer",
        transition: { duration: 0.3 },
      }}
      // whileTap={{
      //   scale: 0.9,
      //   transition: { duration: 0.3 },
      // }}
      onClick={setMesobOpen}
    >
      <motion.img
        src="/images/Cap.svg"
        alt="Mesob"
        className={mesobOpen ? styles.capBlur : styles.cap}
        variants={variants}
        initial="initial"
        animate={mesobOpen ? "anim1" : "anim2"}
      />
      <img
        src="/images/Body.svg"
        alt="Mesob"
        className={mesobOpen ? styles.bodyBlur : styles.body}
      />
    </motion.div>
  );
}
