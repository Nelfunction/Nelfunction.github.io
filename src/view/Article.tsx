import { Box, Button, Input } from '@chakra-ui/react';
import { useEffect, useLayoutEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { getContent, getRawContent } from '../api/github';
import { useSelector } from 'react-redux';

export const Article = () => {
  const path = useParams()['*'];
  const authToken = useSelector((state: any) => state.ghAPIReducer.authToken);

  const [markdown, setMarkdown] = useState<string>('');

  const apiCallContent = async () => {
    const content = await getRawContent(path);
    setMarkdown(content);
  };

  useLayoutEffect(() => {
    console.log('Article useLayoutEffect: ', path);
    apiCallContent();
  }, [path]);

  document.documentElement.setAttribute('data-color-mode', 'light');

  return (
    <Box h="120vh" p="16px">
      Article
      {authToken && <Link to={'/article/delete/' + path}>✖️삭제</Link>}
      <hr />
      <MDEditor.Markdown source={markdown} />
    </Box>
  );
};
