import { faBars, faGripLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Draggable from 'react-draggable';

const Box = ({ pro, products, setProducts, guideLine }) => {
  const trackPosition = (data, e, pro) => {
    console.log(products);
    const product = products.find((p) => p.id === pro.id);
    const allProducts = products?.filter((p) => p !== product);
    product.x = e.x;
    product.y = e.y;

    allProducts.push(product);
    setProducts(allProducts);
    guideLine(e.x, e.y, product.height, product.width);
  };

  const nameHandler = (e, id) => {
    e.preventDefault();
    const product = products.find((p) => p.id === id);
    const newProducts = products?.filter((p) => p !== product);
    product.title = e.target.value || 'Window';
    newProducts.push(product);
    setProducts(newProducts);
  };

  const heightHandler = (e, id) => {
    e.preventDefault();
    if (e.target.value >= 24) {
      const product = products.find((p) => p.id === id);
      const newProducts = products?.filter((p) => p !== product);
      product.height = Number(e.target.value) || 60;
      newProducts.push(product);
      setProducts(newProducts);
    }
  };

  const widthHandler = (e, id) => {
    e.preventDefault();
    if (e.target.value >= 24) {
      const product = products.find((p) => p.id === id);
      const newProducts = products?.filter((p) => p !== product);
      product.width = Number(e.target.value) || 40;
      newProducts.push(product);
      setProducts(newProducts);
    }
  };

  const priceHandler = (e, id) => {
    e.preventDefault();
    const product = products.find((p) => p.id === id);
    const newProducts = products?.filter((p) => p !== product);
    product.price = Number(e.target.value) || 100;
    newProducts.push(product);
    setProducts(newProducts);
  };

  return (
    <Draggable
      handle='#handle'
      bounds='parent'
      scale={1}
      onDrag={(data, e) => trackPosition(data, e, pro)}>
      <div
        className='box'
        style={{
          height: pro.height * 5,
          width: pro.width * 5,
          background: pro.bg,
        }}>
        {pro.type === 'window' ? (
          <div>
            {pro.height < 36 || pro.width < 24 ? (
              <div id='handle'>
                <FontAwesomeIcon icon={faGripLines} size='2x' />
              </div>
            ) : (
              <div id='handle'>
                <FontAwesomeIcon icon={faBars} size='2x' />
              </div>
            )}
          </div>
        ) : (
          <div id='handle'>
            <div>
              <FontAwesomeIcon icon={faBars} size='1x' />
            </div>
            <div style={{ marginTop: '-10px' }}>
              <FontAwesomeIcon icon={faBars} size='1x' />
            </div>
          </div>
        )}
        <div
          style={{
            cursor: 'text',
            userSelect: 'text',
            textAlign: 'center',
            maxWidth: '100%',
            margin: '0 auto',
          }}>
          {pro.type === 'window' ? (
            <input
              className='textInput'
              type='text'
              name='title'
              id='title'
              placeholder={pro.title}
              onChange={(e) => nameHandler(e, pro.id)}
              onBlur={(e) => (e.target.value = '')}
            />
          ) : (
            <div></div>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '100px',
            marginTop: '4px',
          }}>
          {pro.type === 'window' ? (
            <input
              className='textInput'
              type='text'
              name='height'
              id='height'
              placeholder={`${pro.height}"`}
              onChange={(e) => heightHandler(e, pro.id)}
              onBlur={(e) => (e.target.value = '')}
            />
          ) : (
            <div style={{ transform: 'rotate(270deg)', marginTop: '15px' }}>
              <input
                style={{
                  height: '100%',
                  fontSize: '14px',
                  padding: '0px 3px',
                  minWidth: '40px',
                }}
                className='textInput'
                type='text'
                name='height'
                id='height'
                placeholder={`${pro.height}"`}
                onChange={(e) => heightHandler(e, pro.id)}
                onBlur={(e) => (e.target.value = '')}
              />
            </div>
          )}
          {pro.type === 'window' ? 'X' : ''}
          {pro.type === 'window' ? (
            <input
              className='textInput'
              type='text'
              name='width'
              id='width'
              placeholder={`${pro.width}"`}
              onChange={(e) => widthHandler(e, pro.id)}
              onBlur={(e) => (e.target.value = '')}
            />
          ) : (
            <div></div>
          )}
        </div>
        {pro.type === 'window' ? (
          <input
            style={{ marginTop: '4px', width: '100%' }}
            className='textInput'
            type='text'
            name='height'
            id='height'
            placeholder={`$${pro.price}/mo`}
            onChange={(e) => priceHandler(e, pro.id)}
            onBlur={(e) => (e.target.value = '')}
          />
        ) : (
          <div></div>
        )}
      </div>
    </Draggable>
  );
};

export default Box;
