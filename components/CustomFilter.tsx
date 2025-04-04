"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';
import { CustomFilterProps } from '@/types';



const CustomFilter = ({title, options}: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => setSelected(e)}
      >
        <div className='relative w-fit z-10'>
          <ListboxButton className="custom-filter__btn">
            <span className='block truncate'>{selected.title}</span>
            <Image 
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className='ml-4 object-contain'
              alt='chev-up-down'
            />
          </ListboxButton>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <ListboxOptions className="custom__filter__options">
              {options.map((option) => (
                <ListboxOption value={option} 
                key={option.title}
                className={({focus}) => `relative cursor-default select-none py-2 px-4 ${focus ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                >
                  {({selected}) =>(
                    <span>
                      {option.title}
                    </span>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter
