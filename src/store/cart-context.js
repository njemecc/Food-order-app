import React from 'react';

const cartContext = React.createContext({
  item: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default cartContext;
