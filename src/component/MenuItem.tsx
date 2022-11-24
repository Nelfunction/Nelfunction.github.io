import { Box, Flex } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { getContent } from '../api/github';
import { setRefresh } from '../reducer/ghAPIReducer';

export const MenuItem = ({ path = '', title = '' }: { path?: string; title?: string }) => {
  const dispatch = useDispatch();
  const refresh = useSelector((state: any) => state.ghAPIReducer.refresh);

  const [dirlist, setDirList] = useState<[any]>();
  const [filelist, setFileList] = useState<[any]>();
  const [toggle, setToggle] = useState(false);

  const apiCallDirList = async () => {
    const contents = await getContent(path);
    const dirs = contents.filter((e: any) => e.type === 'dir');
    const files = contents.filter((e: any) => e.type === 'file');
    setDirList(dirs);
    setFileList(files);
  };

  useEffect(() => {
    console.log('MenuItem :', path);
    apiCallDirList();
  }, []);

  useEffect(() => {
    if (refresh === path) {
      console.log('MenuItem :', path);
      apiCallDirList();
      dispatch(setRefresh(null));
    }
  }, [refresh]);

  const nav = useNavigate();

  return (
    <Box>
      <Box onClick={() => setToggle(v => !v)}>📁{title}</Box>
      {toggle && (
        <Box pl="8px">
          {dirlist?.map((val, idx) => (
            // <Box key={idx}>{val.name}</Box>
            <MenuItem key={idx} path={path ? path + '/' + val.name : val.name} title={val.name} />
          ))}
          {filelist?.map((val, idx) => (
            <Box key={idx}>
              {/* <Link to={'article/view' + path + '/' + val.name}>📄{val.name}</Link> */}
              {/* <Box onClick={() => nav('article/view/' + (path ? path + '/' : path) + val.name)}>
                📄{val.name}
              </Box> */}
              <Link to={'/article/view/' + (path ? path + '/' : path) + val.name}>
                📄{val.name}
              </Link>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};
