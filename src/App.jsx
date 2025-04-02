import igniteLogo from "./assets/App name.png";
import { ImageProfile } from "./components/image/index.";
import { Profile } from "./components/profile";

export function App() {
  return (
    <>
      <header className="header">
        <img className="logoImg" src={igniteLogo} alt="" />
      </header>

      <div className="container">
        <div className="s-card-profile">
          <Profile />
        </div>
      </div>
    </>
  );
}
