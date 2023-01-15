import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, Typography, TextField } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication, startGoogleSignIn } from '../../../store/auth';
import { useMemo } from 'react';

export const LoginPage = () => {

  const {status} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const { email, password, onInputChange} = useForm({
    email: 'daniel@kanixgroup.com',
    password: '123456'
  });

  const isAuthenticating =  useMemo(() => status === 'checking', [status])

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({email, password});
    dispatch(checkingAuthentication());
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title='Inicio de sesión'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{mb: 2}}>
            <TextField 
              label='Correo'
              type='email'
              placeholder='correo@ejemplo.com'
              value={email}
              name='email'
              fullWidth
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField 
              label='Contraseña'
              type='password'
              placeholder='Ingresa tu contraseña'
              value={password}
              name='password'
              fullWidth
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12} md={6}>
              <Button 
                type='submit'
                variant='contained'
                fullWidth
                disabled={isAuthenticating}>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button 
                variant='contained'
                fullWidth
                onClick={onGoogleSignIn}
                disabled={isAuthenticating}>
                <Google />
                <Typography sx={{ml: 1}}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
