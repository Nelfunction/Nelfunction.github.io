import { Box, Button, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { useParams } from 'react-router-dom';
import { getContent, getRawContent } from '../api/github';

export const Article = () => {
  const path = useParams().path;
  console.log('Article : ', path);
  const [markdown, setMarkdown] = useState<string>('');

  const apiCallDirList = async () => {
    const content = await getRawContent(path);
    setMarkdown(content);
  };

  useEffect(() => {
    console.log('Article : ', path);
    apiCallDirList();
  }, []);

  document.documentElement.setAttribute('data-color-mode', 'light');

  return (
    <Box h="120vh" bg="red.200" p="16px">
      text
      <MDEditor.Markdown source={markdown} />
    </Box>
  );
};
