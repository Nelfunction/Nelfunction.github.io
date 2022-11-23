import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './view/Layout';
import { Home } from './view/Home';
import { Info } from './view/Info';
import { Editor } from './view/Editor';
import { Article } from './view/Article';
import { useSelector } from 'react-redux';

export const App = () => {
  const authToken = useSelector((state: any) => state.ghAPIReducer.authToken);

  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="info" element={<Info />} />
          <Route path="article/view/*" element={<Article />} />
          <Route path="article/edit" element={authToken ? <Editor /> : <Navigate to="/home" />} />
          <Route index element={<Navigate to="home" replace />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
};
