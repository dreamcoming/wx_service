import * as wx from '@/controllers/wx';

// 设置路由
export default (router) => {
  // 推送事件
  router.all('/', wx.pushEvent);

  // 获取access_token
  router.get('/api/access_token', wx.getAccessToken);

  // 菜单
  router.get('/api/menu', wx.getMenu);
  router.post('/api/menu', wx.setMenu);
  router.delete('/api/menu', wx.delMenu);
};
