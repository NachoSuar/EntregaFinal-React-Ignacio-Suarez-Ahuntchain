<div className="row m-auto">
<div className="col-12 col-md-6 text-center">
<img
variant="top"
src={details?.Imagen}
alt={details?.Categoria}
width={500}
height={400}
/>
</div>
<div className="col-12 col-md-6">
  <h1>Artículo {details?.Título}</h1>
  <h3>Categoria: {details?.Categoria}</h3>
  <h3>Precio: $ {details?.Precio}</h3>
  <h4>Descripción: {details?.Descripción}</h4>
  <h4>Stock: {details?.Stock}</h4>
</div>
<div className="col-12 cold-md-6">
   <button onClick={handleNavigation}>Terminar mi Compra</button>
   <button onClick={addToCart}>Agregar al Carrito</button>
   <ItemCount count={cantidad} setCount={setCantidad} />
</div>
</div>