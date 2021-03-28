import React from 'react'

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { Text, Icon } from 'atomize'
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
      <RowStruct>
        {data.attributes.name}
      </RowStruct>
    )
  }

  return (
    <>
      <MainComponent>
        <PageHeader title='Produtos' backUrl='/' />
        <ListView data={data?.data} rowStruct={(data) => rowStruct(data)} meta={data?.meta} />
      </MainComponent>
    </>
  )
}

export default withAuth(ProductsList)
