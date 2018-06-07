import * as wxService from '@/services/wx';

// 获取微信access_token
export const getAccessToken = async (ctx) => {
  return await wxService.getAccessToken();
};

// 创建自定义菜单
export const setMenu = async (ctx) => {
  return await wxService.setMenu();
};

// 查询自定义菜单
export const getMenu = async (ctx) => {
  return await wxService.getMenu();
};

// 删除自定义菜单
export const delMenu = async (ctx) => {
  return await wxService.delMenu();
};
