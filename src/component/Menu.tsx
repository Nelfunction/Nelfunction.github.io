import { Box, Flex } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { getDirList } from '../api/github';

export const Menu = () => {
  const [dirlist, setDirList] = useState<[any]>();

  const apiCallDirList = async () => {
    setDirList(await getDirList());
  };

  useEffect(() => {
    apiCallDirList();
  }, []);

  return (
    <Box pos="fixed" left={0} w="20%" h="full" bg="green.100">
      <Link to="/home">
        <Box>홈</Box>
      </Link>
      <Link to="/info">
        <Box>정보</Box>
      </Link>
      <Box>
        {dirlist?.map((val, idx) => {
          if (val.type === 'dir') return <Box key={idx}>{val.name}</Box>;
        })}
      </Box>
    </Box>
  );
};
