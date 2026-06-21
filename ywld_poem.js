var body = $response.body;
if (!body) {
  $done({});
  return;
}
body = typeof body === "string" ? JSON.parse(body) : body;
if (body.data && body.data.summary) {
  body.data.summary.limit_score = 0;
  body.data.summary.over_count = 999;
  body.data.summary.total_count = 999;
}
$done({body: JSON.stringify(body)});