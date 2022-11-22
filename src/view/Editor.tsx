import { Box, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

export const Editor = () => {
  const [markdown, setMarkdown] = useState<string>('');
  const [key, setKey] = useState<string>('');

  document.documentElement.setAttribute('data-color-mode', 'light');

  return (
    <Box h="120vh" bg="red.200" p="16px">
      <MDEditor value={markdown} onChange={setMarkdown as any} />
      <MDEditor.Markdown source={markdown} />
    </Box>
  );
};
