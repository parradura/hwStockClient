import React from 'react'
import SearchBar from '../../components/UI/SearchBar'
import useStyles from './styles'
import { Grid } from '@material-ui/core'
import SlideShow from '../../components/SlideShow'

const Home = props => {

  const { onSubmit } = props

  const classes = useStyles()

  return (
     <div className={classes.root}>
      <Grid container className={classes.gridRoot}>
        <Grid item xs={12}>
          <SlideShow/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home