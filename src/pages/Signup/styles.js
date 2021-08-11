import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    display:'flex',
    height:'81.7vh',
  },
  gridRoot: {
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center'
  },
  "* :after, :before": {
    "box-sizing": "border-box"
  },
  headerExtension: {
    backgroundColor: '#333',
    position: 'absolute',
    top:0,
    left:0,
    zIndex:-10,
    height: '30vh',
    width: '100vw',
    display: 'block'
  },
  loginFormContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50,
    width: '100%',
    flexDirection:'column',
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 6,
    boxShadow: "0 3px 4px 0 rgb(0 0 0 / 20%)",
  },
  loginForm: {
    display: 'flex',
    marginTop: 40,
    alignItems: 'start',
    justifyContent: 'center',
    flexDirection:'column',
    width: '80%'
  },
  loginInput: {
    width: '100%'
  },
  loginButton: {
    backgroundColor: '#4eb0d4',
    width: '100%',
    marginTop: 30,
    height: 45,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    '&:hover':{
      backgroundColor: '#118bb8'
    }
  },
  signupButton: {
    backgroundColor: '#fff',
    width: '100%',
    marginTop: 30,
    height: 45,
    color: '#4eb0d4',
    fontWeight: 'bold',
    fontFamily: 'Poppins'
  }
}));

export default useStyles