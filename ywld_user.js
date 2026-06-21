let obj = JSON.parse(typeof $response.body === "string" ? $response.body : JSON.stringify($response.body));
if (obj.data) {
  obj.data.is_vip = 1;
  obj.data.vip_expire_date = "2099-12-31";
  obj.data.vip_type = 2;
  obj.data.is_paid = 1;
  obj.data.has_ebook = 1;
  obj.data.is_teacher = 0;
  obj.data.is_student = 0;
  obj.data.nickname = "敖悦";
}
delete obj.sign;
$done({body: JSON.stringify(obj)});