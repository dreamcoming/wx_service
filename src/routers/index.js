import Router from 'koa-router';
import setWxRouter from './wx';

// 路由
const router = new Router();
setWxRouter(router);

// // 处理根路径访问
// router.all('/', () => 'I am alive.');

// // 处理options访问
// router.options('*', () => 'I am alive.');

// 处理404错误
// router.all('*', () => {
//   throw new Error('NOT_FOUND');
// });

router.all('*', async (ctx) => {
  try {
    console.log(`接收到微信推送：${JSON.stringify(ctx.request.body.xml)}`);
  } catch (e) {
  }
  ctx.body = ctx.query.echostr || 'hjgJKLKVvhgvuvJHBVgyljkb';
});

export default router;
