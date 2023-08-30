import React, { useState } from 'react';

function CustomList() {
  const [items, setItems] = useState([
    'arroz',
    'feijao',
    'ovo',
    'sal',
    'farinha',
    'bolacha',
    'manteiga',
    'detergente',
    'cerveja',
    'cebola'
  ]);

  return (
    <ul>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default CustomList;
