import { Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box w="full" h="full">
      {/* 메뉴 */}
      <Box pos="fixed" left={0} w="20%" h="full" bg="green.100">
        <Link to="/home">
          <Box>홈</Box>
        </Link>
        <Link to="/info">
          <Box>정보</Box>
        </Link>
      </Box>

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
