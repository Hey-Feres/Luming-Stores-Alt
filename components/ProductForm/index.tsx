import React from 'react'
import { Div, Button, Input, Text, Textarea, Icon } from 'atomize'
import { Center, FileUploader } from '../'
import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import '../../config/locales/i18n'

interface Props {
}

export const ProductForm: React.FC<Props> = ({ }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const hiddenFileInput = useRef(null)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [photo, setPhoto] = useState('')
  const [image, setImage] = useState<File>()

  const handleClick = event => hiddenFileInput.current.click()

  const handleChange = event => setPhoto(event.target.files)

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault()

    try {

      toast('Salvo com Sucesso', {
        position: 'top-right',
        autoClose: 5000,
        closeButton: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } catch (err) {
      toast('Erro ao salvar!', {
        position: 'top-right',
        autoClose: 5000,
        closeButton: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  return (
    <Div w='100%' h='35rem'>
      <form onSubmit={handleSubmit}>
        <FileUploader setImage={setImage} image={photo} />

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
