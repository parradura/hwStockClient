import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Grid, Button } from '@material-ui/core'
import useUser from '../../hooks/useUser'
import { useHistory } from 'react-router'
import useStyles from './styles'
import Input from '../../components/UI/Input'


const Login = props => {

  const { login, isLogged, isLoginLoading, hasLoginError } = useUser()
  const { register, handleSubmit } = useForm()
  const history = useHistory()
  const classes = useStyles()

  useEffect(() => {
    if(isLogged) history.push('/')
  },[isLogged])

  const onSubmit = (values) => {
    const { email, password } = values
    login({email, password})
  }

  return (
    <div className={classes.root}>
      <Grid container className={classes.gridRoot}>
        <Grid item xs={10} sm={7} md={5} lg={4} xl={3}>
          <div className={classes.headerExtension}/>
          <div className={classes.loginFormContainer}>
            <h2>¡Hola! Ingresá tu e-mail y tu contraseña</h2>
            {isLoginLoading && <div style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
              <strong>Checking credentials...</strong>
              </div>}
            {!isLoginLoading && 
            <form onSubmit={handleSubmit(onSubmit)} className={classes.loginForm}>
              {
                hasLoginError && <strong className={classes.errorMessage}>Credentials are invalid.</strong>
              }
              <Input
                name="email"
                label="Email"
                className={classes.loginInput}
                {...register("email")}
              />
              <Input
                type="password"
                label="Contraseña"
                name="password"
                className={classes.loginInput}
                {...register("password")}
              />
              <Button aria-label="login" color="inherit" onClick={handleSubmit(onSubmit)} className={classes.loginButton}>
                Login
              </Button>
              <Button aria-label="login" color="inherit" onClick={()=> history.push('/signup')} className={classes.signupButton}>
                Signup
              </Button>
            </form>
              }
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Login