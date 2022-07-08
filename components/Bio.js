import style from "../styles/Bio.module.css";

export default function Bio() {
  return (
    <div className={style.bio}>
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
        <h3>I ❤</h3>
        <p>
          Music, Watching Movies, Playing Games, Photography, 3d Animating,
          Coding
        </p>
      </div>
    </div>
  );
}
