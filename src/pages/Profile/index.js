import React, {useEffect, useState} from 'react'
import useUser from '../../hooks/useUser'
import Loading from '../../components/UI/Loading'
import { Grid } from '@material-ui/core'
import useStyles from './styles'

const Profile = props => {

  const [ profileData, setProfileData ] = useState(null)

  const { jwt } = useUser()
  const classes = useStyles()

  useEffect(() => {
    const loadData = async() => {
      return await fetch(`http://localhost:5000/user/myUserData`, {
        method:'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`
        },
      }).then( async response => {
        const result = await response.json()
        setProfileData(result.user)
      }).catch((err) => {
        console.log(err)
      })
    }
    loadData()
  },[jwt])

  const ItemData = ({label, data}) => (
    <div className={classes.itemData}>
      <span className={classes.itemDataLabel}>{label}</span>
      <span className={classes.itemDataContent}>{data}</span>
    </div>
  )

  if(!profileData) return <Loading isLoading={!profileData}/>
  
  return (
    <div className={classes.root}>
      <Grid container className={classes.gridRoot}>
        <Grid item xs={6}>
          <h1>Perfil</h1>

          <div className={classes.dataCardContainer}>
            <ItemData label="Nombre" data={profileData.firstName}/>
            <ItemData label="Apellido" data={profileData.lastName}/>
            <ItemData label="Email" data={profileData.email}/>
            <ItemData label="Fecha de nacimiento" data={profileData.birthDate}/>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Profile
