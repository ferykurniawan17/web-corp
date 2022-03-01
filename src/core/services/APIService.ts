import axios from 'axios';

const API = axios.create({
    headers: {},
});

export const APIClean = axios.create({
    headers: {},
});

export const APIUpload = axios.create({
    headers: {
        'content-type': 'multipart/form-data',
    },
});

const getHeader = () => {
  return {
    headers: {
      // 'Authorization': `Bearer ${token?.access_token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  };
}

export const post = async (path: string, spec: Record<string, any>) => {
  return API.post(`${process.env.API}${path}`, spec, getHeader());
}

export const patch = async (path: string, spec: Record<string, any>) => {
  return API.patch(`${process.env.API}${path}`, spec, getHeader());
}

export const get = async (path: string, params: Record<string, any>) => {
  return API.get(
    `${process.env.API}${path}`,
    { ...getHeader(), params: params }
  );
}

export const put = async (path: string, spec: Record<string, any>) => {
  return API.put(`${process.env.API}${path}`, spec, getHeader());
}

export const remove = async (path: string, params: Record<string, any>) => {
  return API.delete(`${process.env.API}${path}`, { params, ...getHeader() });
}

export default API;
