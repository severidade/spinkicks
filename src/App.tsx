/* eslint-disable react/react-in-jsx-scope */
import VideoBg from './components/VideoBg/VideoBg.tsx';
import CustomCursor from './components/CustomCursor/CoustomCursor.tsx';
import './CSS/reset.css';
import './App.css';
import Footer from './components/Footer/index.tsx';

function App() {
  return (
    <div className="stage">
      <CustomCursor />
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
