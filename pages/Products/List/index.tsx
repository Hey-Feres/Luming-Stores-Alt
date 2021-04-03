import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { Div, Button } from 'atomize'
import { MainComponent, ListView, PageHeader, Modal, ProductForm, withAuth } from '../../../components'
import { Row } from './row'
import { toast } from 'react-toastify'
import useSWR from 'swr'
import ProductsService from '../../../services/products'
import { UrlService } from '../../../utils'
import Product from '../../../dtos/Product'
import { useTranslation } from 'react-i18next'
import '../../../config/locales/i18n'

const defaultUrl = '/api/v1/admin/products'

const ProductsList: React.FC = () => {
  const { t } = useTranslation()

  const [url, setUrl] = useState(defaultUrl)
  const [modalVisible, setModalVisibility] = useState(false)

  const search = useSelector(state => state.search)
  const router = useRouter()

  const { data, error, mutate } = useSWR(url, ProductsService.index)

  useEffect(() => {
    setUrl(defaultUrl + UrlService.execute({ page: router.query.page, search }))
  }, [search, router.query.page])

  if (error) {
    toast.error('Erro ao carregar produtos')
    console.log(error)
  }

  const switchModalVisibility = () => setModalVisibility(!modalVisible)

  const openProductFormModal = () => switchModalVisibility()

  const closeProductFormModal = () => switchModalVisibility()

  const rowStruct = (data) => { return <Row data={data} /> }

  return (
    <>
      <MainComponent>
        <PageHeader
          title={t('product.other')}
          iconName='Plus'
          iconColor='blue'
          iconSize='25px'
          iconOnClick={() => openProductFormModal()}
        />

        <ListView
          data={data?.data}
          rowStruct={(data) => rowStruct(data)}
          meta={data?.meta}
        />

        <Modal title={t('product.new.title')} isOpen={modalVisible} onClose={() => closeProductFormModal()}>
          <ProductForm />
        </Modal>
      </MainComponent>
    </>
  )
}

export default withAuth(ProductsList)
