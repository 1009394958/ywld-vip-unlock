var body = $response.body;
if (!body) {
  $done({});
}
body = typeof body === "string" ? JSON.parse(body) : body;
if (body.data) {
  if (body.data.is_vip !== undefined) {
    body.data.is_vip = 1;
    body.data.vip_expire_date = "2099-12-31";
    body.data.vip_type = 2;
  }
  if (body.data.is_paid !== undefined) {
    body.data.is_paid = 1;
    body.data.has_ebook = 1;
  }
  if (body.data.is_teacher !== undefined) body.data.is_teacher = 0;
  if (body.data.is_student !== undefined) body.data.is_student = 0;
}
$done({body: JSON.stringify(body)});