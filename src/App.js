
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TopBar from './page/topBar/TopBar.jsx';
import HomePage from './page/homePage/HomePage';

function App() {
  return (
    <BrowserRouter>
       <TopBar/>
      <Routes>      
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
