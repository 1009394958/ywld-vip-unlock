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

// POST /api/product/yw/poem/summary
if (url.includes('/api/product/yw/poem/summary') && obj.data) {
  if (obj.data.summary) {
    obj.data.summary.limit_score = 0;
    obj.data.summary.over_count = 999;
    obj.data.summary.total_count = 999;
  }
}

$done({ body: JSON.stringify(obj) });