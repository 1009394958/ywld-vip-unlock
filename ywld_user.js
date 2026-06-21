var obj = $response.body;
if (typeof obj === "string") obj = JSON.parse(obj);
obj.data.is_vip = 1;
obj.data.vip_expire_date = "2099-12-31";
obj.data.vip_type = 2;
obj.data.is_paid = 1;
obj.data.has_ebook = 1;
obj.data.nickname = "敖悦";
$done({body: JSON.stringify(obj)});