var body = $response.body;
var obj = JSON.parse(body);
obj.data.is_vip = 1;
obj.data.vip_expire_date = "2099-12-31";
obj.data.vip_type = 2;
obj.data.is_paid = 1;
obj.data.has_ebook = 1;
$done({body: JSON.stringify(obj)});