import React, { useState } from 'react';
import Controls from './Controls';
import Editor from './Editor';
import Table from './Table';

const App = () => {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <Controls setProducts={setProducts} products={products} />
      <Editor products={products} setProducts={setProducts} />
      <Table products={products} setProducts={setProducts} />
    </div>
  );
};

export default App;
