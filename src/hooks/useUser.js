import { useContext, useCallback, useState } from "react"
import Context from "../context/UserContext"
import loginService from '../services/login'
import signupService from '../services/signup'

export default function useUser () {
  const { jwt, setJwt} = useContext(Context)
  const [ state, setState ] = useState({loading:false, error: false})

  const login = useCallback( async ({email, password}) => {
    setState({loading: true, error: false})
    loginService({email, password}).then( jwt => {
      window.sessionStorage.setItem('jwt',jwt.token)
      setState({loading: false, error: false})
      setJwt(jwt.token)
    }).catch( err => {
      window.sessionStorage.removeItem('jwt')
      setState({loading: false, error: true})
      console.log(err)
    })
  }, [setJwt])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt')
    setJwt(null)
  },[setJwt])

  const signup = useCallback( async ({firstName, lastName, email, password, birthDate}) => {
    setState({loading: true, error: false})
    signupService({firstName, lastName, email, password, birthDate}).then( jwt => {
      window.sessionStorage.setItem('jwt',jwt.token)
      setState({loading: false, error: false})
      setJwt(jwt.token)
    }).catch( err => {
      window.sessionStorage.removeItem('jwt')
      setState({loading: false, error: true})
      console.log(err)
    })
  },[setJwt])

  return {
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    signup,
    logout,
    jwt,
  }
}