import style from "../styles/Profile.module.css";

export default function Profile() {
  return (
    <div className={style.profile}>
      <img src="/images/menu/Profile.jpg" alt="Profile" />
      <div className={style.profileDetail}>
        <h3>Fasika Dagnachew</h3>
        <p>Digital Craftzman ( Developer / Designer / 3D Artist )</p>
      </div>
    </div>
  );
}
