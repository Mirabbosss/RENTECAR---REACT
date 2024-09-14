import { Container, Box, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import searchIcon from '../../icons/searchIcon.svg';
import filterIcon from '../../icons/filter.svg';
import profileIcon from '../../icons/profileIcon.svg';
import likeIcon from '../../icons/Like.svg';
import notificationsIcon from '../../icons/Notification.svg';
import settingsIcon from '../../icons/Settings.svg';
import './style.scss';

export const Header = () => {
  return (
    <header className='border-b-[1px] border-gray-200'>
      <Container maxW='1250px' paddingY='5'>
        <nav>
          <ul className='flex justify-between'>

            <li>
              <NavLink exact to='/' className='max-w-[148px] text-[#3563E9] text-4xl font-bold'>MORENT</NavLink>
            </li>

            <li className='flex  w-[500px] rounded-[70px] border border-[#596780] px-[20px] py-[10px]'>

              <img src={searchIcon} alt="search" />
              <input type="text" placeholder='Search something here' className='border-none outline-none text-[14px] text-[#596780] w-[400px] font-medium mx-2' />
              <NavLink exact to='/category'>
                <img src={filterIcon} alt="filter" />
              </NavLink>

            </li>

            <li>

              <Flex gap='5'>
                <NavLink exact to='#'>
                  <img src={likeIcon} alt="profile" />
                </NavLink>
                <NavLink exact to='#'>
                  <img src={notificationsIcon} alt="profile" />
                </NavLink>
                <NavLink exact to='#'>
                  <img src={settingsIcon} alt="profile" />
                </NavLink>
                <NavLink exact to='/dashboard'>
                  <img src={profileIcon} alt="profile" />
                </NavLink>
              </Flex>

            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}