import React, { useState, useEffect } from 'react';

export const Modal = ({ isOpen, onClose, children, ...restProps}) => {

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)', /* Semi-transparent background */
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000, /* Ensure the modal is above other content */
  }
  
  const modalStyle = {
    fontFamily: 'Viga',
    background: '#908A27',
    padding: 20,
    borderRadius: 8,
    width: '80%',
    maxWidth: 700,
    position: 'relative',
  }
  

  const modalCloseStyle = {
    position: 'absolute',
    top: 10,
    right: 10,
    background: 'transparent',
    border: 'none',
    fontSize: 24,
    cursor: 'pointer',
  }
  

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'auto'; 
    }
    return () => document.body.style.overflow = 'auto'; // Reset on unmount
  }, [isOpen]);

  if (!isOpen) return null; // Don't render if modal is not open

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button style={modalCloseStyle} onClick={onClose}>X</button>
        <h2 style={{marginTop: 0}}>Form Inside Modal</h2>
        {children}
      </div>
    </div>
  );
};
