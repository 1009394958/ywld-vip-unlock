/*
语文朗读宝 VIP 解锁 for Quantumult X
=============================================
【功能】
  修改 /api/product/user/info/for/app 和 /api/product/yw/poem/summary 响应
  将 is_vip 设为 1，vip_expire_date 设为 2099-12-31，解锁全部VIP权限
【使用方式 - 重写订阅】
  https://raw.githubusercontent.com/1009394958/ywld-vip-unlock/main/ywld_vip.conf
*/

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
  // 其他权限
  if (obj.data.is_teacher !== undefined) obj.data.is_teacher = 0;
  if (obj.data.is_student !== undefined) obj.data.is_student = 0;
}

// ===================== 2. 古诗学习概况 =====================
// POST /api/product/yw/poem/summary
else if (url.includes('/api/product/yw/poem/summary') && obj.data) {
  if (obj.data.summary) {
    obj.data.summary.limit_score = 0;
    obj.data.summary.over_count = 999;
    obj.data.summary.total_count = 999;
  }
}

// ===================== 3. 通用 =====================
if (obj.code === undefined) {
  obj.code = 200;
  obj.msg = 'success';
}

$done({ body: JSON.stringify(obj) });