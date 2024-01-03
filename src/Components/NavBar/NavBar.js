import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const NavBar = () => {
  const {productQuantity} = useContext(CartContext);
  const [hidden] = useState(false);
  

  return (
    <div className="navbar-container">
      <div className="navbar-header bg-teal-500 pt-5 flex justify-center">
        <div>
          {/* Aquí va el logo */}
          <NavLink to={"/"} className="font-semibold text-3xl mx-10">
            <div>
            <h1 className="logo" style={{ color: 'black', textAlign: 'center'}}>Epcilon</h1>
            </div>
          </NavLink>
        </div>
      </div>
      <nav className="navbar-links bg-teal-500 p-6">
        {/* El NavBar */}
      <div className="justify-content-between align-items-center p-3">
        <div className="Navbar mx-auto">
          <ul className="nav">
            <li className="nav-item">
            <NavLink
                activeclassname="active"
                to={"/"}
                className="navbar-button">
                  Home
                </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
                activeclassname="active"
                to={"/category/Cremas"}
                className="navbar-button">
                  Cremas
                </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
                activeclassname="active"
                to={"/category/Masajeador"}
                className="navbar-button">
                  Masajes
                </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
                activeclassname="active"
                to={"/category/Peines"}
                className="navbar-button">
                  Peines
                </NavLink>
            </li>
            <li className="nav-item">
            </li>
          </ul>
        </div>
       <div className="ml-auto">
       </div>
     </div>
     <div style={{ display: 'flex', alignItems: 'right', justifyContent: 'flex-end' , marginRight: '50px'}}>
      <Link to={"/cart"}>
     <h2>Productos en el carrito: {productQuantity}</h2>
     </Link>
     </div>
      </nav>
      <div style={{ display: 'flex', alignItems: 'right', justifyContent: 'flex-end' , marginRight: '50px'}}>
            <CartWidget> </CartWidget>
      </div>
    </div>
  );
};  

export default NavBar;
