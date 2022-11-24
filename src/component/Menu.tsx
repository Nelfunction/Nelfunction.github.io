import { Box, Flex, Spacer } from '@chakra-ui/react';
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
        <Box fontSize="24px" my="8px">
          NELFUNCTION:
        </Box>
      </Link>
      <Flex>
        <Link to="/info">
          <Box>INFO</Box>
        </Link>
        &nbsp;|&nbsp;
        <AuthModal />
      </Flex>

      <br />
      <hr />
      <br />

      <Flex>
        <Box> POSTS</Box>
        <Spacer />
        <Box onClick={reloadMenu} userSelect="none">
          ↻
        </Box>
      </Flex>

      {toggle && <MenuItem title="root" />}
    </Box>
  );
};
