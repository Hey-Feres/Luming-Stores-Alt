import api from './api'
import User from '../dtos/User'

interface SignInData {
  email: string
  password: string
}

interface SignInResponse {
  data: User
}

interface SignUpData {
  name: string
  email: string
  password: string
  password_confirmation: string
}

interface ForgottenPasswordData {
  email: string
}

const UsersService = {
  signIn: ({ email, password }: SignInData) => api.post<void>('/admin/auth/sign_in', { email, password }),
  signUp: ({ name, email, password, password_confirmation }: SignUpData) => api.post<void>('/admin/auth', { name, email, password, password_confirmation}),
  forgottenPassword: ({ email }: ForgottenPasswordData) => api.post<void>('/admin/auth/sign_in', { email })
}

export default UsersService
