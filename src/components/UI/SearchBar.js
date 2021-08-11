import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { useForm } from 'react-hook-form';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navSearchContainer: {
    alignSelf: 'center',
    width: '30%',
    
  },
  navSearch: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxHeight:45
  },
  navSearchInput: {
    border: "0 rgba(0,0,0,.2)",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
    height: 45,
    width:'80%',
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
  navSearchIcon: {
    alignSelf:'center',
    border: "0 rgba(0,0,0,.2)",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
    display: 'flex',
    width: '15%',
    justifyContent:'center',
    backgroundColor:'#4eb0d4',
    maxHeight: 45,
    minHeight: 45,
    borderRadius: '0 6px 6px 0'
  }
}));

const SearchBar = props => {

  const { onSubmit } = props

  const { register, handleSubmit } = useForm()
  const classes = useStyles()

  return (
    <div>
      <form className={classes.navSearch} role="search" onSubmit={handleSubmit(onSubmit)}>
        <input className={classes.navSearchInput} name="searchText" type="text" 
          spellCheck={false} maxLength={120} autoComplete="off" {...register("searchText")}/>
        <div className={classes.navSearchIcon}>
          <IconButton aria-label="search" color="inherit" onClick={handleSubmit(onSubmit)}>
            <SearchIcon />
          </IconButton>
        </div>
      </form>
    </div>
  )
}

export default SearchBar