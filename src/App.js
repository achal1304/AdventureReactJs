import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Navbar/>}></Route>
      </Routes>
    </BrowserRouter>
      {/* <Navbar/> */}
    </>
  );
}

export default App;
