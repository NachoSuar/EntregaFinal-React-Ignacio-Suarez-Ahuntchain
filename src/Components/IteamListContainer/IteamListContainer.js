import React from 'react';

const IteamListContainer = ({ Saludo, Persona }) => {
  return (
    <div>
      <h1>
        {Saludo} {Persona}
      </h1>
    </div>
  );
};

export default IteamListContainer;
