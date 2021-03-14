import { useState } from 'react'
import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap'
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
    <div>
      <Row>
        <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }}>
          <h4>{titlePhrase}</h4>

          <form onSubmit={handleSubmit}>
            <InputGroup className="mt-3">
              <FormControl
                placeholder="Meu Nome"
                type="text"
                value={name}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setName(evt.target.value)}
                required
              />
            </InputGroup>

            <InputGroup className="mt-3">
              <FormControl
                placeholder="Meu e-mail"
                type="email"
                value={email}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setEmail(evt.target.value)}
                required
              />
            </InputGroup>

            <InputGroup className="mt-3">
              <FormControl
                placeholder="Senha"
                type="password"
                value={password}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setPassword(evt.target.value)}
                required
              />
            </InputGroup>

            <InputGroup className="mt-3">
              <FormControl
                placeholder="Confirmação de senha"
                type="password"
                value={passwordConfirmation}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setPasswordConfirmation(evt.target.value)}
                required
              />
            </InputGroup>

            <Button type="submit" className="btn btn-info mt-3 w-100">{buttonPhrase}</Button>

            <br/>

            <Link href="/Auth/Login">Já tenho uma conta</Link>
          </form>
        </Col>
      </Row>
    </div>
  )
}
