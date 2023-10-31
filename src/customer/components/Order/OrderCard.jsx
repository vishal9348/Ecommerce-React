import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate=useNavigate();

    return (
        <div onClick={()=>navigate(`/acount/order/${5}`)} className='p-5 shadow-lg hover:shadow-2xl border ms-10'>
            <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img className='w-[7rem] h-[7rem] object-cover object-top'
                            src="https://www.ethnicplus.in/media/catalog/product/cache/1d5df636cf8c8988ea2d2c570bb7c21d/s/a/sabyasachi_organza_lehenga.jpeg"
                            alt="" />


                        <div className='ml-5 space-y-2'>
                            <p>Women Lahenga</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                            <p className='opacity-50 text-xs font-semibold'>Color: red</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>Rs. 5678</p>
                </Grid>
                <Grid item xs={4}>
                    {true &&
                        <div>
                            <p>
                                <AdjustIcon sx={{ width: '15px', height: "15px" }} className='text-green-600 mr-2 text-sm' />
                                <span>Delivered On March 09</span>

                            </p>
                            <p className='text-xs-'>Your Item Has been delivered</p>
                        </div>}

                    {false &&
                        <p>
                            <span>Expected Delivery On amrch 03</span>
                        </p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard