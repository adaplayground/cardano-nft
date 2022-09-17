import apisauce from 'apisauce';

const create = () => {
  const api = apisauce.create({
    baseURL: '',
    // 60 second timeout...
    timeout: 60000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const getMetaData = id => api.get(id);
  return {
    getMetaData,
  };
};

export default {
  create,
};
