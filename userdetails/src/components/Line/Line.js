import React from 'react'

export const Line = ({color, border, height, width}) => {
  return (
    <div style={{
        border,
        backgroundColor: color,
        height,
        width,
    }}></div>
  )
}
