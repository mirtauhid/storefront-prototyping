import React from 'react';

const Controls = ({ setProducts, products }) => {
  const addProducts = (product) => {
    const newProducts = [...products, product];
    setProducts(newProducts);
  };

  const clearGuides = (e) => {
    e.preventDefault();
    document.getElementById('horTopTopLine').style.display = 'none';
    document.getElementById('horBotBotLine').style.display = 'none';
    document.getElementById('horTopBotLine').style.display = 'none';
    document.getElementById('horBotTopLine').style.display = 'none';
    document.getElementById('verLefRigLine').style.display = 'none';
    document.getElementById('verRigLefLine').style.display = 'none';
    document.getElementById('verLefLefLine').style.display = 'none';
    document.getElementById('verRigRigLine').style.display = 'none';
  };

  const clearProducts = (e) => {
    e.preventDefault();
    setProducts([]);
    document.getElementById('horTopTopLine').style.display = 'none';
    document.getElementById('horBotBotLine').style.display = 'none';
    document.getElementById('horTopBotLine').style.display = 'none';
    document.getElementById('horBotTopLine').style.display = 'none';
    document.getElementById('verLefRigLine').style.display = 'none';
    document.getElementById('verRigLefLine').style.display = 'none';
    document.getElementById('verLefLefLine').style.display = 'none';
    document.getElementById('verRigRigLine').style.display = 'none';
  };

  const filteredProducts = products.filter((product) =>
    product.id.includes('ITEM')
  );

  return (
    <div id='controls'>
      <div>
        <h3
          style={{
            textTransform: 'uppercase',
            letterSpacing: '1px',
            wordSpacing: '5px',
            fontWeight: '600',
          }}>
          Storefront Prototype Editor
        </h3>
      </div>
      <div>
        <button
          onClick={(e) =>
            addProducts({
              id: `ITEM0${filteredProducts.length + 1}`,
              type: 'window',
              title: 'Window',
              height: 60,
              width: 40,
              x: 0,
              y: 0,
              price: 20,
              bg: 'lightgrey',
              time: 'mo',
            })
          }>
          Add Window
        </button>
        <button
          onClick={(e) =>
            addProducts({
              id: `MUL0${products.length + 1}`,
              type: 'mullion',
              title: 'Mullion',
              height: 60,
              width: 3.6,
              x: 0,
              y: 0,
              price: 20,
              bg: 'lightblue',
              time: 'mo',
            })
          }>
          Add Mullion
        </button>
        <button onClick={(e) => clearGuides(e)}>Clear Guides</button>
        <button onClick={(e) => clearProducts(e)}>Clear All</button>
      </div>
    </div>
  );
};

export default Controls;
