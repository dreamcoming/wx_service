import * as wxService from '@/services/wx';

// 推送事件
export const pushEvent = async (ctx) => {
  // return await wxService.getAccessToken();
  let pushMsg;
  try {
    pushMsg = ctx.request.body.xml;
  } catch (e) {
  }
  console.log(`接收到微信推送：${JSON.stringify(pushMsg)}`);

  if (!pushMsg) {
    return 'success';
  }

  switch (pushMsg.MsgType) {
    case 'event':
      console.log('消息类型MsgType:', MsgType);
    break;
  }

  return 'success';
};

// {
//   "ToUserName": [
//     "gh_dd65f8119026"s
//   ],
//   "FromUserName": [
//     "onnmW1CsytyIY68WlDNlzr7jnrxs"
//   ],
//   "CreateTime": [
//     "1528369863"
//   ],
//   "MsgType": [
//     "event"
//   ],
//   "Event": [s
//     "CLICK"
//   ],
//   "EventKey": [
//     "V1001_TODAY_MUSIC"
//   ]
// }



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
