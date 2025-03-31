"use client"
import React from 'react'
import CustomButton from './CustomButton'
import { CustomButtonProps } from '@/types'
import Image from 'next/image'




const Hero = () => {
  const handleScroll = () => {

  }


  return (
    <div className="hero">
      <div className="flex-1 pt-10 padding-x">
        <h1 className='hero__title'>
          Find, Book, or rent a car quickly and easily
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our offortless booking process
        </p>

        

        <CustomButton 
          title="Explore Cars"
          containerStyles="bg-orange-600 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image
          alt='hero-image'
          src="/hero.png"
          fill className='object-contain'
          
          />
        </div>
          <div className='hero__image-overlay' />
        
      </div>
    </div>
  )
}

export default Hero
