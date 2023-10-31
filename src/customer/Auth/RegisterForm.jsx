import React, { useEffect } from 'react'
import { Button, Grid, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, register } from '../../State/Auth/Action';

const RegisterForm = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt")
    const { auth } = useSelector(store => store)

    useEffect(() => {
        if (jwt) {
            dispatch(getUser(jwt))
        }
    }, [jwt, auth.jwt, dispatch])

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const userData = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password')
        }

        dispatch(register(userData))
        console.log("user data", userData);
    }
    return (
        <div>
            <form onSubmit={(event) => { handleSubmit(event) }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id='firstName'
                            name='firstName'
                            label="First Name"
                            fullWidth
                            autoComplete='given-name'

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id='lastName'
                            name='lastName'
                            label="Last Name"
                            fullWidth
                            autoComplete='family-name'

                        />
                    </Grid>

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
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>

            <div className='flex justify-center flex-col items-center'>
                <div className='py-3 flex items-center'>
                    <p>If you have already Account ? </p>
                    <Button onClick={() => navigate("/login")} className='ml-5' size='small'>LogIn</Button>
                </div>
            </div>

        </div>
    )
}

export default RegisterForm