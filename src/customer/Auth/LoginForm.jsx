import React from 'react'
import { Grid, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate=useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const userData = {
            email: data.get('email'),
            password: data.get('password')
        }
        console.log("user data", userData);
    }
    return (
        <div>
            <form onSubmit={(event) => { handleSubmit(event) }}>
                <Grid container spacing={3}>

                    <Grid item xs={12} sx={{ padding: '1rem 0' }}>
                        <TextField
                            required
                            id='email'
                            name='email'
                            label="Email"
                            fullWidth
                            autoComplete='email'

                        />
                    </Grid>

                    <Grid item xs={12} sx={{ padding: '1rem 0' }}>
                        <TextField
                            required
                            id='password'
                            name='password'
                            label="Password"
                            fullWidth
                            autoComplete='new-password'

                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button className='bg-[#9155FD w-full' type='submit' variant='contained' size='large'
                            sx={{ padding: '0.8rem 0', bgcolor: '#9155FD' }}>
                            Log-In
                        </Button>
                    </Grid>
                </Grid>
            </form>

            <div className='flex justify-center flex-col items-center'>
                <div className='py-3 flex items-center'>
                    <p>If you don't have an Acoount ? </p>
                    <Button onClick={() => navigate("/register")} className='ml-5' size='small'>Register</Button>
                </div>
            </div>

        </div>
    )
}

export default LoginForm