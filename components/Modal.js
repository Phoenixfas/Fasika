import { useState, useEffect } from "react";
import useStore from "../store/store";
import { motion, AnimatePresence } from "framer-motion";
import style from "../styles/Modal.module.css";
import Project from "./Project";
import Profile from "./Profile";
import Bio from "./Bio";
import Socials from "./Socials";
import Message from "./Message";

const variants = {
  hidden: {
    y: -80,
    opacity: 0,
    scale: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
      y: { bounce: 0 },
    },
  },
  exit: {
    y: -80,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Modal() {
  const modalVisible = useStore((state) => state.modalVisible);

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
    <>
      <AnimatePresence>
        {modalVisible && (
          <motion.div
            className={style.modal}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className={style.closeBtn}
              onClick={mesobOpen ? setMesobOpen : null}
              whileHover={{ backgroundColor: "#444" }}
              whileTap={{ backgroundColor: "#666" }}
            >
              <img src="/images/menu/close.png" alt="close" />
            </motion.div>
            <div className={style.header}>
              <h3>Hello I&apos;m a full-stack developer based in Ethiopia! </h3>
            </div>
            <Profile />
            <Bio />
            <h3> Demo Projects </h3>
            <div className={style.container}>
              <Project />
              <Project />
              <Project />
            </div>
            <h3> Get In Touch </h3>
            <Message />
            <Socials />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
