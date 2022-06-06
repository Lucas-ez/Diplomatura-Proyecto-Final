import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/layout/Header';

import HomePage from './pages/HomePage';
import AsistentesPage from './pages/AsistentesPage';
import SmartHomePage from './pages/SmartHomePage';
import SmartClothesPage from './pages/SmartClothesPage';
import AboutUsPage from './pages/AboutUsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path='asistentes' element={<AsistentesPage/>}/>
          <Route path='smarthome' element={<SmartHomePage/>}/>
          <Route path='smartclothes' element={<SmartClothesPage/>}/>
          <Route path='aboutus' element={<AboutUsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
