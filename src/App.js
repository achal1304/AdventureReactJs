import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Navbar/> */}
    </>
  );
}

export default App;
