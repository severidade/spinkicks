/* eslint-disable react/react-in-jsx-scope */
import VideoBg from './components/VideoBg/VideoBg.tsx';
import CustomCursor from './components/CustomCursor/CoustomCursor.tsx';
import './CSS/reset.css';
import './App.css';

function App() {
  return (
    <div className="stage">
      <CustomCursor />
      <VideoBg />
      <h1 className="app_title ">
        Olá mundo
      </h1>
      <p className="container_img">configurações iniciais do meu</p>
    </div>
  );
}

export default App;
