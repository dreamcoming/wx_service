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

  // 获取素材总数
  router.get('/api/material/count', wx.getMaterialCount);

  // 标签
  router.get('/api/tags', wx.getTags);
  router.post('/api/tag', wx.createTag);
  router.put('/api/tag', wx.updateTags);
  router.delete('/api/tag', wx.deleteTag);
  router.get('/api/tag/users', wx.getUsersByTagId);
  router.post('/api/tag/users', wx.addTagToUsers);
  router.delete('/api/tag/users', wx.deleteUsersTag);
  router.get('/api/user/tags', wx.getUserTags);

  // 生成带参数的二维码
  router.post('/api/qrcode', wx.createQrcode);

  // 生成带参数的二维码
  router.get('/api/shorturl', wx.longUrltoShort);
};
