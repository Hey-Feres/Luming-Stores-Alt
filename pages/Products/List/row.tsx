import React from 'react'
import { Text, Image, Div, Icon, Button } from 'atomize'
import { RowStruct } from '../../../components'

interface Props {
  data: {
    attributes: {
      photos: []
      name: string,
      value: number
    }
  }
}

export const Row: React.FC<Props> = ({ data }) => {
    return(
      <RowStruct h='7rem' p={{ x: '1rem' }}>
        <Div h='7rem' w='70%' d='flex' justify='flex-start' align='center'>
          <Div w='5rem' h='6rem' d='flex' justify='center' align='center'>
            {
              data.attributes.photos != null && data.attributes.photos.length != 0 ?
                <Image style={{ objectFit: 'cover' }} src={`http://localhost:3001/${data.attributes.photos[0].url}`} />
              :
                <Icon name='Photo' size='20px' color='gray' />
            }
          </Div>

          <Div m={{ r: '1rem' }}>
            <Text textSize='1.3rem'> {data.attributes.name} </Text>
            <Text textSize='1rem' m={{ t: '.5rem' }}> R$ {data.attributes.value} </Text>
          </Div>
        </Div>

        <Div h='7rem' w='30%' d='flex' justify='flex-end' align='center'>
          <Button h='2.5rem' w='2.5rem' bg='white' rounded='circle' shadow='3' hoverShadow='1' m={{ r: '1rem' }}>
            <Icon name='Options' size='20px' color='blue' />
          </Button>

          <Button h='2.5rem' w='2.5rem' bg='white' rounded='circle' shadow='3' hoverShadow='1' m={{ r: '1rem' }}>
            <Icon name='Edit' size='20px' color='blue' />
          </Button>

          <Button h='2.5rem' w='2.5rem' bg='white' rounded='circle' shadow='3' hoverShadow='1'>
            <Icon name='Delete' size='20px' color='red' />
          </Button>
        </Div>
      </RowStruct>
    )
}
