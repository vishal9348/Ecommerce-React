import React from 'react'
import AdressCard from '../AddressCard/AdressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'

const OrderSummary = () => {
  return (
    <div>
        <div className='p-5 shadow-lg rounded-s-md border'>
            <AdressCard/>
        </div>

          <div>

              <div className='lg:grid grid-cols-3 relative'>
                  <div className='col-span-2'>
                      {[1, 1, 1, 1].map((item) => <CartItem />)}
                  </div>

                  <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                      <div className='border'>
                          <p className='uppercase font-bold opacity-60 pb-4 ps-4 pt-2'>Price Details: </p>
                          <hr />

                          <div className='space-y-3 font-semibold mb-7 p-10'>
                              <div className='flex justify-between pt-3 text-black'>
                                  <span>Price </span>
                                  <span>Rs. 5678</span>
                              </div>

                              <div className='flex justify-between pt-3 '>
                                  <span>Discount </span>
                                  <span className='text-green-600'>Rs. -5678</span>
                              </div>

                              <div className='flex justify-between pt-3'>
                                  <span>Delivery Charge </span>
                                  <span className='text-green-600'>Free</span>
                              </div>

                              <div className='flex justify-between font-bold'>
                                  <span>Total Amount </span>
                                  <span className='text-green-600'>Rs. 5678</span>
                              </div>
                          </div>

                          <Button variant='contained' className='w-full mt-3' sx={{ px: '2.5rem', py: '.7rem', bgcolor: '#9155fd' }}>
                              Checkout
                          </Button>
                      </div>
                  </div>
              </div>

          </div>
    </div>
  )
}

export default OrderSummary