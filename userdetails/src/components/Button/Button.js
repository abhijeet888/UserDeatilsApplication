import React from 'react'

// interface Props {
//   border: string;
//   color: string;
//   children?: React.ReactNode;
//   onClick: ()=>void;
//   height: string;
//   radius: string;
//   width: string;
// }


export const Button = ({
  border,
  color,
  children,
  onClick,
  height,
  radius,
  width
}) => {
  return (
    <div><button onClick={onClick} style={{
      border,
      backgroundColor: color,
      height,
      borderRadius: radius,
      width
    }}>{children}</button></div>
  )
}
