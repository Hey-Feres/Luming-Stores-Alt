import { useState } from 'react'
import { Div, Button, Input, Text } from 'atomize'
import { Center } from '../'
import Link from 'next/link'
import UsersService from '../../services/users'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setLoggedUser } from '../../store/modules/auth/reducer'

interface SignUpProps {
  titlePhrase: string
  buttonPhrase: string
}

export const SignUpForm: React.FC<SignUpProps> = ({ titlePhrase, buttonPhrase }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const dispatch = useDispatch()
  const handleSubmit = async(evt: React.FormEvent):Promise<void> => {
    evt.preventDefault()

    console.info('Handle Submit')

    if(password !== passwordConfirmation) {
      toast.error('A senha e a confirmação de senha devem ser iguais!')
      return
    }
    try {
      console.log(`Name: ${name}`)
      console.log(`Email: ${email}`)
      console.log(`Password: ${password}`)
      console.log(`PasswordConfirmation: ${passwordConfirmation}`)
      await UsersService.signUp({
        name,
        email,
        password,
        password_confirmation: passwordConfirmation
      })
      console.info('After SignUp')
      toast.info('Registro realizado com sucesso! Para continuar faça seu login.')

      dispatch(setLoggedUser({
        id: 0,
        name,
        email
      }))

      setName('')
      setEmail('')
      setPassword('')
      setPasswordConfirmation('')
    } catch(err) {
      if(err.response.data.errors) {
        toast.warning(err.response.data.errors.full_messages[0])
      }
      console.log(err.response)
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

          <Input
            placeholder='Meu Nome'
            type='text'
            value={name}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setName(evt.target.value)}
            required
            m={{ t: '2rem' }}
            h='1.8rem'
            w='17rem'
            bg='white'
            border
            focusShadow='1'
            shadow='2'
          />

          <Input
            placeholder='Meu e-mail'
            type='email'
            value={email}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setEmail(evt.target.value)}
            required
            m={{ t: '1rem' }}
            h='1.8rem'
            w='17rem'
            bg='white'
            border
            focusShadow='1'
            shadow='2'
          />

          <Input
            placeholder='Senha'
            type='password'
            value={password}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setPassword(evt.target.value)}
            required
            m={{ t: '1rem' }}
            h='1.8rem'
            w='17rem'
            bg='white'
            border
            focusShadow='1'
            shadow='2'
          />

          <Div m={{ t: '1.5rem' }} />

          <Center>
            <Button h='1.8rem' w='75%' shadow='3' hoverShadow='1' type='submit'> { buttonPhrase } </Button>
          </Center>

          <br/>

          <Center>
            <Link href='/Auth/Login'>Já tenho uma conta</Link>
          </Center>
        </form>
      </Div>
    </Div>
  )
}


