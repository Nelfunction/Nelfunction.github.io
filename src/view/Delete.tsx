import { Box, Button, Input } from '@chakra-ui/react';
import { useEffect, useLayoutEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { deleteContent, getContent, getRawContent } from '../api/github';
import { useDispatch, useSelector } from 'react-redux';
import { setRefresh } from '../reducer/ghAPIReducer';

export const Delete = () => {
  const path = useParams()['*'];
  const dispatch = useDispatch();
  const authToken = useSelector((state: any) => state.ghAPIReducer.authToken);
  const nav = useNavigate();

  const [sha, setSHA] = useState<string>('');

  const getContentSHA = async () => {
    const data = await getContent(path);
    setSHA(data.sha);
  };

  const deletePost = async () => {
    if (path) {
      const data = await deleteContent(authToken, sha, path);
      if (data) {
        alert('삭제 완료');
        const dirpath = path.split('/').slice(0, -1).join('/');
        console.log(dirpath);
        dispatch(setRefresh(dirpath));
        nav('../../home/');
      } else {
        alert('실패');
      }
    }
  };

  useEffect(() => {
    console.log('Delete:', path);
    getContentSHA();
  }, []);

  document.documentElement.setAttribute('data-color-mode', 'light');

  return (
    <Box h="120vh" p="16px">
      삭제
      <Box>{path}</Box>
      <Box>{path?.split('/').slice(0, -1).join('/')}</Box>
      <Button colorScheme="red" onClick={deletePost}>
        삭제
      </Button>
    </Box>
  );
};
