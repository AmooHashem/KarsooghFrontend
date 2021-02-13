import React, { useState } from 'react';
import { connect } from 'react-redux'
import {
  Grid,
  TextField,
  Button,
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
          onChange={(e) => setNationalID(e.target.value)}
          label='کد ملی'
          type='text'
          variant='filled'
          fullWidth />
      </Grid>
      <Grid item>
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          label='رمز عبور'
          variant='filled'
          type='password'
          fullWidth>
        </TextField>
      </Grid>
      <Grid container item direction='row' justify='center'>
        <Button
          onClick={doCreateAccount}
          variant='contained'
          color='primary'
          disabled={isFetching}
          fullWidth>
          بزن بریم
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