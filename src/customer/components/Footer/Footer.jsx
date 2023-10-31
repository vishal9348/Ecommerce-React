import { Button } from '@mui/base'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from '@mui/icons-material'

const Footer = () => {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10'
                container sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
                <Grid item xs={12} sm={6} md={3}>

                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div><Button className='pb-5' variant='h6' gutterButton>About</Button></div>
                    <div><Button className='pb-5' variant='h6' gutterButton>Blog</Button></div>
                    <div><Button className='pb-5' variant='h6' gutterButton>Press</Button></div>
                    <div><Button className='pb-5' variant='h6' gutterButton>Career</Button></div>
                    <div><Button className='pb-5' variant='h6' gutterButton>Partners</Button></div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>

                    <Typography className='pb-5' variant='h6'>Solution</Typography>
                    <div><Button className='pb-5' variant='h6' gutterButton>Marketing</Button></div>
                    <div><Button className='pb-5' variant='h6' gutterButton>Analysis</Button></div>
                    <div><Button className='pb-5' variant='h6' gutterButton>Support</Button></div>
                    <div><Button className='pb-5' variant='h6' gutterButton>Inshight</Button></div>
                    <div><Button className='pb-5' variant='h6' gutterButton>Commerce</Button></div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>

                    <Typography className='pb-5' variant='h6'>Documentation</Typography>
                    <div><Button className='pb-5' variant='h6' gutterButton>Guides</Button></div>
                    <div><Button className='pb-5' variant='h6' gutterButton>API Status</Button></div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>

                    <Typography className='pb-5' variant='h6'>Legal</Typography>
                    <div><Button className='pb-5' variant='h6' gutterButton>Claim</Button></div>
                    <div><Button className='pb-5' variant='h6' gutterButton>Privacy</Button></div>
                    <div><Button className='pb-5' variant='h6' gutterButton>Terms & Condition</Button></div>
                    
                </Grid>
                <Grid className='pt-20' item xs={20}>
                    <Typography component='p' align='center' variant='body2'>
                        &copy; 2023 My Company. All Right Reserved.
                    </Typography>
                    <Typography component='p' align='center' variant='body2'>
                        Made with love by me!
                    </Typography>
                    <Typography component='p' align='center' variant='body2'>
                        Icons Made By{' '}
                        <Link href="/facebook">Facebook</Link>{' '}
                    </Typography>
                </Grid>
            </Grid>

          
        </div>
    )
}

export default Footer