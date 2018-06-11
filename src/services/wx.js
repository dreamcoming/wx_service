import axios from 'axios';
import { wxApi } from '@/common/func';
import { wxAccount } from '@/config';
import { xmlToJson, jsonToXml } from './wx_tool';

// 获取微信access_token
export const getAccessToken = async () => {
  const access_token = '10_JaOaO9j_T-CfV7MBxoEZ1ygahlhyoPjYwMD9lUgZpkof2xTG9dLz3jPa5EVSiM5CoJUMdr7iujoa8Mfzj-4zUMSPf_ulytQhGIo8_jtIT4JIyC3px_Rk26KmifgYARdADABDU';

  // const accessTokenInfo = await wxApi('get', 'https://api.weixin.qq.com/cgi-bin/token', {
  //   grant_type: 'client_credential',
  //   appid: wxAccount.appId,
  //   secret: wxAccount.appSecret
  // });
  // const { access_token } = accessTokenInfo;

  return access_token;
};

// 欢迎语
export const welcomeSay = async (msg) => { 
  const result = jsonToXml({
    xml: {
      ToUserName: msg.FromUserName,
      FromUserName: msg.ToUserName,
      CreateTime: Date.now(),
      MsgType: msg.MsgType,
      Content: 'welcome to bobby~~'
    }
  })
  ctx.res.setHeader('Content-Type', 'application/xml')
  ctx.res.end(result)
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

// 获取素材总数
export const getMaterialCount = async () => {
  return await wxApi(
    'get', 
    `https://api.weixin.qq.com/cgi-bin/material/get_materialcount?access_token=${await getAccessToken()}`
  );
};

// 创建标签
export const createTag = async () => {
  return await wxApi(
    'post', 
    `https://api.weixin.qq.com/cgi-bin/tags/create?access_token=${await getAccessToken()}`,
    {
      tag: { name: '快乐宝贝' }
    }
  );
};

// 获取标签
export const getTags = async () => {
  return await wxApi(
    'get', 
    `https://api.weixin.qq.com/cgi-bin/tags/get?access_token=${await getAccessToken()}`
  );
};

// 编辑标签
export const updateTags = async () => {
  return await wxApi(
    'post', 
    `https://api.weixin.qq.com/cgi-bin/tags/update?access_token=${await getAccessToken()}`,
    {   
      "tag" : { "id" : 100, "name" : "快乐宝贝~"} 
    }
  );
};

// 编辑标签
export const deleteTag = async () => {
  return await wxApi(
    'post', 
    `https://api.weixin.qq.com/cgi-bin/tags/delete?access_token=${await getAccessToken()}`,
    {   
      "tag" : { "id" : 100 } 
    }
  );
};

// 获取标签下粉丝列表
export const getUsersByTagId = async () => {
  return await wxApi(
    'post', 
    `https://api.weixin.qq.com/cgi-bin/user/tag/get?access_token=${await getAccessToken()}`,
    {   
      "tagid" : 101, next_openid: ''
    }
  );
};

// 为用户添加标签
export const addTagToUsers = async () => {
  return await wxApi(
    'post', 
    `https://api.weixin.qq.com/cgi-bin/tags/members/batchtagging?access_token=${await getAccessToken()}`,
    {   
      "tagid" : 101,
      "openid_list": ['onnmW1CsytyIY68WlDNlzr7jnrxs']
    }
  );
};

// 批量为用户取消标签
export const deleteUsersTag = async () => {
  return await wxApi(
    'post', 
    `https://api.weixin.qq.com/cgi-bin/tags/members/batchuntagging?access_token=${await getAccessToken()}`,
    {   
      "tagid" : 101,
      "openid_list": ['onnmW1CsytyIY68WlDNlzr7jnrxs']
    }
  );
};

// 获取用户身上的标签列表
export const getUserTags = async () => {
  return await wxApi(
    'post', 
    `https://api.weixin.qq.com/cgi-bin/tags/getidlist?access_token=${await getAccessToken()}`,
    {   
      "openid" : 'onnmW1CsytyIY68WlDNlzr7jnrxs'
    }
  );
};

// 生成二维码ticket
export const createQrcode = async () => {
  return await wxApi(
    'post', 
    `https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=${await getAccessToken()}`,
    {
      "expire_seconds": 604800, 
      "action_name": "QR_SCENE", 
      "action_info": {"scene": {"scene_id": 123}}
    }
  );
};

// 长链接转短链接接口
export const longUrltoShort = async () => {
  return await wxApi(
    'post', 
    `https://api.weixin.qq.com/cgi-bin/shorturl?access_token=${await getAccessToken()}`,
    {
      "action": 'long2short', 
      "long_url": "https://www.smartstudy.com"
    }
  );
};

// 临时素材 jpg图片
// {
//     "type": "image", 
//     "media_id": "J3Bs41GKB4_u9tZ_qSNyyQULK1EpVHTUvobQmEVFlA1HKYnlIfQa2yrCdCusARNS", 
//     "created_at": 1528559163
// }

// // 上传临时素材
// export const uploadTempMedia = async (type, filename, media) => {
//   const accessToken = await getAccessToken();

//   const form = new FormData();
//   form.append('media', media, filename);

//   const length = await promisify(form.getLength.bind(form))();
//   const headers = Object.assign({ 'Content-Length': length }, form.getHeaders());

//   const res = await axios.post(`https://api.weixin.qq.com/cgi-bin/media/upload?access_token=${accessToken}&type=${type}`, form, {
//     headers,
//   });

//   if (res.data.errcode) {
//     throw new Error(`${res.data.errcode}: ${res.data.errmsg}`);
//   }

//   return res.data.media_id;
// };
