/* eslint-disable react/react-in-jsx-scope */
import './CSS/reset.css';
import './App.css';
import VideoBg from './components/VideoBg/VideoBg.tsx';

function App() {
  return (
    <div className="stage">
      <VideoBg />
      <h1 className="app_title ">
        Olá mundo
      </h1>
      <p className="container_img">configurações iniciais do meu</p>
    </div>
  );
}

export default App;
