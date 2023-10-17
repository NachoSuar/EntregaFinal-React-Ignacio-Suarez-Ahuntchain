import React from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CartWidget from '../CartWidget/CartWidget';


export const NavBar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center p-3">
      <div className="Navbar mx-auto">
        <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="index">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="faciales">Faciales</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="corporales">Corporales</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="inyectables">Cosmetría</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="cosmetría">Masajeadores</a>
        </li>
        </ul>
      </div>
      <div className="ml-auto">
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;


