import profileImg from "../../assets/fotoPerfil.png";
import "./style.css";

export function ImageProfile() {
  return (
    <>
      <img className="profile" src={profileImg} alt="" />
    </>
  );
}
