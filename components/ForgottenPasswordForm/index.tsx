import React from 'react'
import { Div, Button, Input, Text } from 'atomize'
import { Center } from '../'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import UsersService from '../../services/users'
import { toast } from 'react-toastify'

interface ForgottenPasswordProps {
  titlePhrase: String,
  buttonPhrase: String
}

export const ForgottenPasswordForm: React.FC<ForgottenPasswordProps> = ({ titlePhrase, buttonPhrase }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault()

    try {
      const response = await UsersService.forgottenPassword({ email })

      dispatch()

      toast('Um email com instruções foi enviado para você!', {
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
      toast('E-mail inválido!', {
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
    <Div d='flex' justify='space-between' w='100%' h='100vh'>
      <Div d='flex' justify='center' align='center' w='50%' h='100vh' bg='primary'>
        <Text textColor='white' textSize='display1'> Luming </Text>
      </Div>

      <Div d='flex' justify='center' align='center' w='50%' h='100vh' bg='white'>
        <form onSubmit={handleSubmit}>
          <Center>
            <Text textSize='title'>{ titlePhrase }</Text>
          </Center>

          <Div m={{ t: '2rem' }} />

          <Input
            h='1.8rem'
            w='17rem'
            bg='white'
            border
            focusShadow='1'
            shadow='2'
            placeholder='Meu
            e-mail'
            value={email}
            type='email'
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
            required
          />

          <Div m={{ t: '1.5rem' }} />

          <Center>
            <Button h='1.8rem' w='75%' shadow='3' hoverShadow='1' type='submit'> { buttonPhrase } </Button>
          </Center>

          <br />

          <Center>
            <Link href='/Auth/Login'>Fazer login</Link>
          </Center>

          <Center>
            <Link href='/Auth/SignUp'>Criar minha conta</Link>
          </Center>
        </form>
      </Div>
    </Div>
  )
}
