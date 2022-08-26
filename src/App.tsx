import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './view/Layout';
import { Home } from './view/Home';
import { Info } from './view/Info';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="info" element={<Info />} />
        <Route index element={<Navigate to="home" replace />} />
      </Route>
    </Routes>
  </ChakraProvider>
);
