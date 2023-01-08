import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
      </Routes>
    </BrowserRouter>
      {/* <Navbar/> */}
    </>
  );
}

export default App;
