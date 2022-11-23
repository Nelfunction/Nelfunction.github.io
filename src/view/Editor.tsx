import { Box, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { useDispatch, useSelector } from 'react-redux';

export const Editor = () => {
  const dispatch = useDispatch();
  const authToken = useSelector((state: any) => state.ghAPIReducer.authToken);

  const [markdown, setMarkdown] = useState<string>('');

  document.documentElement.setAttribute('data-color-mode', 'light');

  return (
    <Box h="120vh" bg="red.200" p="16px">
      <MDEditor value={markdown} onChange={setMarkdown as any} />
      <MDEditor.Markdown source={markdown} />
    </Box>
  );
};
