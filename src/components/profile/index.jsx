import { ImageProfile } from "../image/index.";
import backgroundImg from "../../assets/background.png";
import "./style.css";

export function Profile() {
  return (
    <>
      <div className="card">
        <div className="backgroundImg">
          <img src={backgroundImg} alt="" />
        </div>

        <div className="fotoPerfil">
          <ImageProfile />
        </div>

        <div className="informacoes">
          <h2>Leslies Alexander</h2>
          
          <p>UI Designer</p>

          <button className="botao">Editar seu perfil</button>
        </div>
      </div>
    </>
  );
}
