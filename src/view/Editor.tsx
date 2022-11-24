import { Box, Button, Input, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { useDispatch, useSelector } from 'react-redux';
import { getContent, getRawContent, uploadContent } from '../api/github';
import { setRefresh } from '../reducer/ghAPIReducer';
import { useNavigate, useParams } from 'react-router-dom';

export const Editor = () => {
  const params = useParams()['*'];
  const urlpath = params?.split('/').slice(0, -1).join('/');
  const urltitle = params?.split('/').at(-1)?.slice(0, -3);

  const dispatch = useDispatch();
  const authToken = useSelector((state: any) => state.ghAPIReducer.authToken);
  const nav = useNavigate();

  const [title, setTitle] = useState<string>('');
  const [path, setPath] = useState<string>('');
  const [markdown, setMarkdown] = useState<string>('');

  const [sha, setSHA] = useState<string>('');

  const getContentSHA = async () => {
    const data = await getContent(params);
    setSHA(data.sha);
  };

  const apiCallContent = async () => {
    const content = await getRawContent(params);
    setMarkdown(content);
  };
  useEffect(() => {
    if (urltitle) {
      console.log('edit mode');
      setTitle(urltitle);
      setPath(urlpath ? urlpath : '');
      getContentSHA();
      apiCallContent();
    }
  }, [urltitle]);

  document.documentElement.setAttribute('data-color-mode', 'light');

  const uploadPost = async () => {
    //
    const data = await uploadContent(authToken, markdown, path, title, sha);
    if (data) {
      alert('업로드 완료');
      dispatch(setRefresh(path));
      nav('../../article/view/' + (path ? path + '/' : path) + title + '.md');
    } else {
      alert('실패');
    }
  };

  return (
    <Box p="16px">
      <Box fontSize="24px">게시물 작성</Box>

      <Input mt="16px" placeholder="제목" value={title} onChange={e => setTitle(e.target.value)} />
      <Input my="16px" placeholder="경로" value={path} onChange={e => setPath(e.target.value)} />

      <MDEditor height="480px" value={markdown} onChange={setMarkdown as any} />
      <Flex w="full" mt="16px" justifyContent="flex-end">
        <Button colorScheme="blue" onClick={uploadPost}>
          작성 완료
        </Button>
      </Flex>
    </Box>
  );
};
