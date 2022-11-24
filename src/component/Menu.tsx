import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setRefresh } from '../reducer/ghAPIReducer';
import { AuthModal } from './AuthModal';
import { MenuItem } from './MenuItem';

export const Menu = () => {
  const [toggle, setToggle] = useState(true);

  const reloadMenu = () => {
    setToggle(e => !e);
    setTimeout(() => setToggle(e => !e), 0);
  };

  return (
    <Box pos="fixed" left={0} minW="240px" w="20%" h="full" p="16px" borderRight="1px">
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
      <br />
      <hr />
      <br />
      <Box onClick={reloadMenu}>🌀</Box>
      {toggle && <MenuItem title="root" />}
    </Box>
  );
};
