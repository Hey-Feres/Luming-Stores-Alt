import React from 'react'
import { Div } from 'atomize'
import { Sidebar } from '../Sidebar'

export const MainComponent: React.FC = ({ children }) => {
  return(
    <>
      <Div d="flex" justify="space-between">
        <Sidebar />
        <Div w='85%' h='100vh' bg='white' overflow="scroll">
          { children }
        </Div>
      </Div>
    </>
  )
}
