import { get } from 'lodash';
import errors from '@/common/errors';

// 请求封装，同时处理返回结果、异常错误等
export default () => async (ctx, next) => {
  // 处理默认图标
  if (ctx.url === '/favicon.ico') {
    ctx.status = 404;
    return;
  }

  const startTime = new Date();

  // 执行请求
  try {
    const data = await next();
    if (ctx.body === undefined) {
      ctx.body = data;
    }

    const duration = new Date().getTime() - startTime.getTime();
    console.log(`${ctx.method} - ${ctx.url} - ${duration}ms`);
  } catch (e) {
    const message = get(e, 'message');
    const duration = new Date().getTime() - startTime.getTime();

    console.log(`[${new Date()}] ${ctx.method} - ${ctx.url} - ${duration}ms - ${e} - ${errors[message] || message}`);
    console.log(e);

    if (message === 'NOT_FOUND') {
      ctx.status = 404;
    }

    if (errors[message]) {
      ctx.body = {
        code: message,
        message: errors[message],
      };
    } else {
      ctx.body = {
        code: 'UNKNOWN',
        message,
      };
    }
  }
};
