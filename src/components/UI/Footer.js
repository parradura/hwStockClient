import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Grid, IconButton } from '@material-ui/core'
import { Email as EmailIcon } from '@material-ui/icons'
import { useForm } from 'react-hook-form'

const useStyles = makeStyles( (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#333',
    height: 300,
    marginTop: 100,
    alignContent: 'center'
  },
  gridRoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center'
  },
  newsletterContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  newsletterText: {
    color: '#eee',
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'end',
    margin: 0,
    padding: 0
  },
  newsletter: {
    display: 'flex',
    flexDirection: 'row'
  },
  newsletterInput: {
    border: "0 rgba(0,0,0,.2)",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
    height: 45,
    width:'500px',
    marginLeft: 40,
    borderRadius: '6px 0 0 6px',
    textIndent: 15,
    backgroundColor: '#666',
    color: '#fff',
    fontSize: 16,
    "&:focus":{
      boxSizing: 'border-box',
      backgroundColor: '#222',
      outline:'none',
      border: '2px solid #4eb0d4',
    }
  },
  newsletterButton: {
    alignSelf:'center',
    border: "0 rgba(0,0,0,.2)",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
    display: 'flex',
    width: '30%',
    justifyContent:'center',
    backgroundColor:'#4eb0d4',
    maxHeight: 45,
    minHeight: 45,
    borderRadius: '0 6px 6px 0'
  }
}))


const Footer = props => {

  const classes = useStyles()
  const { register, handleSubmit } = useForm()
  
  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <footer>
      <div className={classes.root}>
        <Grid container className={classes.gridRoot}>
          <Grid item xs={6}>
            <div className={classes.newsletterContainer}>
              <p className={classes.newsletterText}>Recibí las mejores oportunidades</p>
              <form className={classes.newsletter} role="search" onSubmit={handleSubmit(onSubmit)}>
                <input className={classes.newsletterInput} name="searchText" type="text" 
                  spellCheck={false} maxLength={120} autoComplete="off" {...register("searchText")}/>
                <div className={classes.newsletterButton}>
                  <IconButton aria-label="search" color="inherit" onClick={handleSubmit(onSubmit)} style={{width: '100%'}}>
                    <EmailIcon style={{color: '#fff'}}/>
                  </IconButton>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    </footer>
  )
}

export default Footer