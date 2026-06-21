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

// POST /api/product/user/info/for/app
if (url.includes('/api/product/user/info/for/app') && obj.data) {
  if (obj.data.is_vip !== undefined) {
    obj.data.is_vip = 1;
    obj.data.vip_expire_date = '2099-12-31';
    obj.data.vip_type = 2;
  }
  if (obj.data.is_paid !== undefined) {
    obj.data.is_paid = 1;
    obj.data.has_ebook = 1;
  }
  if (obj.data.is_teacher !== undefined) obj.data.is_teacher = 0;
  if (obj.data.is_student !== undefined) obj.data.is_student = 0;
}

$done({ body: JSON.stringify(obj) });