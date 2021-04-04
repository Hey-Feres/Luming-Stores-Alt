import React from 'react'
import { Div, Button, Input, Text, Textarea, Icon } from 'atomize'
import { Center, FileUploader } from '../'
import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import '../../config/locales/i18n'

interface Props {
  handleSubmit: (product: FormData) => Promise<void>
  action?: string
}

export const ProductForm: React.FC<Props> = ({ handleSubmit, action }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [photos, setPhotos] = useState([])
  const [preview, setPreview] = useState([])

  const handleFormSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault()

    const formData = new FormData()

    formData.append('product[name]', name)
    formData.append('product[description]', description)
    let priceCents = parseFloat(price) * 100
    formData.append('product[price_attributes][value_cents]', priceCents.toString())
    formData.append('product[inventory_attributes][quantity]', stock)

    if (photos) formData.append('product[photos]', photos.toString())

    handleSubmit(formData)
  }

  return (
    <Div w='100%' h='35rem'>
      <form onSubmit={handleFormSubmit}>
        <FileUploader setPreview={setPreview} preview={preview} />

        <Input
          m={{ t: '1rem' }}
          h='2.3rem'
          w='100%'
          bg='white'
          border
          focusShadow='2'
          shadow='3'
          placeholder={t('product.attributes.name')}
          value={name}
          type='text'
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setName(evt.target.value)}
          required
        />

        <Input
          m={{ t: '1rem' }}
          h='2.3rem'
          w='100%'
          bg='white'
          border
          focusShadow='2'
          shadow='3'
          placeholder={t('product.attributes.price')}
          value={price}
          type='text'
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setPrice(evt.target.value)}
          required
        />

        <Input
          m={{ t: '1rem' }}
          h='2.3rem'
          w='100%'
          bg='white'
          border
          focusShadow='2'
          shadow='3'
          placeholder={t('product.attributes.stock')}
          value={stock}
          type='text'
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setStock(evt.target.value)}
          required
        />

        <Textarea
          m={{ t: '1rem' }}
          h='7rem'
          w='100%'
          bg='white'
          border='none'
          focusShadow='2'
          shadow='3'
          placeholder={t('product.attributes.description')}
          value={description}
          type='text'
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setDescription(evt.target.value)}
          required
        />

        <Center>
          <Button
            m={{ t: '2rem' }}
            h='1.8rem'
            w='40%'
            shadow='3'
            hoverShadow='1'
            bg='green'
            textColor='white'
          >
            {t('product.new.submit')}
          </Button>
        </Center>
      </form>
    </Div>
  )
}
