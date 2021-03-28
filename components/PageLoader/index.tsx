import React from 'react'
import { Div, Icon, Text } from 'atomize'
import { Center } from '../'

export const PageLoader: React.FC = () => {
  return(
    <Div w='100%' h='80%' bg='white' d='flex' justify='center' align='center'>
      <Center>
        <Icon name='Loading' size='25px' color='primary' />
        <Text> Carregando </Text>
      </Center>
    </Div>
  )
}
