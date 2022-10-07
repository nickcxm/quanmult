const resp = {};
const obj = JSON.parse(typeof $response != "undefined" && $response.body || null);

if (typeof $response == "undefined") {
	delete $request.headers["x-revenuecat-etag"]; // prevent 304 issues
	delete $request.headers["X-RevenueCat-ETag"];
	resp.headers = $request.headers;
} else if (obj && obj.data) {
	obj.data=1
	resp.body = JSON.stringify(obj);
}

$done(resp);
