import './CSS/reset.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Demo01 from './pages/Demo01/index.tsx';
import Demo02 from './pages/Demo02/index.tsx';
import Error from './pages/Error/index.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Demo01 />} />
      <Route path='/demo02' element={<Demo02 />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
