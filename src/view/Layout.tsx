import { Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Menu } from '../component/Menu';

export const Layout = () => {
  return (
    <Box w="full" h="full">
      {/* 메뉴 */}
      <Menu />

      {/* 본문 */}
      <Flex>
        <Box w="20%" h="full" />
        <Box w="80%" h="100vh" overflow="auto">
          <Outlet />
        </Box>
      </Flex>
    </Box>
  );
};
