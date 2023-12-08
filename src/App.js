import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import CartWidget from "./Components/CartWidget/CartWidget";
import Style from "./App.css";
import CartProvider from "./context/CartProvider";
import Cart from "./Components/Cart/Cart";
import Formulario from "./Components/Cart/Formulario";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="CartWidget" element={<CartWidget />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Formulario" element={<Formulario />} /> {/* Define la ruta para el formulario */}
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
