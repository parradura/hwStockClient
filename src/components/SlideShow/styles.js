import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative'
  },
  slideContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
  },
  slide: {
    minWidth: '100%',
    overflow: 'hidden',
    transition: '.3s ease all',
    zIndex: 10,
    maxHeight: 700,
    position: 'relative',
    "& img": {
      width: '100%',
      verticalAlign: 'top'
    }
  },
  controls: {
    position: 'absolute',
    top: 0,
    zIndex: 20,
    height: '100%',
    width: '100%',
    "pointer-events": 'none'
  },
  controlButton: {
    "pointer-events": 'all',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    width: 50,
    height: '100%',
    textAlign: 'center',
    transition: '.3s ease all',
    position: 'absolute',
    opacity: 0.7,
    "&hover": {
      opacity: 1
    }
  },
  controlButtonRight: {
    right: 0,
  },
  controlButtonLeft: {
    left: 0
  }
}));

export default useStyles
