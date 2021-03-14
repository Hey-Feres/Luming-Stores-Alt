import React from 'react'
import { Div, Text, Tag } from 'atomize'
import { DateParser } from '../../utils'

export const Sidebar: React.FC = () => {
  const dateParser = new DateParser

  return(
    <Div w='15%' h='100vh' bg='gray6'>
      <Div w='100%' h='10%'>
        <Div h='100%' p={{ x: '3%' }} d='flex' flexDir='column' justify='center' align='center'>
          <Div w='100%' h='100%' d='flex' justify='space-between' align='center'>
            <Tag shadow='2' bg='white' textColor='primary' rounded='circle' p={{ x: '1.5rem' }} textSize='body'> { dateParser.clockString() } </Tag>
            <Tag shadow='2' bg='white' textColor='red' rounded='circle' p={{ x: '1.5rem' }} textSize='body'> Beta </Tag>
          </Div>
        </Div>
      </Div>

      <Div w='100%' h='90%' bg="blue">
      </Div>
    </Div>
  )
}
