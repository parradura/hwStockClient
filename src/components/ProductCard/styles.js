import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  "* :after, :before": {
    "box-sizing": "border-box"
  },
  cardRoot: {
    backgroundColor:'#fff',
    display:'flex',
    maxWidth:284,
    minWidth: 284,
    flexGrow:1,
    flexDirection:'column',
    display: 'flex',
    borderRadius:6,
    overflow:"hidden",
    width:'100%',
    boxShadow: "0 1px 1px 0 rgb(0 0 0 / 10%), 0 -1px 2px 0 rgb(0 0 0 / 10%)",
    marginBottom:16,
    textAlign:"-webkit-match-parent",
    "&:hover, &:focus": {
      transform: "scale(1.02)",
      boxShadow: "0 25px 20px 0 rgb(0 0 0 / 16%), 0 -1px 2px 0 rgb(0 0 0 / 10%)",
      zIndex:2,
      "& $name":{
        "-webkit-line-clamp": 3,
      }
    },
  },
  cardRootMarginLeft: {
    marginLeft:16
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    padding:20
  },
  nameContainer: {
    display:'flex',
    flexDirection:'column',
    flexShrink:0,
    marginBottom:12
  },
  name: {
    color:'#555',
    fontSize:14,
    fontWeight:'400',
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    "word-break": "break-word",
  },
  stockContainer: {
    display:'flex',
    flexDirection:'row',
    color:'#fff',
    borderRadius:3,
    padding: "1px 5px 4px",
    marginBottom:12,
    justifyContent:'flex-start',
    flexWrap:'flex-wrap',
    lineHeight:1
  },
  stockDisponibleContainer:{
    backgroundColor:'#00a650',
  },
  sinStockContainer: {
    backgroundColor:'#a60000',
  },
  stock: {
    display:'flex',
    fontSize: 14,
    fontWeight:'600',
    lineHeight:1
  },
  priceContainer:{
    display:'flex',
    flexDirection:'column',
    marginBottom:13
  },
  price: {
    color:'#333',
    fontWeight:'400',
    fontSize: 24,
    marginRight:8,
    marginRight:8,
    lineHeight:1,
  },
  mediaContainer: {
    width:'100%',
    overflow:'hidden',
    borderBottom: "1px solid #eaeaea"
  },
  img: {
    width: 284,
    height:284,
    objectFit: 'contain',
    overflow:'hidden',
  },
}));

export default useStyles
