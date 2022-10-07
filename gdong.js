const resp = {};
const obj = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];

const data = {
    "process" : 0.68999999999999995,
    "totalsort" : 677775,
    "citysort" : 677775,
    "sex" : 1,
    "area" : null,
    "avatar" : "https://m.pundai.com/static/image/logo.png?x-image-process=image/resize,w_1000/imageslim",
    "rname" : "100级",
    "nrname" : "100级",
    "rtitle" : "牛逼",
    "nrtitle" : "太厉害啦",
    "nickname" : "大橙子",
    "score" : 999,
    "isvip" : 1,
    "validdate" : "2029-11-04"
  };

if (typeof $response == "undefined") {
	delete $request.headers["x-revenuecat-etag"]; // prevent 304 issues
	delete $request.headers["X-RevenueCat-ETag"];
	resp.headers = $request.headers;
} else if (obj && obj.data) {
	obj.data=data
	resp.body = JSON.stringify(obj);
}

$done(resp);
