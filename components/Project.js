import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import style from "../styles/Project.module.css";

const productVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 5 } },
  hidden: { opacity: 0, y: 300 },
};

export default function Project({ project }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
      console.log("inView");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className={style.p}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={productVariants}
    >
      <div className={style.p_browser}>
        <p className={style.p_name}>{project.name}</p>
        <div className={style.p_circle}></div>
        <div className={style.p_circle}></div>
        <div className={style.p_circle}></div>
      </div>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <img src={project.image} alt="" className={style.p_img} />
      </a>
    </motion.div>
  );
}
