import React, { useState } from 'react';
import { connect } from 'react-redux'
import {
  Grid,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';
import {
  login,
} from '../../redux/actions/account'
import { toast } from 'react-toastify';


const InputFields = ({
  login,
  isFetching,
}) => {
  const [nationalID, setNationalID] = useState('');
  const [password, setPassword] = useState('');

  const checkForEnglishDigits = (number) => {
    var regex = new RegExp(`\\d{${number.length}}`);
    if (regex.test(number)) {
      return number;
    } else {
      return 'error'
    }
  }

  const doCreateAccount = () => {
    if (!nationalID || !password) {
      toast.error('لطفاً همه‌ی چیزهایی که ازت خواسته شده رو پر کن!')
      return;
    }
    login(nationalID, password);
  }

  return (
    <>
      <Grid item>
        <TextField
          onChange={
            (e) => {
              if (checkForEnglishDigits(e.target.value) !== 'error') {
                setNationalID(checkForEnglishDigits(e.target.value))
              }
            }
          }
          value={nationalID}
          label='کد ملی'
          type='text'
          variant='outlined'
          inputProps={{ className: 'ltr-input' }}
          fullWidth />
      </Grid>
      <Grid item>
        <TextField
          onBlur={(e) => setPassword(e.target.value)}
          label='رمز عبور'
          type='password'
          variant='outlined'
          inputProps={{ className: 'ltr-input' }}
          fullWidth />
      </Grid>
      <Grid item container justify='center'>
        <Typography align='center'>
          {'اگه رمز عبورت یادت رفته، از '}
          <a href='/change-password'>
            {'این‌جا'}
          </a>
          {' دوباره تعیینش کن!'}
        </Typography>
      </Grid>
      <Grid container item direction='row' justify='center'>
        <Button
          onClick={doCreateAccount}
          variant='contained'
          color='primary'
          disabled={isFetching}
          fullWidth>
          {'بزن بریم'}
        </Button>
      </Grid>
    </>
  )

}

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.account.isFetching,
})


export default connect(
  mapStateToProps,
  {
    login,
  }
)(InputFields)