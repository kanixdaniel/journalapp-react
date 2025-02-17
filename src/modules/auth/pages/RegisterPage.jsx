import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, Typography, TextField, Alert } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../../hooks';
import { startCreatingUserWithEmailPassword } from '../../../store/auth';
import { useMemo } from 'react';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidation = {
  email: [(value) => value.includes('@') , 'El correo debe tener @'],
  password: [(value) => value.length >= 6 , 'El password debe tener al menos 6 caracteres'],
  displayName: [(value) => value.length >= 1 , 'El nombre es requerido']
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {status, errorMessage} = useSelector(state => state.auth);
  const isCreatingUser = useMemo(() => status === 'checking', [status]);

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidation);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if(!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  }

  return (
    <AuthLayout title='Crear cuenta'>
      <form 
        onSubmit={onSubmit}
        className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>
          <Grid item xs={12} sx={{mb: 2}}>
            <TextField 
              label='Nombre completo'
              type='text'
              placeholder='Jonh Snow'
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item xs={12} sx={{mb: 2}}>
            <TextField 
              label='Correo'
              type='email'
              placeholder='correo@ejemplo.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              error={emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField 
              label='Contraseña'
              type='password'
              placeholder='Ingresa tu contraseña'
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
              error={passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid 
              item 
              xs={12}
              display={!!errorMessage ? '' : 'none'}>
              <Alert severity='error'>
                {errorMessage}
              </Alert>
            </Grid>
            <Grid item xs={12}>
              <Button 
                type='submit'
                variant='contained'
                fullWidth
                disabled={isCreatingUser}>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{mr:1}}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Iniciar sesión
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
