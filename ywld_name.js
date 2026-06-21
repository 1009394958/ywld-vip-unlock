var body = $response.body;
var obj = JSON.parse(body);
obj.data.nickname = "敖悦";
$done({body: JSON.stringify(obj)});