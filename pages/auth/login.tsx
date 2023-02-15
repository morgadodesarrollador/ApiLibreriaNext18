import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import { AuthLayout } from '../../layouts';

type FormData = {
    email: string,
    password: string,
};
const LoginPage = () => { 
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onLoginUser = ( data: FormData ) => {
        console.log({data});
    } 
    return (
        <AuthLayout title={'Ingresar'}>
            <form onSubmit={ handleSubmit(onLoginUser) }>
                <Box sx={{ width: 350, padding: '10px 20px'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h3' component='h3'>Iniciar Sesión</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                { ...register('email')}
                                type="email" label="Correo" variant='filled' fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                { ...register('password')}
                                label="Contraseña" type="password" variant='filled' fullWidth />
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