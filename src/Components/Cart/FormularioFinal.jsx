import React from 'react';
import Formulario from './Formulario';

const ThankYouForm = () => {
  const showThankYouMessage = () => {
    alert('¡Gracias por su Compra!');
    window.location.href = '/';
  };

  return <Formulario showThankYouMessage={showThankYouMessage} />;
};

export default ThankYouForm;
