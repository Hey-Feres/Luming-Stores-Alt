import React from 'react'
import { useSelector } from 'react-redux'
import AuthState from '../../dtos/AuthState'
import User from '../../dtos/User'
import { DateParser } from '../../utils'
import { Div, Text, Icon } from 'atomize'

export const DashboardHeader: React.FC = () => {
  const dateParser = new DateParser
  const time = new Date().getHours()
  const loggedUser: User = useSelector((state: AuthState) => state.auth.loggedUser)
  let greeting

  if (time < 12 && time > 4) {
    greeting = `Bom Dia, ${loggedUser.name}`
  } else if(time < 18 && time > 11) {
    greeting = `Boa Tarde, ${loggedUser.name}`
  } else {
    greeting = `Boa Noite, ${loggedUser.name}`
  }

  return(
    <Div w='100%' h='10%' bg='white'>
      <Div h='100%' p={{ x: '2.5%' }} d='flex' justify='space-between'>
        <Div h='100%' w='50%' d='flex' flexDir='column' justify='center' align='flex-start'>
          <Text textColor='blue' textSize='.9rem'> {dateParser.dateString()} </Text>
          <Text textSize='2rem'> {greeting} </Text>
        </Div>

        <Div h='100%' w='50%' d='flex' flexDir='column' justify='center' align='flex-end'>
          <Icon name='UserCircle' color='gray5' size='60px' />
        </Div>
      </Div>
    </Div>
  )
}
