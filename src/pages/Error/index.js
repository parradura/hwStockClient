import React from 'react'
import useStyles from './styles'

const Error = props => {

  const { error } = props

  const classes = useStyles()
    
  return (
    <div className={classes.root}>
      <div className={classes.errorContainer}>
        <p className={classes.error}>{error}</p>
        <p className={classes.errorSubtitle}>¡Parece que aquí no hay nada!</p>
        <img src={`${process.env.PUBLIC_URL}/illustrations/404.svg`} height="600px" className={classes.img}/>
      </div>
    </div>
  )
}

export default Error