import style from "../styles/Socials.module.css";

export default function Socials() {
  return (
    <div className={style.socials}>
      <div className={style.soc}>
        <a href="https://github.com/Phoenixfas" target="_blank">
          <img
            className={style.icon}
            src={"/images/social/github.png"}
            alt="github"
          />
        </a>
      </div>
      <div className={style.soc}>
        <a href="https://codepen.io/phoenixfas" target="_blank">
          <img
            className={style.icon}
            src={"/images/social/codepen.png"}
            alt="codepen"
          />
        </a>
      </div>
      <div className={style.soc}>
        <a href="mailto:fasika1515@gmail.com" target="_blank">
          <img
            className={style.icon}
            src={"/images/social/email.png"}
            alt="gmail"
          />
        </a>
      </div>
      <div className={style.soc}>
        <a href="https://t.me/Ras_Metat" target="_blank">
          <img
            className={style.icon}
            src={"/images/social/telegram.png"}
            alt="telegram"
          />
        </a>
      </div>
      <div className={style.soc}>
        <a href="tel:+251934166250" target="_blank">
          <img
            className={style.icon}
            src={"/images/social/call.png"}
            alt="phone"
          />
        </a>
      </div>
    </div>
  );
}
