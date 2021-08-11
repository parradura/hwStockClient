import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Grid, Button } from '@material-ui/core'
import useUser from '../../hooks/useUser'
import { useHistory } from 'react-router'
import useStyles from './styles'
import Input from '../../components/UI/Input'


const Signup = props => {

  const { signup, isLoginLoading, hasLoginError, isLogged } = useUser()
  const { register, handleSubmit } = useForm()
  const history = useHistory()
  const classes = useStyles()

  useEffect(() => {
    if(isLogged) history.push('/')
  },[isLogged, history])

  const onSubmit = (values) => {
    const { firstName, lastName, email, password, birthDate } = values
    signup({ firstName, lastName, email, password, birthDate }).then(() => {
      history.push('/')
    })
  }

  return (
    <div className={classes.root}>
      <Grid container className={classes.gridRoot}>
        <Grid item xs={10} sm={7} md={5} lg={4} xl={3}>
          <div className={classes.headerExtension}/>
          <div className={classes.loginFormContainer}>
            <h2>Completá tus datos</h2>
            {isLoginLoading && <strong>Checking credentials...</strong>}
            {!isLoginLoading && 
            <form onSubmit={handleSubmit(onSubmit)} className={classes.loginForm}>
              <Input
                name="firstName"
                label="Nombre"
                className={classes.loginInput}
                {...register("firstName")}
              />
              <Input
                name="lastName"
                label="Apellido"
                className={classes.loginInput}
                {...register("lastName")}
              />
              <Input
                name="birthDate"
                label="Fecha de nacimiento"
                type="date"
                className={classes.loginInput}
                {...register("birthDate")}
              />
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
                Registrarse
              </Button>
            </form>
              }
              {
                hasLoginError && <strong>Credentials are invalid.</strong>
              }
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Signup