import React from 'react'
import MainCrosel from '../../components/HomeCrosel/MainCrosel'
import HomeSectionCrosel from '../../components/HomeSectionCrosel/HomeSectionCrosel'
import { mens_kurta } from '../../Data/mens_kurta'


const HomePage = () => {
  return (
    <div>
        <MainCrosel/>

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCrosel data={mens_kurta} sectionName={"men's Kurta"}/>
              <HomeSectionCrosel data={mens_kurta} sectionName={"men's shoes"}/>
              <HomeSectionCrosel data={mens_kurta} sectionName={"men's Shirt"}/>
              <HomeSectionCrosel data={mens_kurta} sectionName={"Women's Sarees"}/>
              <HomeSectionCrosel data={mens_kurta} sectionName={"Women's Dress"}/>
              
        </div>
    </div>
  )
}

export default HomePage