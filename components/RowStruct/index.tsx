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
      bg={'white' || bg}
      w={'100%' || w}
      h={'4rem' || h}
      border={{ y: '1px solid' } || border}
      borderColor={'#f1f1f1' || borderColor}
      d={'flex' || d}
      justify={'space-between' || justify}
      align={'center' || align}
      p={{ x: '.5rem' } || p}
    >
      { children }
    </Div>
  )
}
