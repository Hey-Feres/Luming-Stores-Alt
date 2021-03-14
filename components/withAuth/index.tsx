import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Cookie from 'js-cookie'

import AuthState from '../../dtos/AuthState'
import User from '../../dtos/User'
import ApiData from '../../dtos/ApiData'

export const withAuth = (Component) => {
  const Auth = (props) => {
    const router = useRouter()
    const loggedUser: User = useSelector((state: AuthState) => state.auth.loggedUser)
    const apiData: ApiData = JSON.parse(Cookie.get('@api-data'))
    const accessDenied = !loggedUser || !apiData || !apiData['access-token'] || apiData['access-token'] === ''

    if (accessDenied) { router.push('/Auth/Login') }

    return <Component {...props} />
  }

  if(Component.getServerSideProps) {
    Auth.getServerSideProps = Component.getServerSideProps
  }

  return Auth
}
