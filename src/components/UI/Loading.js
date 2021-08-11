import React from 'react'
import { makeStyles } from '@material-ui/core'
import { BounceLoader } from 'react-spinners'
import clsx from 'clsx'


const Loading = props => {

  const { isLoading } = props

  const classes = useStyles()

  return (
    <div className={clsx(classes.root, classes.loadingRoot)}>
      <BounceLoader 
        color={"#36D7C6"} 
        loading={isLoading} 
        size={150}/>
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  root:{
    display:'flex',
    flexDirection:'column',
    backgroundColor:'#eee',
    alignItems:'center',
    "& a, a:hover, a:link, a:visited": {
      'text-decoration': 'none',
    },
    "& p" : {
      margin: 0
    },
    "& h1" : {
      margin:0
    },
    "& li": {
      'list-style': 'none'
    }
  },
  loadingRoot: {
    display:'flex',
    height:'84.5vh',
    alignItems:'center',
    justifyContent:'center'
  },
}));

export default Loading
