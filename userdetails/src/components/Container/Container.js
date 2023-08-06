import React from 'react';
import "./container.css";

export const Container = ({children, height, width, color, radius, border}) => {
  return (
   <div style={{
    height,
    width,
    borderRadius: radius,
    backgroundColor: color,
    border
  }
  }>
     {children}
   </div>
  )
}
