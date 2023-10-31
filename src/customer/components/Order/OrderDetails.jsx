import React from 'react'
import AdressCard from '../AddressCard/AdressCard'
import OrderTracker from './OrderTracker'
import { Grid,Box } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
    return (
        <div className='px:5 lg:px-20'>
            <div>
                <h1 className='font-semibold text-xl py-7'>Delivery Address</h1>
                <AdressCard />
            </div>

            <div className='py-20'>
                <OrderTracker activeStep={3} />
            </div>

            <Grid className='space-y-5' container>
                {[1,1,1,1,1].map((item)=> 
                    <Grid item container className='shadow-xl rounded-md p-5 border'
                        sx={{ alignItems: 'center', justifyContent: 'space-between' }}>

                        <Grid item xs={6}>
                            <div className='flex items-center space-x-4'>
                                <img className='w-[8rem] h-[8rem] object-cover object-top'
                                    src="https://www.ethnicplus.in/media/catalog/product/cache/1d5df636cf8c8988ea2d2c570bb7c21d/7/3/7315_1_.jpg"
                                    alt="" />

                                <div className='space-y-2 ml-5'>
                                    <p className='font-semibold'>Women Lehnga Choli</p>
                                    <p className='space-x-5 font-semibold opacity-50 text-xs'><span>color: pink</span> <span>size: M</span></p>
                                    <p>Seller: Vishal-fashion</p>
                                    <p>Rs. 5675</p>
                                </div>
                            </div>
                        </Grid>

                        <Grid item>
                            <Box sx={{ color: deepPurple[500] }}>
                                <StarBorderIcon sx={{ fontSize: '2.5rem' }} className='px-2' />
                                <span>Rate & Review Product</span>
                            </Box>
                        </Grid>
                    </Grid>
                    )}
            </Grid>
        </div>
    )
}

export default OrderDetails