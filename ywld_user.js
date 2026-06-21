let body = $response.body;
body = body.replace(/"is_vip":\d/g, '"is_vip":1');
body = body.replace(/"vip_expire_date":"[^"]*"/g, '"vip_expire_date":"2099-12-31"');
body = body.replace(/"vip_type":[^,}]*/g, '"vip_type":2');
body = body.replace(/"is_paid":\d/g, '"is_paid":1');
body = body.replace(/"has_ebook":\d/g, '"has_ebook":1');
body = body.replace(/"nickname":"[^"]*"/g, '"nickname":"敖悦"');
$done({body});
