import React from 'react';
import Box from './Box';

const Editor = ({ products, setProducts }) => {
  function guideLine(x, y, h, w) {
    // Horizontal Lines

    const horTopTopLine = products.filter((p) => p.y === y);
    const httl = document.getElementById('horTopTopLine');
    if (horTopTopLine.length > 1) {
      httl.style.display = 'block';
      httl.style.position = 'absolute';
      httl.style.background = 'red';
      httl.style.width = '100vw';
      httl.style.height = '1px';
      httl.style.top = y + 'px';
      httl.style.left = 0 + 'px';
    } else {
      httl.style.display = 'none';
    }

    const horBotBotLine = products.filter(
      (p) => p.y + p.height * 5 === y + h * 5
    );
    const hbbl = document.getElementById('horBotBotLine');
    if (horBotBotLine.length > 1) {
      hbbl.style.display = 'block';
      hbbl.style.position = 'absolute';
      hbbl.style.background = 'blue';
      hbbl.style.width = '100vw';
      hbbl.style.height = '1px';
      hbbl.style.top = y + h * 5 + 'px';
      hbbl.style.left = 0 + 'px';
    } else {
      hbbl.style.display = 'none';
    }

    const horTopBotLine = products.filter((p) => p.y + p.height * 5 === y);
    const htbl = document.getElementById('horTopBotLine');
    if (horTopBotLine.length >= 1) {
      htbl.style.display = 'block';
      htbl.style.position = 'absolute';
      htbl.style.background = 'blue';
      htbl.style.width = '100vw';
      htbl.style.height = '1px';
      htbl.style.top = y + 'px';
      htbl.style.left = 0 + 'px';
    } else {
      htbl.style.display = 'none';
    }

    const horBotTopLine = products.filter((p) => p.y === y + h * 5);
    const hbtl = document.getElementById('horBotTopLine');
    if (horBotTopLine.length >= 1) {
      hbtl.style.display = 'block';
      hbtl.style.position = 'absolute';
      hbtl.style.background = 'red';
      hbtl.style.width = '100vw';
      hbtl.style.height = '1px';
      hbtl.style.top = y + h * 5 + 'px';
      hbtl.style.left = 0 + 'px';
    } else {
      hbtl.style.display = 'none';
    }

    // Vertical Lines

    const verLefLefLine = products.filter((p) => p.x === x);
    const vlll = document.getElementById('verLefLefLine');
    if (verLefLefLine.length > 1) {
      vlll.style.display = 'block';
      vlll.style.position = 'absolute';
      vlll.style.background = 'red';
      vlll.style.width = '1px';
      vlll.style.height = '100vh';
      vlll.style.left = x + 'px';
    } else {
      vlll.style.display = 'none';
    }

    const verLefRigLine = products.filter((p) => p.x + p.width * 5 === x);
    const vlrl = document.getElementById('verLefRigLine');
    if (verLefRigLine.length >= 1) {
      vlrl.style.display = 'block';
      vlrl.style.position = 'absolute';
      vlrl.style.background = 'red';
      vlrl.style.width = '1px';
      vlrl.style.height = '100vh';
      vlrl.style.left = x + 'px';
    } else {
      vlrl.style.display = 'none';
    }

    const verRigLefLine = products.filter((p) => p.x === x + w * 5);
    const vrll = document.getElementById('verRigLefLine');
    if (verRigLefLine.length >= 1) {
      vrll.style.display = 'block';
      vrll.style.position = 'absolute';
      vrll.style.background = 'red';
      vrll.style.width = '1px';
      vrll.style.height = '100vh';
      vrll.style.left = x + w * 5 + 'px';
    } else {
      vrll.style.display = 'none';
    }

    const verRigRigLine = products.filter(
      (p) => p.x + p.width * 5 === x + w * 5
    );
    const vrrl = document.getElementById('verRigRigLine');
    if (verRigRigLine.length > 1) {
      vrrl.style.display = 'block';
      vrrl.style.position = 'absolute';
      vrrl.style.background = 'red';
      vrrl.style.width = '1px';
      vrrl.style.height = '100vh';
      vrrl.style.left = x + w * 5 + 'px';
    } else {
      vrrl.style.display = 'none';
    }
  }
  return (
    <div id='parent'>
      {products.map((pro) => {
        return (
          <Box
            key={pro.id}
            pro={pro}
            products={products}
            setProducts={setProducts}
            guideLine={guideLine}
          />
        );
      })}
      <div id='horTopTopLine'></div>
      <div id='horBotBotLine'></div>
      <div id='horTopBotLine'></div>
      <div id='horBotTopLine'></div>
      <div id='verLefRigLine'></div>
      <div id='verRigLefLine'></div>
      <div id='verLefLefLine'></div>
      <div id='verRigRigLine'></div>
    </div>
  );
};

export default Editor;
