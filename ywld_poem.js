
var obj = JSON.parse($response.body);

if (obj.data && obj.data.summary) {
  obj.data.summary.limit_score = 0;
  obj.data.summary.over_count = 999;
  obj.data.summary.total_count = 999;
}

$done({body: JSON.stringify(obj)});