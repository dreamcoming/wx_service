import Koa from 'koa';
import koaCors from 'koa-cors';
import koaXmlBody from 'koa-xml-body';
import koaBody from 'koa-body';
import { port } from '@/config';
import router from '@/routers';
import wrapper from '@/middlewares/wrapper';

// 实例化
const app = new Koa();
app.proxy = true;

// 配置koa
app.use(koaCors());
app.use(koaXmlBody());
app.use(koaBody({
  patchNode: true,
  patchKoa: false,
  multipart: true,
  formidable: {
    maxFileSize: 10 * 1024 * 1024,
  },
  strict: false,
}));
app.use(wrapper());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port);

// 欢迎信息
console.log(`✈️  服务端已启动，监听端口${port}`);
