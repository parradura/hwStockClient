import { makeStyles } from '@material-ui/core/styles';

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
  listContainer:{
    display:'flex',
    flexWrap:'wrap',
    flexDirection: 'row',
  },
  "* :after, :before": {
    "box-sizing": "border-box"
  },
  searchMain: {
    display: 'flex',
    marginTop:0,
    paddingTop: 50,
    maxWidth: 1300,
    paddingLeft: 10,
    paddinRight: 28,
    width: '100%'
  },
  searchBar: {
    display: 'flex',
    flexDirection:'column',
    flexWrap: 'wrap',
    paddingTop: 55,
    maxWidth: 294,
    minWidth: 210,
    paddingRight: 14,
    width: '100%',
  },
  searchTitle: {
    color: '#333',
    display: 'block',
    fontSize: 26,
    fontWeight: '600',
    lineHeight: '30px',
    paddingRight: 16,
    position: 'relative',
    wordWrap: 'break-word',
    zIndex:1
  },
  searchResultContainer: {
    display:'flex',
    alignItems:'center',
    marginBottom: 16,
    marginTop: 4
  },
  searchResult: {
    fontSize: '14px',
    lineHeight: 1.29,
    fontWeight: '300',
    width: 'max-content',
    color: '#333',
    position: 'relative',
    bottom: '2px'
  },
  searchFilter: {
    clear: 'both',
    marginTop: 36
  },
  stockFilterDl: {
    width: '100%',
    paddingRight: 16,
    marginBottom: 30
  },
  stockFilterDd: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: 6,
    padding: 16,
    margin: '4px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  stockFilterSpan: {
    marginTop: 1,
    display: 'inline-block',
    fontWeight: '600',
    fontSize: 14,
    color: 'rgba(0,0,0,.8)'
  },
  stockFilterSwitchContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  searchResults: {
    display: 'flex',
    flexDirection: 'column',
    width: 885,
  },
  searchViewOptionsTitle: {
    color: '#333',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 1.7,
    marginRight: 6,
    whiteSpace: 'nowrap'
  },
  dropDown: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 1,
    position: 'relative',
    "-webkit-font-smoothing": "antialiased"
  },
  dropDownTrigger: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    color: '#333',
    border: 'none',
    fontSize: 14,
    order: 'unset',
    cursor: 'pointer',
    background: 'none',
    transition: 'color .18s ease-out',
    outline: 'none'
  },
  dropDownArrow: {
    color:'#3483fa',
    display:'flex',
    position: 'absolute',
    right: -24,
    bottom: -6
  },
  dropDownPopOver: {
    top: '1.97em',
    marginLeft:-10,
    maxHeight: 147,
    padding: 0,
    maxWidth: 134,
    minWidth: 134,
    left: '-.6em',
    backgroundColor: '#fff',
    overFlow: 'hidden',
    position: 'absolute',
    display: 'none'
  },
  dropDownPopOver_Open: {
    display: 'block',
    zIndex: 2,
  },
  dropDownList: {
    fontSize: 14,
    fontWeight: 300,
    color: '#666',
    borderRadius: 8,
    padding: 0,
    margin: 0,
  },
  dropDownItemSelected: {
    content: 'none',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    borderLeft: ['5px solid #3483fa', "!important"]
  },
  dropDown_a:{
    cursor: 'pointer',
    "&:hover &:focus": {
      '$dropDownItem': {
        borderLeft: '5px solid #3483fa30'
      },
      '$dropDown_li': {
        background: 'rgb(156, 196, 219)',
      }
    }
  },
  dropDown_li: {
    background: '#fff'
  },
  dropDownItem: {
    borderBottom: '1px solid #d8d8d8',
    paddingRight: 0,
    borderLeft: '5px solid #fff',
    'pointer-events': 'none',
    padding: '12px 1.1428571429em',
    position: 'relative',
    justifyContent: 'space-between',
    '-webkit-transition': 'color .2s ease-in-out',
    
  },
  dropDownItemText: {
    maxWidth: 106, 
    padding: '1.5px 5px', 
    display:'flex', 
    alignItems: 'center'
  }
}))

export default useStyles
