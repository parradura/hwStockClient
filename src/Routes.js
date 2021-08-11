import React, {useState, useEffect} from 'react'
import useStyles from './Routes.styles'
import useUser from './hooks/useUser';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute'

//UI
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';

//context
import { UserContextProvider } from './context/UserContext';

//pages
import Home from './pages/Home';
import Login from './pages/Login'
import ProductList from './pages/ProductList';
import Error from './pages/Error';
import Signup from './pages/Signup'

//protected pages
import Profile from './pages/Profile'

export default  () =>  <UserContextProvider>
  <Routes/>
</UserContextProvider>


const Routes = props => {

  const [ searchText, setSearchText] = useState('')
  const [ simpleHeader, setSimpleHeader] = useState(true)
  const { jwt } = useUser()
  
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    if(location.pathname === '/login' || location.pathname === '/signup') {
      setSimpleHeader(true)
    } else {
      setSimpleHeader(false)
    }
  },[location])


  const onSubmit = data => {
    setSearchText(data.searchText)
    history.push('/search')
  }

  return (
    <div>
      <Header onSubmit={onSubmit} simpleHeader={simpleHeader}/>
      <main>
        <Switch>
          <Route exact path="/">
            <Home onSubmit={onSubmit}/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/search">
            <ProductList searchText={searchText}/>
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
          <ProtectedRoute exact path="/profile" component={Profile} isAuth={!!jwt}/>
          <Route>
            <Error error={404}/>
          </Route>
        </Switch>
      </main>
      <Footer/>
    </div>
  )
}
