
import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
      <BrowserRouter>
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
      <Routes>
        <Route path='/' element={<Main isNavOpen={isNavOpen} /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
