var uri_wapi = "http://mevoting.is-best.net/live/?api_key=3dbd017cb1eb3021046943bad6cf31db";
fetch(uri_wapi, {
    method: 'get',
    mode: 'no-cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))
console.log(uri_wapi);
