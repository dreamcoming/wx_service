import axios from 'axios';
import { wxApi } from '@/common/func';
import { wxAccount } from '@/config';

// 获取微信access_token
export const getAccessToken = async () => {
  const accessToken = '10_EYSl1-nLW-VH69f3LXbYIlqY8250H76GcJ_7Ob_x1eLk_PATCqwZ9M4jLzmA5l6iBMOX11ADHIR1v2iZkUQmaq2ogCSSQ5ximmAWS5wMO1BS55kWXM9myiwZp6qzxzogInhOfI-eo0oAUciTCXEeAAAHCJ';

  // const accessToken = await wxApi('get', 'https://api.weixin.qq.com/cgi-bin/token', {
  //   grant_type: 'client_credential',
  //   appid: wxAccount.appId,
  //   secret: wxAccount.appSecret
  // });

  return accessToken;
};

// 创建自定义菜单
export const setMenu = async () => {
  let menu = {
    "button": [
      {
        "type": "click",
        "name": "今日天气",
        "key": "V1001_TODAY_MUSIC"
      },
      {
        "name": "菜单",
        "sub_button": [
          {
            "type": "view",
            "name": "百度搜索",
            "url": "http://www.baidu.com/"
          },
          {
            "type": "click",
            "name": "赞赞我们",
            "key": "V1001_GOOD"
          }
        ]
      }
    ]
  };
  const ret = await wxApi('post', `https://api.weixin.qq.com/cgi-bin/menu/create?access_token=${await getAccessToken()}`, menu);
  return ret;
};

// 查询自定义菜单
export const getMenu = async () => {
  return await wxApi(
    'get', 
    `https://api.weixin.qq.com/cgi-bin/menu/get?access_token=${await getAccessToken()}`
  );
};

// 查询自定义菜单
export const delMenu = async () => {
  return await wxApi(
    'get', 
    `https://api.weixin.qq.com/cgi-bin/menu/delete?access_token=${await getAccessToken()}`
  );
};

