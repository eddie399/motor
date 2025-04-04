"use client";




import {useState} from 'react'
import Image from 'next/image'
import { CarProps } from '@/types';
import CustomButton from './CustomButton';
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import CarDetails from './CarDetails';


interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, model, year, make, transmission, drive} = car;

    const [isOpen, setIsOpen] = useState(false);

    const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className='car-card group'>
        <div className="car-card__content">
            <h2 className="car-card__content-title">
                {make} {model}
            </h2>
        </div>
        <p className='flex mt-6 text-[32px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>
                $
            </span>
            {carRent}   
            <span className='self-start text-[14px] font-medium'>
                /day
            </span>
        </p>

        <div className='relative w-full h-40 my-3 object-contain'>
            <Image src='/hero.png' fill priority className='object-contain' alt='car-model'/>
        </div>

        <div className="relative w-full mt-2">
            <div className='flex group-hover:invinsible w-full justify-between text-gray'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/steering-wheel.svg" width={20} height={20} alt="wheel"/>
                    <p className="text-[14px]">
                        {transmission === 'a' ? 'Automatic' : 'Manual'}
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/tire.svg" width={20} height={20} alt="tire"/>
                    <p className="text-[14px]">
                        {drive.toUpperCase()}
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/gas.svg" width={20} height={20} alt="wheel"/>
                    <p className="text-[14px]">
                        {city_mpg}MPG
                    </p>
                </div>
            </div>

            <div className='car-card__btn-container'>
                <CustomButton 
                    title='view more'
                    containerStyles="w-full py-[16px] rounded-full bg-orange-600"
                    textStyles="text-white text-[14px] leading [17px] font-bold"
                    rightIcon="/right-arrow.svg"
                    handleClick={() => setIsOpen(true)}
                />
            </div>
        </div>

        <CarDetails
            isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car}
        />

    </div>

    
  )
}

export default CarCard