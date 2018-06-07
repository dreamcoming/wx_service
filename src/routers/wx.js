import * as wx from '@/controllers/wx';

// 设置路由
export default (router) => {
  router.get('/api/access_token', wx.getAccessToken);
  router.get('/api/menu', wx.getMenu);
  router.post('/api/menu', wx.setMenu);
  router.delete('/api/menu', wx.delMenu);
};
