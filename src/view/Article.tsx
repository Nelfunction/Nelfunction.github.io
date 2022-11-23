import { Box, Button, Input } from '@chakra-ui/react';
import { useEffect, useLayoutEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { useParams, useSearchParams } from 'react-router-dom';
import { getContent, getRawContent } from '../api/github';

export const Article = () => {
  const path = useParams()['*'];
  const [markdown, setMarkdown] = useState<string>('');

  const apiCallDirList = async () => {
    const content = await getRawContent(path);
    // console.log('Article content : ', content);
    setMarkdown(content);
  };

  useLayoutEffect(() => {
    console.log('Article useLayoutEffect: ', path);
    apiCallDirList();
  }, [path]);

  document.documentElement.setAttribute('data-color-mode', 'light');

  return (
    <Box h="120vh" bg="red.200" p="16px">
      text
      <MDEditor.Markdown source={markdown} />
    </Box>
  );
};
