import React, { useState } from 'react';
import './side_menu.css';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ textAlign: 'left' }}>
      <button className="menu-toggle" onClick={toggleMenu}>
        {"Menu"}
      </button>
      <div className={`side-menu ${isOpen ? 'open' : 'closed'}`}>
        <ul>
          <button style={{ backgroundColor: 'white', border: 'none'}}>AAPL</button><br/>
          <button style={{ backgroundColor: 'white', border: 'none'}}>PRU</button><br/>
          <button style={{ backgroundColor: 'white', border: 'none'}}>META</button><br/>
          <button style={{ backgroundColor: 'white', border: 'none'}}>ETC</button><br/>
        </ul>
      </div>
    </div>
  );
};



export default SideMenu;


