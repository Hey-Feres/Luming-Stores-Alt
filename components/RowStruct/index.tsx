import React from 'react'
import { Div } from 'atomize'

interface RowStructProps {
  bg: string
  w: string
  h: string
  border: string
  borderColor: string
  d: string
  justify: string
  align: string
  p: string
}

export const RowStruct: React.FC<RowStructProps> = ({ bg, w, h, border, borderColor, d, justify, align, p, children }) => {
  return(
    <Div
      bg={bg || 'white'}
      w={w || '100%'}
      h={h || '4rem'}
      border={border || { y: '1px solid' }}
      borderColor={borderColor || '#f1f1f1'}
      d={d || 'flex'}
      justify={justify || 'space-between'}
      align={align || 'center'}
      p={p || { x: '.5rem' }}
    >
      { children }
    </Div>
  )
}
