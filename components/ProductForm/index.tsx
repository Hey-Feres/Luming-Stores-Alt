import React from 'react'
import { Div, Button, Input, Text } from 'atomize'
import { Center } from '../'
import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

interface Props {
}

export const ProductForm: React.FC<Props> = ({ }) => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')

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
    <Div w='100%' h='30rem'>
      <form onSubmit={handleSubmit}>
        <Div m={{ t: '2rem' }} />

        <Input h='2.3rem' w='100%' bg='white' border focusShadow='2' shadow='3' placeholder='Nome do Produto' value={name} type='text' onChange={ (evt: React.ChangeEvent<HTMLInputElement>) => setName(evt.target.value)} required />

        <Div m={{ t: '1rem' }} />
        <Button h='1.8rem' w='40%' shadow='3' hoverShadow='1' bg='green' textColor='white'> Salvar </Button>
      </form>
    </Div>
  )
}
