/* eslint-disable react/react-in-jsx-scope */
import VideoBg from './components/VideoBg/VideoBg.tsx';
import CustomCursor from './components/CustomCursor/CoustomCursor.tsx';
import './CSS/reset.css';
import './App.css';
import Footer from './components/Footer/index.tsx';

function App() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    alert('Você está usando um dispositivo móvel!');
  } else {
    alert('É um desktop');
  }
  return (
    <div className="stage">
      {!isMobile && <CustomCursor />}
      <VideoBg />
      <h1 className="app_title">
        SpinKicks
      </h1>
      <ul className="container_gallery">
        <li className="link_img">01</li>
        <li className="link_img">02</li>
        <li className="link_img">03</li>
      </ul>
      <Footer />
    </div>
  );
}

export default App;
