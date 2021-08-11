import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: '100vh',
    alignItems: 'center',
  },
  gridRoot: {
    display: 'flex',
    marginTop: 40,
    justifyContent: 'center'
  },
  dataCardContainer: {
    display: 'flex',
    marginTop: 40,
    width: '100%',
    background: '#fff',
    borderRadius: 6,
    flexDirection: 'column'
  },
  itemData: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20,
    paddingInline: 40
  },
  itemDataLabel: {
    display: 'flex',
    width: '40%',
    textAlign: 'flex-start',
    fontWeight: '600'
  },
  itemDataContent: {
    display: 'flex',
    width: '60%',
    textAlign: 'flex-start',
    color: '#999'
  }
}));

export default useStyles