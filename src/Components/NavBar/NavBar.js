import React from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center p-3">
      <div className="Navbar mx-auto">
        <ul className="nav">
          <li className="nav-item">
            <Link to={`/category/home`} className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to={`/category/Electronics`} className="nav-link">Faciales</Link>
          </li>
          <li className="nav-item">
           <Link to={`/category/Jewelery`} className="nav-link">Corporales</Link>
          </li>
          <li className="nav-item">
            <Link to={`/category/men's-clothing`} className="nav-link">Cosmetría</Link>
          </li>
          <li className="nav-item">
            <Link to={`/category/woman's-clothing`} className="nav-link">Masajeadores</Link>
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



