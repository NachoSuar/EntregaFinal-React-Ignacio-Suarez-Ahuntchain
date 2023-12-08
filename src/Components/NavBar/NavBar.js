// import React from 'react';
// import './NavBar.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import CartWidget from '../CartWidget/CartWidget';
// import { Link } from 'react-router-dom';

// export const NavBar = () => {
//   return (
//     <div className="d-flex justify-content-between align-items-center p-3">
//       <div className="Navbar mx-auto">
//         <ul className="nav">
//           <li className="nav-item">
//             <Link to={`/category/home`} className="nav-link">Home</Link>
//           </li>
//           <li className="nav-item">
//             <Link to={`/category/Faciales`} className="nav-link">Faciales</Link>
//           </li>
//           <li className="nav-item">
//            <Link to={`/category/Corporales`} className="nav-link">Corporales</Link>
//           </li>
//           <li className="nav-item">
//             <Link to={`/category/Cosmetría`} className="nav-link">Cosmetría</Link>
//           </li>
//           <li className="nav-item">
//             <Link to={`/category/Masajeadores`} className="nav-link">Masajeadores</Link>
//           </li>
//           <li className="nav-item">
//             <Link to={`/category/Jewelery`} className="nav-link">Jewel</Link>
//           </li>
//         </ul>
//       </div>
//       <div className="ml-auto">
//         <CartWidget />
//       </div>
//     </div>
//   );
// };

// export default NavBar;

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
      <div className="d-flex justify-content-between align-items-center p-3">
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
                to={"/category/Tratamiento"}
                className="navbar-button">
                  Tratamientos
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
                to={"/category/Otros"}
                className="navbar-button">
                  Otros
                </NavLink>
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


//   return (
//     <div className="navbar-container">
//       <h1 className="logo">Epcilon</h1>
//       <nav>
//         <ul className="list-container">
//           <li>
//             <NavLink activeclassname="active"
//             to={'/category/electronics'}
//             className="navbar-button">
//               Electronicos
//             </NavLink>
//           </li>
//           <li>
//             <NavLink activeclassname="active"
//             to={"/category/jewelery"}
//             className="navbar-button">
//               Joyería
//             </NavLink>
//           </li>
//           <li>
//             <NavLink activeclassname="active"
//             to={"/category/men's-clothing"}
//             className="navbar-button">
//               <div onClick={() => console.log('click')}> Ropa de Hombre</div>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink activeclassname="active"
//             to={"/category/women's-clothing"}
//             className="navbar-button">
//               Ropa de Mujer
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };
// export default NavBar;

// import CartWidget from '../CartWidget/CartWidget';
// import './NavBar.css'
// import { NavLink } from 'react-router-dom';
// import { useState } from 'react';
// import { Navbar } from 'react-bootstrap';


// const NavBar = () => {

//   const [hidden, setHidden] = useState(false);

//   return (

// <div>
//   <div className="bg-teal-500 pt-5 flex justify-between items-center">
//     <NavLink to={"/"} className="font-semibold text-3xl text-black mx-10">
//       Epcilon
//     </NavLink>

//     <CartWidget />
//   </div>
//   <nav className="flex items-center justify-center flex-wrap bg-teal-500 p-6">
//     {/* Menú */}
//     <div className="block lg:hidden">
//       <div
//         onClick={() => setHidden(!hidden)}
//         className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
//       ></div>
//     </div>

//     {/* Enlaces */}
//     <div className={`${hidden ? "hidden" : "w-full flex justify-center lg:block lg:flex lg:items-center lg:w-auto"}`}>
//       <div className="text-sm lg:flex-grow lg:flex lg:justify-center">
//         <NavLink
//           to={"/category/plantas-interior"}
//           className={({ isActive }) =>
//             `block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white text-xl mr-4 ${
//               isActive &&
//               "bg-green-400 text-white font-bold rounded-xl py-1 px-2"
//             }`
//           }
//         >
//           Plantas de Interior
//         </NavLink>

//         {/* Resto de los NavLink */}
//         </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;