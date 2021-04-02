import React from 'react'
import { Div, Text, Icon } from 'atomize'

interface Props {
  title: string
  iconName?: string
  iconColor?: string
  iconSize?: string
  iconOnClick(): any
}

export const PageHeader: React.FC<Props> = ({ title, iconName, iconColor, iconSize, iconOnClick }) => {
  return(
    <Div w='100%' h='10%' bg='white'>
      <Div h='100%' p={{ x: '1rem' }} d='flex' justify='space-between' align='center'>
        <Text textSize='1.5rem'> {title} </Text>
        {iconName
          ?
          <Icon
            onClick={() => iconOnClick()}
            name={iconName}
            color={iconColor}
            size={iconSize}
            cursor='pointer'
          />
          :
          false
        }
      </Div>
    </Div>
  )
}
