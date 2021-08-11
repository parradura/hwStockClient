import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  "@global": {
      "*": {
        padding:0,
        margin: 0,
        boxSizing: 'border-box',
        fontFamily:'Poppins',
      },
      "body": {
        backgroundColor: '#eee',
        fontFamily:'Poppins',
      },
      "main": {
        overflow: 'hidden'
      },
      "&a & a:hover, a:link, a:visited": {
        'text-decoration': 'none',
      },
      "* :after, :before": {
        "box-sizing": "border-box"
      },
      "* input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active": {
        "-webkit-box-shadow": "0 0 0 30px #666 inset !important"
      },
      "input:-webkit-autofill": {
        "-webkit-text-fill-color": "#fff !important"
      }
        },
  root: {

  },

  navHeader: {
    display: 'flex',
    color: "#eee",
    padding: "0 0 0 160px",
    backgroundColor: '#333',
    alignItems:'center',
    height: '100px',
    "&:before": {
      content: '',
      position: 'absolute',
      width: '100%',
      height: '100px',
      left: 0,
      top: 0,
      boxShadow: '0 1px 0 0 rgb(0 0 0 / 10%)'
    }
  },
  navBounds: {
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',
    padding: "0 0 0 160px",
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  navSearch: {
    //padding: "8px 1px",
    overflow: 'auto',
    height: 56,
    position: 'relative',
    left: 35,
    maxWidth: 1200,
    zIndex: 800,
    willChange: 'left',
    transition: "left .15s ease-out"
  },
  '@media (min-width: 1024px)': {
    navSearchInput: {
      borderRadius: 6,
      paddingRight: 50,
      border: "0 rgba(0,0,0,.2)",
      boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
      height: 39,
      width:500,
      borderRadius: 2,
      textIndent: 15,
      backgroundColor: '#fff',
      border: "0 rgba(0,0,0,.2)",
      color: '#333',
      fontSize: 16,
      "&:focus":{
        outlineWidth:0
      }
    },
  },
  searchIcon: {
    color: '#666',
  }
}));

export default useStyles
