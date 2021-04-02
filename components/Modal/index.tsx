import React from 'react'
import { Modal, Icon, Div, Text } from 'atomize'

interface Props {
  title: string
  isOpen: boolean
  onClose(): any
}

export const _Modal: React.FC<Props> = ({ children, title, isOpen, onClose }) => {
  return(
    <Modal isOpen={isOpen} onClose={onClose} align='center' rounded='15px' p={{ x: '1.5%', y: '1%' }} bg='white'>
      <Div d='flex' justify='space-between' align='center' >
        <Text textSize='title'> {title} </Text>
        <Icon name='Close' size='20px' color='red' onClick={onClose} cursor='pointer' />
      </Div>

      <Div>
        {children}
      </Div>
    </Modal>
  )
}
