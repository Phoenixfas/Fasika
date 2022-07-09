import useStore from "../store/store";
import style from "../styles/TibebDiag.module.css";

export default function TibebDiag() {
  const mesobOpen = useStore((state) => state.mesobOpen);
  return (
    <div className={style.container}>
      <img
        src="/images/TiletDiag.svg"
        alt="tibeb"
        className={mesobOpen ? style.tibebDiagBlur : style.tibebDiag}
      />
    </div>
  );
}
