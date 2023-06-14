
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TopBar from './page/topBar/TopBar.jsx';
import HomePage from './page/homePage/HomePage';
import AboutPage from './page/aboutPage/AboutPage';
import MenuPage from './page/menuPage/MenuPage';

function App() {
  return (
    <BrowserRouter>
       <TopBar/>
       <HomePage/>
      {/* <Routes>      
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes> */}
      <AboutPage/>
      <MenuPage/>
    </BrowserRouter>
  );
}

export default App;
