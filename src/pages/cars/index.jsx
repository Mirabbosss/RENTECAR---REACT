import { Button, Container, Flex } from '@chakra-ui/react';
import { carList } from '@mocks';
import Like from '../../components/icons/Like.svg';
import Gas from '../../components/icons/gas-station.svg';
import Transmission from '../../components/icons/transmission.svg';
import People from '../../components/icons/peopleIcon.svg';
import './style.scss';
import { Link  } from 'react-router-dom';

export const Cars = () => {
  
  return (
    <section>
      <Container maxW='1250px' padding={9}>
        <Flex justify={'space-between'} className='text-[16px] font-semibold text-[#90A3BF]'>
          <p>Popular Car</p>
          <a href="#" className='text-[#3563E9]'>View All</a>
        </Flex>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {carList.map((car) => (
            <div key={car.id} className="card">
              <div className='flex justify-between items-center'>
                <div>
                  <h1>{car.model}</h1>
                  <p>{car.mode}</p>
                </div>

                <img src={Like} alt="like" className='hover:cursor-pointer hover:scale-110 duration-200' />
              </div>

              <img src={car.img} alt="image" className='mt-9' />

              <div className='flex justify-between mt-10 gap-4'>
                <span className='flex items-center'>
                  <img src={Gas} alt="icon" />
                  <span className='text-[14px]'>{car.gas}</span>
                </span>
                <span className='flex items-center'>
                  <img src={Transmission} alt="icon" />
                  <span className='text-[14px]'>{car.transmission}</span>
                </span>
                <span className='flex items-center'>
                  <img src={People} alt="icon" />
                  <span className='text-[14px]'>{car.people} People</span>
                </span>
              </div>

              <div className='flex items-center justify-between mt-[34px]'>
                <span>
                  ${car.price}.00/day
                </span>

                <Link to={`/detail/${car.id}`}>
                  <Button colorScheme='blue'>Rent Now</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className='flex justify-center mt-[48px]'>
          <Button variant='outline' colorScheme='blue' size='lg'>Show more car</Button>
        </div>
      </Container>
    </section>
  )
}
