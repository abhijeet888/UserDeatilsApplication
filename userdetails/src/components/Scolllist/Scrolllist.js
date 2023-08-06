import React from 'react';
import { Image } from '../Image/Image';
import "./scrolllist.css";
import { Button } from '../Button/Button';


export const Scrolllist = ({children, height, width, radius}) => {

  return (
    <div style={{
      height,
      width,
      borderRadius: radius,
      overflow: "auto"
    }
    }>{children}</div>
  );

}
