import React from 'react'
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx'


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    width:'100%'
  },
  input: {
    border: "0 rgba(0,0,0,.2)",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
    height: 45,
    width:'100%',
    borderRadius: '6px',
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
  label: {
    textAlign:'start'
  }
}));

const Input = props => {

  const { errors, label, id } = props
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <label htmlFor={id} className={classes.label}>{label}</label>
      <input 
        {...props}
        className={clsx(classes.input, props.className)}
      />
    </div>
  )
}

export default Input