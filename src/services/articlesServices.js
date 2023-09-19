// import { privateApi, publicApi } from './http';

// export const getArticlesService = async () => {
//   const { data } = await publicApi.get('articles');

//   return data;
// };

// export const getSingleArticleService = async id => {
//   const { data } = await publicApi.get(`articles/${id}`);
//   return data;
// };

// export const createArticleService = async body => {
//   const { data } = await privateApi.post('articles', body);
//   return data;
// };

// export const deleteArticleService = async id => {
//   const { data } = await privateApi.delete(`articles${id}`);
//   return data;
// };

import { privateApi } from './http';

export const getArticlesService = async () => {
  const { data } = await privateApi.get('tasks');

  return data;
};

export const getSingleArticleService = async id => {
  const { data } = await privateApi.get(`articles/${id}`);
  return data;
};

export const createArticleService = async body => {
  const { data } = await privateApi.post('tasks', body);
  return data;
};

export const deleteArticleService = async id => {
  const { data } = await privateApi.delete(`tasks/${id}`);
  return data;
};
