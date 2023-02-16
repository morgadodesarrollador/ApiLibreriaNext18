import { useState } from 'react';
import NextLink from 'next/link';
import { Box, Grid, Typography, TextField, Button, Link, Chip } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';

import { useForm } from 'react-hook-form';
import { AuthLayout } from '../../layouts';
import { validations } from '../../utils';
import { libreriaApi } from '../../api';

interface IRespuestaLogin {
    token: string;
    email: string;
    password: string;
}
type FormData = {
    email: string,
    password: string,
    token?:string
};
const LoginPage = () => { 

    
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [ showError, setShowError ] = useState(false);
    console.log(errors);
    const onLoginUser = async ({email, password}: FormData ) => {
        setShowError(false);
        console.log(email, password);
        const datos = { email:email, password:password };
        try {            
            const { data }:FormData = await libreriaApi.post<IRespuestaLogin>('/auth/login', datos);
            // const { token, email, password } = {d};
            console.log(data);

        }catch(error){
            console.log(error);
            setShowError(true);
            setTimeout( () => setShowError(false), 3000)
        }
    } 
    return (
        <AuthLayout title={'Ingresar'}>
            <form onSubmit={ handleSubmit(onLoginUser) } noValidate>
                <Box sx={{ width: 350, padding: '10px 20px'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h3' component='h3'>Iniciar Sesión</Typography>
                            <Chip 
                                label="nose reconoce usuario/contraseña"
                                color="error"
                                icon= {<ErrorOutline />}
                                className="fadeIn"
                                sx={{ display: showError ? 'flex': 'none'}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                { ...register('email', {
                                    required: 'email es obligatorio',
                                    validate: (val) => validations.isEmail(val)
                                    // validate: validations.isEmail
                                })}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                type="email" label="Correo" variant='filled' fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                { ...register('password', {
                                    required:'Password es requerido',
                                    minLength: { value: 6, message: 'Minimo 6 caracteres'}
                                })}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                                label="Contraseña" type="password" variant='filled' fullWidth />
                            <TextField
                                 sx={{ display: showError ? 'flex': 'none'}}
                                //  value =  {...register('totken') }
                            />
                                    
                         
                        </Grid>
                        <Grid item xs={12}>
                            <Button 
                                type='submit'
                                color='secondary' className='circular-btn' size='large' fullWidth>
                                Ingresar
                            </Button>                           
                        </Grid>
                        <Grid item xs={12} display='flex' justifyContent='end'>
                            <Link href='/auth/register' passHref component={NextLink} underline='always'>
                                ¿ No tienes cuenta ... ?
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </AuthLayout>
    )
}

export default LoginPage