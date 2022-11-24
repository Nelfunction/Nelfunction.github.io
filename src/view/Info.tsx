import { Box, Link } from '@chakra-ui/react';

export const Info = () => {
  return (
    <Box p="16px">
      <Box fontSize="24px">Just For Fun!</Box>
      <br />
      <Box>E-mail: oat641@gmail.com</Box>
      <br />
      <Box>
        Post Repository :&nbsp;
        <InfoLink href="https://github.com/Nelfunction/Nelfunction.github.io/tree/dir" />
      </Box>
      <Box>
        Project Repository :&nbsp;
        <InfoLink href="https://github.com/Nelfunction/Nelfunction.github.io" />
      </Box>
      <br />
      <Box>
        GitHub API :&nbsp;
        <InfoLink href="https://docs.github.com/en/rest/search" />
      </Box>
      <Box>
        Markdown Editor :&nbsp;
        <InfoLink href="https://uiwjs.github.io/react-md-editor/" />
      </Box>
    </Box>
  );
};

const InfoLink = ({ href }: { href: string }) => {
  return (
    <Link href={href} color="gray.500" isExternal>
      {href}🔗
    </Link>
  );
};
