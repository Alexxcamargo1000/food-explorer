import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'

interface AuthProviderProps {
  children: ReactNode
}

interface User {
  id: string
  name: string
  email: string
  password: string
  admin: boolean
}

interface dataProps {
  user?: User
  token?: string
}

const AuthContext = createContext({
  signIn: (email: string, password: string) => {},
  user: {} as User | undefined,
  signOut: () => {},
})

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<dataProps>({})

  async function signIn(email: string, password: string) {
    try {
      const response = await api.post('/session', { email, password })
      const { user, token } = response.data

      localStorage.setItem('@rocketFood:user', JSON.stringify(user))
      localStorage.setItem('@rocketFood:token', token)

      api.defaults.headers.common.Authorization = `Bearer ${token}`

      setData({ user, token })
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('não foi possível entrar')
      }
    }
  }

  function signOut() {
    setData({})
    localStorage.removeItem('@rocketFood:token')
    localStorage.removeItem('@rocketFood:user')
  }

  useEffect(() => {
    const token = localStorage.getItem('@rocketFood:token')
    const user = localStorage.getItem('@rocketFood:user')

    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user),
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { useAuth, AuthProvider }
