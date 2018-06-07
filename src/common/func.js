import axios from 'axios';
import { wxAccount } from '@/config';
import errors from '@/common/errors';

// 调用微信接口
export const wxApi = async (method, url, params, returnCode) => {
  if (['get', 'post', 'put'].indexOf(method) === -1) {
    throw new Error(errors.METHOD_ERROR);
  }
  console.log(`请求微信api: ${method} - ${url}`);
  console.log(`请求参数: ${JSON.stringify(params)}`);
  if (method === 'get') {
    params = {params};
  }
  const { data } = await axios[method](url, params);

  if (!data.errcode || returnCode) {
    return data;
  }
  console.log(`微信返回：${JSON.stringify(data)}`);
  throw new Error(data.errmsg); 
};

  