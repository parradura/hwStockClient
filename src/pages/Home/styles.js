import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    display:'flex',
    height:'100vh',
    backgroundColor:'#eee',
    color:'#fff',
    "&a & a:hover, a:link, a:visited": {
      'text-decoration': 'none',
    },
  },
  "* :after, :before": {
    "box-sizing": "border-box"
  },
  gridRoot: {
  }
}));

export default useStyles