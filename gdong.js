const resp = {};
const obj = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];

const data = {
    "process" : 0.68999999999999995,
    "totalsort" : 677775,
    "citysort" : 677775,
    "sex" : 1,
    "area" : null,
    "avatar" : "https://gdongapi.wo-ish.com/Content/images/head_1.png",
    "rname" : "1级",
    "nrname" : "2级",
    "rtitle" : "萎靡不振",
    "nrtitle" : "外强中干",
    "nickname" : "KT_3D3FEA",
    "score" : 69,
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