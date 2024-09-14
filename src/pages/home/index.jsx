import './style.scss';
import ads1 from '../../assets/images/Ads1.jpg';
import ads2 from '../../assets/images/Ads2.jpg';
import { Container, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { Cars } from '@pages';

export const Home = () => {
  return (
    <Container maxW='1250px' paddingY={8}>
    <Flex gap='4'>
      <NavLink to='/'>
        <img src={ads1} alt="Advertisement 1" />
      </NavLink>
      <NavLink to='/'>
        <img src={ads2} alt="Advertisement 2" />
      </NavLink>
    </Flex>

    <Cars/>
    </Container>
  )
}