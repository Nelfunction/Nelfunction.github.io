import axios from 'axios';

const BASIC_ADDRESS = 'https://api.github.com';
const USER_REPO = 'Nelfunction/Nelfunction.github.io';

// get content
export const getContent = async (path: string = '') => {
  const res = await axios.get(`${BASIC_ADDRESS}/repos/${USER_REPO}/contents/${path}?ref=dir`);
  return res.data;
};

// get raw content
export const getRawContent = async (path: string = '') => {
  const res = await axios.get(`https://raw.githubusercontent.com/${USER_REPO}/dir/${path}`);
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
export const githubUpload = (
  token: string,
  message: string,
  content: string,
  repo: string,
  dir: string,
  filename: string,
) => {
  axios
    .put(
      `https://api.github.com/repos/${repo}/contents/${dir}${filename}`,
      {
        message: message,
        content: content,
      },
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      },
    )
    .then(({ data }) => {
      console.log(data);
      alert('업로드 성공');
    })
    .catch(err => {
      console.log(err);
      alert('githubUpload failed');
    });
};
