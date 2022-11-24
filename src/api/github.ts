import axios from 'axios';

const API = 'https://api.github.com';
const REPO = 'Nelfunction/Nelfunction.github.io';
const BRANCH = 'dir';

// get content
export const getContent = async (path: string = '') => {
  const res = await axios.get(`${API}/repos/${REPO}/contents/${path}?ref=dir`);
  return res.data;
};

// get raw content
export const getRawContent = async (path: string = '') => {
  const res = await axios.get(`https://raw.githubusercontent.com/${REPO}/${BRANCH}/${path}`);
  return res.data;
};

// get get auth user
export const getUserAuth = async (key: string) => {
  try {
    const res = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: 'Bearer ' + key,
      },
    });
    return res.data.login;
  } catch (err) {
    console.log(err);
  }
  return '';
};

// github: 파일 업로드
export const githubUpload = async (key: string, content: string, path: string, title: string) => {
  try {
    const res = await axios.put(
      `${API}/repos/${REPO}/contents/${path ? path + '/' : path}${title}.md`,
      {
        message: 'upload: ' + title,
        content: btoa(content),
        branch: BRANCH,
      },
      {
        headers: {
          Authorization: 'Bearer ' + key,
        },
      },
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
  return null;
};
