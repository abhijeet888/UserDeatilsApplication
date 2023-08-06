import React from 'react';
import './image.css';

export const Image = ({image, alt, height, width, radius}) => {
  console.log("KK");
  return (
    <img src={image} alt={alt} style={{height: height, width: width, borderRadius: radius }}></img>
  )
}
