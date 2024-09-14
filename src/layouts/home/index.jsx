import { Footer, Header } from '@/components/layouts';
import './style.scss';
import { Outlet } from 'react-router';

export const HomeLayout = () => {
  return (
    <>
    <Header/>

    <div className='bg-[#F6F7F9]'>
      <Outlet />
    </div>

    <Footer/>    
    </>
  )
}