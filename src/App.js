import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import MiComponente from './Components/Pages/Home/Home';
import IteamListContainer from './Components/IteamListContainer/IteamListContainer';

function App() {
  return (
    <div>
      <MiComponente></MiComponente>
      <NavBar></NavBar>
      <div className="d-flex flex-column align-items-center mt-4">
      <h1>
        <IteamListContainer Saludo="¡Hola," Persona="Profesor y Tutores!" />
      </h1>
    </div>
    </div>
  );
}

export default App;
