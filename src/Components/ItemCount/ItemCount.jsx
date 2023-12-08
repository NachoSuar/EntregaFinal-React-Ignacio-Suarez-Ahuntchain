// En ItemCount.jsx
import React from 'react';

const ItemCount = ({ count, setCount, stock }) => {
  const onAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const onSubtract = () => {
    if (count > 0) {
      setCount(count - 1);
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

