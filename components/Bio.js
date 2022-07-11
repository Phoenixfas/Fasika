import { motion } from "framer-motion";
import style from "../styles/Bio.module.css";

export default function Bio() {
  return (
    <motion.div
      className={style.bio}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.8 }}
    >
      <div className={style.bioBox}>
        <h3>Work</h3>
        <p>
          Fasika is a freelance and a full-stack developer based in Addis Ababa
          with a passion for creating beautiful and functional web applications.
          He has worked on a wide range of projects, from small one-page
          websites to large multi-page applications. When not online, he loves
          messing around with 3d modelling and animation.
        </p>
      </div>
      <div className={style.bioBox}>
        <h3>Bio</h3>
        <p>
          <span>2003 :</span> Born in Addis Ababa (አዲስ አበባ), Ethiopia.
        </p>
        <p>
          <span>2020/21 :</span> Finished highschool at School of Aygoda (saris
          campus).
        </p>
        <p>
          <span>2022 :</span> Joined Addis Ababa institute of Technology(AAiT)
          as a software engineering student.
        </p>
      </div>
      <div className={style.bioBox}>
        <h3>Proficiency</h3>
        <p className={style.skill}>
          Html, CSS, Javascript, React, React-Native, Node, Express, MongoDB,
          GraphQL
        </p>
      </div>
      <div className={style.bioBox}>
        <h3>I ❤</h3>
        <p>
          Music, Watching Movies, Playing Games, Photography, 3d Animating,
          Coding
        </p>
      </div>
    </motion.div>
  );
}
