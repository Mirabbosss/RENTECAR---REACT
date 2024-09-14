import { Box, Container, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export const Footer = () => {
  return (
    <footer>
      <Container maxW='1250px' paddingY='80px'>
        <Flex justify={'space-between'}>
          <Box>
            <NavLink exact to='/' className='max-w-[148px] text-[#3563E9] text-4xl font-bold'>MORENT</NavLink>
            <p className='max-w-[300px] text-[16px] font-medium text-[#8C8C8C] mt-4'>
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </Box>

          <nav className='flex gap-[60px]'>
            <ul>
              <li className='font-semibold text-[20px] text-[#1A202C] hover:cursor-pointer'>
                About
              </li>
              <li className='font-medium text-[16px] text-[#8C8C8C] mt-[26px] hover:cursor-pointer'>
                How it works
              </li>
              <li className='font-medium text-[16px] text-[#8C8C8C] mt-[26px] hover:cursor-pointer'>
                Featured
              </li>
              <li className='font-medium text-[16px] text-[#8C8C8C] mt-[26px] hover:cursor-pointer'>
                Partnership
              </li>
              <li className='font-medium text-[16px] text-[#8C8C8C] mt-[26px] hover:cursor-pointer'>
                Bussiness Relation
              </li>
            </ul>

            <ul>
              <li className='font-semibold text-[20px] text-[#1A202C] hover:cursor-pointer'>
                Community
              </li>
              <li className='font-medium text-[16px] text-[#8C8C8C] mt-[26px] hover:cursor-pointer'>
                Events
              </li>
              <li className='font-medium text-[16px] text-[#8C8C8C] mt-[26px] hover:cursor-pointer'>
                Blog
              </li>
              <li className='font-medium text-[16px] text-[#8C8C8C] mt-[26px] hover:cursor-pointer'>
                Podcast
              </li>
              <li className='font-medium text-[16px] text-[#8C8C8C] mt-[26px] hover:cursor-pointer'>
                BInvite a friend
              </li>
            </ul>

            <ul>
              <li className='font-semibold text-[20px] text-[#1A202C] hover:cursor-pointer'>
                Socials
              </li>
              <li className='font-medium text-[16px] text-[#8C8C8C] mt-[26px] hover:cursor-pointer'>
                Discord
              </li>
              <li className='font-medium text-[16px] text-[#8C8C8C] mt-[26px] hover:cursor-pointer'>
                Instagram
              </li>
              <li className='font-medium text-[16px] text-[#8C8C8C] mt-[26px] hover:cursor-pointer'>
                Twitter
              </li>
              <li className='font-medium text-[16px] text-[#8C8C8C] mt-[26px] hover:cursor-pointer'>
                Facebook
              </li>
            </ul>
          </nav>
        </Flex>

        <Box className='border-t-2 border-[#f0f0f0] mt-9 pt-8 flex justify-between'>
          <p className='text-[16px] font-semibold text-[#1A202C]'>
            ©2022 MORENT. All rights reserved
          </p>

          <div className='flex gap-[20px]'>
            <p className='text-[16px] font-semibold text-[#1A202C] hover:cursor-pointer'>
              Privacy & Policy
            </p>
            <p className='text-[16px] font-semibold text-[#1A202C] hover:cursor-pointer'>
              Terms & Condition
            </p>
          </div>
        </Box>
      </Container>
    </footer>
  )
}