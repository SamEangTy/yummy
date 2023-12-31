
import { BrowserRouter } from 'react-router-dom';
import TopBar from './page/topBar/TopBar.jsx';
import HomePage from './page/homePage/HomePage';
import AboutPage from './page/aboutPage/AboutPage';
import MenuPage from './page/menuPage/MenuPage';
import FooterPage from './page/footerPage/FooterPage';
// import {} from 'reac'
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
      <FooterPage/>

    </BrowserRouter>
  );
}

export default App;
