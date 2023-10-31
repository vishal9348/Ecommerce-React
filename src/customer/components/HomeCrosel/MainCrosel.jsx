import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCroselData } from './MainCroselData';



const MainCrosel = () => {
    

    const items = MainCroselData.map((item) => <img className='cursor-pointer' role='presentation'
      src={item.image} alt="" />)
   
      return(
          <AliceCarousel
              items={items}
              disableButtonsControls
              autoPlay
              autoPlayInterval={1000}
              infinite
          />
      )
}
export default MainCrosel;