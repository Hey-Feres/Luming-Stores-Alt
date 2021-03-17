import React from 'react'
import { InputGroup, FormControl, Row, Col } from 'react-bootstrap'
import { Div, Button, Input, Text } from 'atomize'
import { Center } from '../'
import Link from 'next/link'
import AuthState from '../../dtos/AuthState'
import User from '../../dtos/User'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { setLoggedUser } from '../../store/modules/auth/reducer'
import UsersService from '../../services/users'
import { toast } from 'react-toastify'

interface LoginProps {
  titlePhrase: String,
  buttonPhrase: String
}

export const LoginForm: React.FC<LoginProps> = ({ titlePhrase, buttonPhrase }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const loggedUser: User = useSelector((state: AuthState) => state.auth.loggedUser)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)
  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault()

    try {
      const response = await UsersService.signIn({ email, password })

      const { id, email: userEmail, name } = response.data.data

      const user = {
        id,
        name,
        email: userEmail
      }

      dispatch(setLoggedUser(user))

      toast('Login realizado com sucesso!', {
        position: 'top-right',
        autoClose: 5000,
        closeButton: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

      router.push('/Dashboard/')
    } catch (err) {
      toast('E-mail ou senha inválidos!', {
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

  useEffect(() => {
    if(loggedUser) {
      setEmail(loggedUser.email);
      if(passwordRef && passwordRef.current) {
        passwordRef.current.focus();
      }
    }
  }, [loggedUser])

  return (
    <Div d='flex' justify='space-between' w='100%' h='100vh'>
      <Div d='flex' justify='center' align='center' w='50%' h='100vh' bg='primary'>
        <Text textColor='white' textSize='display1'> Luming </Text>
      </Div>

      <Div d='flex' justify='center' align='center' w='50%' h='100vh' bg='white'>
        <form onSubmit={handleSubmit}>
          <Text textSize='title'>{ titlePhrase }</Text>

          <Div m={{ t: '2rem' }} />

          <Input h='1.8rem' w='100%' bg='white' border focusShadow='1' shadow='2' placeholder='Meu e-mail' value={email} type='email' onChange={ (evt: React.ChangeEvent<HTMLInputElement>) => setEmail(evt.target.value)} required />

          <Div m={{ t: '1rem' }} />

          <Input h='1.8rem' w='100%' bg='white' border focusShadow='1' shadow='2' ref={passwordRef} placeholder='Senha' value={password} type='password' onChange={ (evt: React.ChangeEvent<HTMLInputElement>) =>setPassword(evt.target.value) } required />

          <Div m={{ t: '1.5rem' }} />

          <Center>
            <Button h='1.8rem' w='75%' shadow='3' hoverShadow='1' type='submit'> { buttonPhrase } </Button>
          </Center>

          <br />

          <Center>
            <Link href="/Auth/PasswordRecovery">Esqueci minha senha</Link>
          </Center>

          <Center>
            <Link href="/Auth/SignUp">Criar minha conta</Link>
          </Center>
        </form>
      </Div>
    </Div>
  )
}
