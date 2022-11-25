import { Box, Button, Flex, Input, Spacer } from '@chakra-ui/react';
import { useEffect, useLayoutEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { getContent, getRawContent } from '../api/github';
import { useSelector } from 'react-redux';
import { Base64 } from 'js-base64';

export const Article = () => {
  const path = useParams()['*'];
  const title = path?.split('/').at(-1)?.slice(0, -3);
  const authToken = useSelector((state: any) => state.ghAPIReducer.authToken);

  const [markdown, setMarkdown] = useState<string>('');

  const apiCallContent = async () => {
    const data = await getContent(path);
    setMarkdown(Base64.decode(data.content));
  };

  useLayoutEffect(() => {
    console.log('Article useLayoutEffect: ', path);
    apiCallContent();
  }, [path]);

  document.documentElement.setAttribute('data-color-mode', 'light');

  return (
    <Box h="120vh" p="24px">
      <Flex alignItems="center">
        <Box fontSize="24px" fontWeight="600">
          {title}
        </Box>
        <Spacer />
        {authToken && <Link to={'/article/edit/' + path}>✏️</Link>}
        {authToken && <Link to={'/article/delete/' + path}>✖️</Link>}
      </Flex>
      <hr />
      <MDEditor.Markdown source={markdown} />
    </Box>
  );
};
