import './App.css';
import MainPage from "../src/views/MainPage"
import AboutPage from './views/AboutPage';
import { Route, Routes } from 'react-router-dom';
import Mission from './views/Mission';
import Ofertas from './views/Ofertas';

function App() {
  return (
    <>
     <div className='overflow-hidden'>
     <Routes>
        <Route path='/' element={< MainPage />} />
        <Route path='about' element={< AboutPage />} />
        <Route path='mission' element={<Mission />} />
        <Route path='ofertas' element={<Ofertas />} />
      </Routes>
     </div>

    </>
  );
}

export default App;
