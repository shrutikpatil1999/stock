
import React from 'react';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

const Header = () => {
  
  const headerStyle = {
    backgroundImage: `url("../../images/img.jpeg")`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    textAlign: 'center',
    height: '60vh', // Adjust the height as needed
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
  };
  
  return (
    <div className="flex items-center justify-center h-screen" style={headerStyle}>
      <h1 className="text-4xl text-green-500">Stock Analyzer</h1>
      
    </div>
  );
};

export default Header;
