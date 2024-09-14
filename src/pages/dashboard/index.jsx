import { Button, Icon, Box, Heading, SimpleGrid, CardHeader, CardBody, Card, Text } from '@chakra-ui/react';
import './style.scss';
import { dashboardMenu, dashboardPreferences } from '@/mocks';
import { NavLink } from 'react-router-dom';
import { CiLogout } from 'react-icons/ci';

export const Dashboard = () => {
  return (
    <div className='flex'>
      <aside className='min-w-[360px] bg-white p-8'>
        <h1 className='text-[#90A3BF] text-[12px] font-semibold'>MAIN MENU</h1>

        <ul>
          {dashboardMenu?.map((item) => (
            <li key={item.id}>
              
              <NavLink to='/dashboard' className='p-[10px] hover:bg-blue-500 hover:text-[#fff] rounded-[10px] flex items-center gap-3 text-[#90A3BF]'> <Icon as={item.icon}/> {item.label} </NavLink>
              
            </li>
          ))}
        </ul>

        <h1 className='text-[#90A3BF] text-[12px] font-semibold mt-[56px]'>PREFERENCES</h1>

        <ul>
          {dashboardPreferences?.map((item) => (
            <li key={item.id}>
              
              <NavLink to='/dashboard' className='p-[10px] hover:bg-blue-500 hover:text-[#fff] rounded-[10px] flex items-center gap-3 text-[#90A3BF]'> <Icon as={item.icon}/> {item.label} </NavLink>
              
            </li>
          ))}
        </ul>

        <ul className='mt-[150px]'>
          <Button leftIcon={<CiLogout/>} colorScheme='blue'>LOG OUT</Button>
        </ul>

      </aside>

      <Box ml="260px" p={6}>
        <Heading as="h1" mb={6}>Dashboard</Heading>
        
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          <Card>
            <CardHeader>
              <Heading size="md">User Statistics</Heading>
            </CardHeader>
            <CardBody>
              <Text>Total Users: 1200</Text>
              <Text>Active Users: 300</Text>
            </CardBody>
          </Card>
          
          <Card>
            <CardHeader>
              <Heading size="md">Sales Overview</Heading>
            </CardHeader>
            <CardBody>
              <Text>Total Sales: $24,000</Text>
              <Text>Monthly Growth: 15%</Text>
            </CardBody>
          </Card>
          
          <Card>
            <CardHeader>
              <Heading size="md">Recent Activity</Heading>
            </CardHeader>
            <CardBody>
              <Text>User John logged in 2 hours ago</Text>
              <Text>New sale completed by Sarah</Text>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Box>
    </div>
  )
}
