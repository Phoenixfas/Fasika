import style from "../styles/Project.module.css";

export default function Project({ project, id }) {
  return (
    <div className={style.p}>
      <div className={style.p_browser}>
        <p className={style.p_name}>{project.name}</p>
        <div className={style.p_circle}></div>
        <div className={style.p_circle}></div>
        <div className={style.p_circle}></div>
      </div>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <img src={project.image} alt="" className={style.p_img} />
      </a>
    </div>
  );
}
