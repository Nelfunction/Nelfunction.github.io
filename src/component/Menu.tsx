import { Box, Flex } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { getContent } from '../api/github';
import { MenuItem } from './MenuItem';

export const Menu = () => {
  return (
    <Box pos="fixed" left={0} minW="240px" w="20%" h="full" bg="green.100">
      <Link to="/home">
        <Box>홈</Box>
      </Link>
      <Link to="/info">
        <Box>정보</Box>
      </Link>
      <Link to="/editor">
        <Box>작성</Box>
      </Link>
      <hr />
      <MenuItem title="root" />
    </Box>
  );
};
