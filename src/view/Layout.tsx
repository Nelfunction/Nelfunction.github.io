import { Box, Container } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Box pos="fixed" zIndex="-1" h="100vh" w="full" bgImage="url('./background.jpg')" />
      <Container maxW="1000px" bg="white" borderRadius="30px" padding="16px">
        레이아웃 <br />
        <Link to="/home">home</Link> | <Link to="/info">info</Link>
        <Outlet />
      </Container>
    </>
  );
};
