import React, { useState } from 'react';
import './Formulario.css';

const Formulario = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    repeatEmail: '',
    phoneNumber: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para registrar el pedido o realizar las acciones necesarias con los datos del formulario
    console.log(formData); // Ejemplo: mostrando los datos en la consola
     // Mostrar un mensaje de agradecimiento
     alert('¡Gracias por su Compra!');

     // Redirigir al usuario al inicio de la página
     window.location.href = '/';
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      repeatEmail: '',
      phoneNumber: '',
    });
  };

  return (
    <div className="checkout-form">
      <h2>Formulario de Pedido</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Repetir Email:</label>
          <input
            type="email"
            name="repeatEmail"
            value={formData.repeatEmail}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Número de Teléfono:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="custom-button custom-button-success">
            Finalizar Pedido
          </button>
          <button type="button" onClick={handleClear} className="custom-button custom-button-danger">
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
