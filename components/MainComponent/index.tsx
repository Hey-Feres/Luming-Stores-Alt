import React from 'react'
import { Div } from 'atomize'
import { Sidebar } from '../Sidebar'

export const MainComponent: React.FC = ({ children }) => {
  const width = { xs: '100%', sm: '100%', md: '100%', lg: '85%', xl: '85%' }

  return(
    <>
      <Div d='flex' justify='space-between'>
        <Sidebar />
        <Div w={width} h='100vh' bg='white' overflow='scroll'>
          { children }
        </Div>
      </Div>
    </>
  )
}
