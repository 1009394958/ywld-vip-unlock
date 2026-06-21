// ==Cloak==
// @name         语文朗读宝 VIP 解锁
// @description  破解语文朗读宝VIP权限和到期时间
// @version      1.0
// @author       Trae
// ==/Cloak==

const url = $request.url;
const body = $response.body;

if (!body) {
  $done({});
  return;
}

let obj;
try {
  obj = JSON.parse(body);
} catch (e) {
  $done({});
  return;
}

// ===================== 1. 用户信息接口 =====================
// POST /api/product/user/info/for/app
if (url.includes('/api/product/user/info/for/app') && obj.data) {
  console.log('命中用户信息接口，开始修改VIP数据...');

  // 核心 VIP 字段
  if (obj.data.is_vip !== undefined) {
    obj.data.is_vip = 1;
    obj.data.vip_expire_date = '2099-12-31';
    obj.data.vip_type = 2;
  }

  // 付费相关
  if (obj.data.is_paid !== undefined) {
    obj.data.is_paid = 1;
    obj.data.has_ebook = 1;
  }

  // 其他权限字段
  if (obj.data.is_teacher !== undefined) obj.data.is_teacher = 0;
  if (obj.data.is_student !== undefined) obj.data.is_student = 0;

  console.log('用户信息修改完成');
}

// ===================== 2. 古诗学习概况 =====================
// POST /api/product/yw/poem/summary
else if (url.includes('/api/product/yw/poem/summary') && obj.data) {
  console.log('命中古诗概况接口，解锁学习限制...');

  if (obj.data.summary) {
    obj.data.summary.limit_score = 0;
    obj.data.summary.over_count = 999;
    obj.data.summary.total_count = 999;
  }

  console.log('古诗概况修改完成');
}

// ===================== 3. 通用 =====================
if (obj.code === undefined) {
  obj.code = 200;
  obj.msg = 'success';
}

$done({ body: JSON.stringify(obj) });