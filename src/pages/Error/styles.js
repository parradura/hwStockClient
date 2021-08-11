import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    display:'flex',
    flexDirection: 'column',
    padding: 50,
    height:'100vh',
    backgroundColor:'#eee',
    justifyContent:'center',
    alignItems:'center',
    "&a & a:hover, a:link, a:visited": {
      'text-decoration': 'none',
    },
  },
  errorContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '7em',
    alignItems:'center',
    justifyContent: 'space-around'
  },
  error: {
    display: 'flex',
    fontSize: 100,
    fontWeight: 'bold',
    margin: 0,
    color: '#111',
  },
  errorSubtitle: {
    display: 'flex',
    fontSize: 30,
    fontWeight: '600',
    opacity: 0.6,
    margin:0
  },
  img: {
    position: 'absolute',
    top: '7em'
  },
  "* :after, :before": {
    "box-sizing": "border-box"
  },
}));

export default useStyles