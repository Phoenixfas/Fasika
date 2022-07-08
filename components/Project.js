import style from "../styles/Project.module.css";

export default function Project({ link }) {
  return (
    <div className={style.p}>
      <div className={style.p_browser}>
        <div className={style.p_circle}></div>
        <div className={style.p_circle}></div>
        <div className={style.p_circle}></div>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src="/images/menu/Doro.jpg" alt="" className={style.p_img} />
      </a>
    </div>
  );
}
