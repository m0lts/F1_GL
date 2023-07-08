import logo from '../../logo.png';
import './App.css';
import { MenuBtn } from '../MenuBtn/MenuBtn';
import { LoginBtn } from '../LoginBtn/LoginBtn';
import { RaceBanner } from '../RaceBanner/RaceBanner';
import { TimeBanner } from '../TimeBanner/TimeBanner';
import { PredictionBanner } from '../PredictionBanner/PredictionBanner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Login-menu-cont">
          <MenuBtn />
          <LoginBtn />
        </div>
      </header>
      <main className="App-main">
        <div className="Banners-cont">
          <RaceBanner />
          <TimeBanner />
          <PredictionBanner />
        </div>
      </main>
    </div>
  );
}

export default App;
