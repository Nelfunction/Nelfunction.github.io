import { Box, Button, Input } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';

export const Info = () => {
  const [data, setData] = useState<any>();
  const [key, setKey] = useState<string>('');

  const githubUserAPI = async () => {
    axios
      .get('https://api.github.com/user', {
        headers: {
          Authorization: 'Bearer ' + key,
        },
      })
      .then(res => {
        setData(JSON.stringify(res.data));
      });
  };

  return (
    <Box h="120vh" bg="blue.200">
      <Input onChange={e => setKey(e.target.value)} />
      <Button onClick={githubUserAPI}>Send</Button>
      {data ? <Box>{data}</Box> : <Box>empty</Box>}
    </Box>
  );
};
