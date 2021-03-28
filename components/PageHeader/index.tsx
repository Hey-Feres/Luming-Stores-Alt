import React from 'react'
import { Div, Text } from 'atomize'

interface Props {
  title: string
}

export const PageHeader: React.FC<Props> = ({ title }) => {
  return(
    <Div w='100%' h='10%' bg='white'>
      <Div h='100%' p={{ x: '1rem' }} d='flex' justify='flex-start' align='center'>
        <Text textSize='1.5rem'> {title} </Text>
      </Div>
    </Div>
  )
}
