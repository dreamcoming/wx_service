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

  switch (pushMsg.MsgType[0]) {
    case 'event':
      console.log(`这是一个事件消息，事件类型Event: ${pushMsg.Event[0]}，事件Key: ${pushMsg.EventKey[0]}`);
    break;
    case 'text':
      console.log(`这是一个文本消息，消息内容Content: ${pushMsg.Content[0]}`);
    break;
  }

  return await wxService.welcomeSay(pushMsg);
  
  // return 'success';
};

// 事件推送数据
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

// 关注事件:  MsgType: ["event"], "Event":["subscribe"], "EventKey":[""]
// 取消关注事件:  MsgType: ["event"], "Event":["unsubscribe"], "EventKey":[""]
// 扫描二维码： "MsgType":["event"],"Event":["SCAN"],"EventKey":["123"]

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

// 获取素材总数
export const getMaterialCount = async (ctx) => {
  return await wxService.getMaterialCount();
};

// 创建标签
export const createTag = async (ctx) => {
  return await wxService.createTag();
};

// 获取标签
export const getTags = async (ctx) => {
  return await wxService.getTags();
};

// 编辑标签
export const updateTags = async (ctx) => {
  return await wxService.updateTags();
};

// 删除标签
export const deleteTag = async (ctx) => {
  return await wxService.deleteTag();
};

// 获取标签下粉丝列表
export const getUsersByTagId = async (ctx) => {
  return await wxService.getUsersByTagId();
};

// 为用户添加标签
export const addTagToUsers = async (ctx) => {
  return await wxService.addTagToUsers();
};

// 批量为用户取消标签
export const deleteUsersTag = async (ctx) => {
  return await wxService.deleteUsersTag();
};

// 获取用户身上的标签列表
export const getUserTags = async (ctx) => {
  return await wxService.getUserTags();
};

// 生成二维码ticket
export const createQrcode = async (ctx) => {
  return await wxService.createQrcode();
};

// 长链接转短链接接口
export const longUrltoShort = async (ctx) => {
  return await wxService.longUrltoShort();
};
