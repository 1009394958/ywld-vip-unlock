var obj = JSON.parse($response.body);
obj.data.summary.limit_score = 0;
obj.data.summary.over_count = 999;
obj.data.summary.total_count = 999;
$done({body: JSON.stringify(obj)});