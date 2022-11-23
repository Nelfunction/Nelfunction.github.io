import { Box, Link } from '@chakra-ui/react';

export const Info = () => {
  return (
    <Box p="16px">
      <Box fontSize="24px">Just For Fun!</Box>
      <br />
      <Box>
        Post Repository :&nbsp;
        <Link href="https://github.com/Nelfunction/Nelfunction.github.io/tree/dir" isExternal>
          https://github.com/Nelfunction/Nelfunction.github.io/tree/dir🔗
        </Link>
      </Box>
      <Box>
        GitHub API :&nbsp;
        <Link href="https://docs.github.com/en/rest/search" isExternal>
          https://docs.github.com/en/rest/search🔗
        </Link>
      </Box>
      <Box>
        Markdown Editor :&nbsp;
        <Link href="https://uiwjs.github.io/react-md-editor/" isExternal>
          https://uiwjs.github.io/react-md-editor/🔗
        </Link>
      </Box>
    </Box>
  );
};
