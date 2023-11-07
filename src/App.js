import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import MiComponente from './Components/Pages/Home/Home';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/Pages/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <MiComponente></MiComponente>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>
    <div className="d-flex flex-column align-items-center mt-4">
    </div>
    </BrowserRouter>
  );
}

export default App;