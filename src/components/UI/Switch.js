import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import { Switch as MuiSwitch } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 40,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 1,
    color: theme.palette.grey[0],
    '&$checked': {
      transform: 'translateX(26px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: '#0094e3',
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 8,
    opacity: 1,
    height: 14,
    backgroundColor: theme.palette.grey[400],
  },
  checked: {},
}))(MuiSwitch);

const Switch = props => {

  const { checked, onChange } = props

  return (
    <FormGroup>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>
            <AntSwitch checked={checked} onChange={onChange} />
          </Grid>
        </Grid>
      </Typography>
    </FormGroup>
  );
}

export default Switch