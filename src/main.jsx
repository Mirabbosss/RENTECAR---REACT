import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AppRouter } from './router';
import './index.css'

createRoot(document.getElementById('root')).render(
  <ChakraProvider>
      <RouterProvider router={AppRouter}/>
  </ChakraProvider>
)