import './style.scss';
import { Cars } from '@pages';
import { carList } from '@mocks'
import { categoryTypes, categoryCapacity } from '@mocks';
import { Box, Button, Checkbox, Flex, SimpleGrid } from '@chakra-ui/react';
import { PriceSlider } from '@components/priceslider'
import { useParams } from 'react-router-dom';
import ratingicon from '../../components/icons/ratings.svg';
import Like from '../../components/icons/Like.svg';

export const Detail = () => {
  const { id } = useParams();
  const car = carList.find((car) => car.id === parseInt(id));

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

      <main>

        {
          car && (
            <SimpleGrid columns={2} spacingX={8} padding={8}>
              <Box>
                <img src={car.img} alt={car.model} className='w-full h-full rounded-[10px]' />
              </Box>

              <Box bg={'white'}  padding={6} rounded={'10px'} className='max-w-[550px]'>
                <Flex justify={'space-between'}>
                  <span>
                    <h1 className='text-[#1A202C] text-[24px] font-semibold'>{car.model}</h1>
                    <p className='text-[#90A3BF] text-[16px] flex gap-2'><img src={ratingicon} alt="rating" /> {Math.floor(Math.random() * 400 + 1)}+ Reviewer</p>
                  </span>

                  <span>
                    <img src={Like} alt="like" className='hover:cursor-pointer hover:scale-110 duration-200'/>
                  </span>
                </Flex>

                <p className='text-[20px] text-[#596780] pt-8'>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>

                <Flex justifyContent={'space-between'} py={8}>

                  <Box>
                    <Box>
                      <span className='text-[#90A3BF] text-[20px]'>Type Car: </span> <span className='text-[20px] text-[#596780] font-semibold'>{car.mode}</span>
                    </Box>

                    <Box>
                      <span className='text-[#90A3BF] text-[20px]'>Steering : </span> <span className='text-[20px] text-[#596780] font-semibold'>{car.transmission}</span>
                    </Box>
                  </Box>

                  <Box>
                    <Box>
                      <span className='text-[#90A3BF] text-[20px]'>Capacity: </span> <span className='text-[20px] text-[#596780] font-semibold'>{car.people} Person</span>
                    </Box>

                    <Box>
                      <span className='text-[#90A3BF] text-[20px]'>Gasoline: </span> <span className='text-[20px] text-[#596780] font-semibold'>{car.gas}</span>
                    </Box>
                  </Box>

                </Flex>

                <Flex justifyContent={'space-between'}>
                  <Box>
                    <span>$<strong>{car.price}.00</strong>/days</span>
                  </Box>
                  
                  <Button colorScheme='blue'>
                    Rent Now
                  </Button>
                </Flex>
              </Box>
            </SimpleGrid>
          )
        }

        <Cars />
      </main>
    </div>
  )
}