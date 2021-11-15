import React from 'react';

const Table = ({ products, setProducts }) => {
  const tenureHandler = (e, id) => {
    e.preventDefault();
    const product = products.find((p) => p.id === id);
    const newProducts = [...products];
    const index = newProducts.indexOf(product);
    newProducts[index].time = e.target.value || 'mo';
    setProducts(newProducts);
  };
  const items = products.filter((p) => p.id.includes('ITEM'));
  return (
    <div>
      <div>
        <h3
          style={{
            textTransform: 'uppercase',
            letterSpacing: '1px',
            wordSpacing: '5px',
            fontWeight: '600',
          }}>
          Storefront Products Table
        </h3>
      </div>
      <div>
        <table id='proTable'>
          <thead>
            <th>Product ID</th>
            <th>Product Title</th>
            <th>Product Size</th>
            <th>Product Price</th>
            <th>Product Tenure</th>
          </thead>
          {products.length ? (
            <tbody>
              {items.map((product) => {
                return (
                  <tr>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>
                      {product.height}" X {product.width}"
                    </td>
                    {product.time === 'mo' && (
                      <td>
                        ${Math.round(product.price)}/{product.time}
                      </td>
                    )}
                    {product.time === 'yr' && (
                      <td>
                        ${Math.round(product.price * 12)}/{product.time}
                      </td>
                    )}
                    {product.time === 'wk' && (
                      <td>
                        ${Math.round((product.price / 30) * 7)}/{product.time}
                      </td>
                    )}
                    <td>
                      {product.time === 'mo' && (
                        <select
                          onChange={(e) => tenureHandler(e, product.id)}
                          name='tenure'
                          id='tenure'>
                          <option value='mo'>Monthly</option>
                          <option value='yr'>Yearly</option>
                          <option value='wk'>Weekly</option>
                        </select>
                      )}
                      {product.time === 'yr' && (
                        <select
                          onChange={(e) => tenureHandler(e, product.id)}
                          name='tenure'
                          id='tenure'>
                          <option value='yr'>Yearly</option>
                          <option value='mo'>Monthly</option>
                          <option value='wk'>Weekly</option>
                        </select>
                      )}
                      {product.time === 'wk' && (
                        <select
                          onChange={(e) => tenureHandler(e, product.id)}
                          name='tenure'
                          id='tenure'>
                          <option value='wk'>Weekly</option>
                          <option value='mo'>Monthly</option>
                          <option value='yr'>Yearly</option>
                        </select>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default Table;
