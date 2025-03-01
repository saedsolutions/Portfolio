// src/components/ui/button.js
import React from 'react';

export function Button({ children, className, ...props }) {
  return (
    <button 
      className={`rounded-md px-4 py-2 font-semibold transition-colors ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}