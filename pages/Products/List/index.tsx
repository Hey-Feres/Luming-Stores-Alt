import React from 'react'

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { Text, Image, Div, Icon, Button } from 'atomize'
import { MainComponent, ListView, RowStruct, PageHeader, withAuth } from '../../../components'

import { toast } from 'react-toastify'

import useSWR from 'swr'

import ProductsService from '../../../services/products'
import { UrlService } from '../../../utils'
import Product from '../../../dtos/Product'

const defaultUrl = '/api/v1/admin/products'

const ProductsList: React.FC = () => {
  const [url, setUrl] = useState(defaultUrl)

  const search = useSelector(state => state.search)
  const router = useRouter()

  const { data, error, mutate } = useSWR(url, ProductsService.index)

  useEffect(() => {
    setUrl(defaultUrl + UrlService.execute({ page: router.query.page, search }))
  }, [search, router.query.page])

  const handleShow = (id: number) => {
    setShow(true)
    setProductToRemove(id)
  }

  if (error) {
    toast.error('Erro ao listar produtos')
    console.log(error)
  }

  const rowStruct = (data) => {
    return(
      <RowStruct h='7rem' p={{ x: '1rem' }}>
        <Div h='7rem' w='70%' d='flex' justify='flex-start' align='center'>
          <Div w='5rem' h='6rem' d='flex' justify='center' align='center'>
            {
              data.attributes.photo != null ?
                <Image style={{ objectFit: 'cover' }} src={`http://localhost:3001/${data.attributes.photo.url}`} />
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

  return (
    <>
      <MainComponent>
        <PageHeader title='Produtos' />
        <ListView data={data?.data} rowStruct={(data) => rowStruct(data)} meta={data?.meta} />
      </MainComponent>
    </>
  )
}

export default withAuth(ProductsList)
