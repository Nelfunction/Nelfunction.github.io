import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AuthModal } from './AuthModal';
import { MenuItem } from './MenuItem';

export const Menu = () => {
  return (
    <Box pos="fixed" left={0} minW="240px" w="20%" h="full" p="16px" bg="green.100">
      <Link to="/home">
        <Box>홈</Box>
      </Link>
      <Link to="/info">
        <Box>정보</Box>
      </Link>
      <Link to="/article/edit">
        <Box>✒️</Box>
      </Link>
      <AuthModal />
      <hr />
      <MenuItem title="root" />
    </Box>
  );
};
