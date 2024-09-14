import './style.scss';
import { Cars } from '@pages';
import { categoryTypes, categoryCapacity } from '@mocks';
import { Checkbox } from '@chakra-ui/react';
import { PriceSlider } from '@components/priceslider'

export const Category = () => {

  return (
    <div className='flex'>
      <aside className='min-w-[360px] bg-white p-8'>
        <h1 className='text-[#90A3BF] text-[12px] font-semibold'>TYPE</h1>

        <ul>
          {categoryTypes?.map((type) => (
            <li key={type} className='p-[10px] hover:bg-blue-500 hover:text-[#fff] rounded-[10px]'>
              
              <Checkbox defaultChecked>{type} ({Math.floor(Math.random() * 31 + 1)})</Checkbox> 
              
            </li>
          ))}
        </ul>

        <h1 className='text-[#90A3BF] text-[12px] font-semibold mt-[56px]'>CAPACITY</h1>

        <ul>
          {categoryCapacity?.map((type) => (
            <li key={type} className='p-[10px] hover:bg-blue-500 hover:text-[#fff] rounded-[10px]'>
              
              <Checkbox defaultChecked>{type} ({Math.floor(Math.random() * 31 + 1)})</Checkbox> 
              
            </li>
          ))}
        </ul>

        <ul>
          <PriceSlider />
        </ul>

      </aside>
      <Cars />
    </div>
  )
}