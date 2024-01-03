import React from 'react';

const ItemCount = ({ count, setCount, stock }) => {
  const onAdd = () => {
    if (count < stock) {
      setCount(prevCount => Math.min(prevCount + 1, stock)); // Incrementar hasta el stock máximo
    }
  };

  const onSubtract = () => {
    if (count > 0) {
      setCount(prevCount => Math.max(prevCount - 1, 0)); // Reducir la cantidad mínima a 0
    }
  };

  return (
    <div>
      <button onClick={onSubtract}>-</button>
      <span>{count}</span>
      <button onClick={onAdd}>+</button>
    </div>
  );
};

export default ItemCount;


