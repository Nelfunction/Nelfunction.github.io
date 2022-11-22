import axios from 'axios';

const BASIC_ADDRESS = 'https://api.github.com';
const USER_REPO = 'Nelfunction/2022_summer_study';

// 디렉토리 목록 불러오기
export const getContent = async (path: string = '') => {
  console.log('getContent : ', path);
  const res = await axios.get(`${BASIC_ADDRESS}/repos/${USER_REPO}/contents/${path}`);
  return res.data;
};

// get raw file
export const getRawContent = async (path: string = '') => {
  console.log('getRawContent : ', path);
  const res = await axios.get(`https://raw.githubusercontent.com/${USER_REPO}/main/${path}`);
  return res.data;
};

// github: repo 목록 가져오기
export const githubRepoList = async (token: string) => {
  let list: Array<{ name: string; url: string }> = [];
  await axios
    .get('https://api.github.com/user/repos', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    .then(({ data }) => {
      let repos: Array<{ name: string; url: string }> = [];
      data.map((item: any) => {
        repos.push({ name: item.full_name, url: item.owner.avatar_url });
      });
      list = repos;
    })
    .catch(err => {
      alert('githubRepoList failed');
    });
  return list;
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
