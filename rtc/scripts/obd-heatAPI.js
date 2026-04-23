let url1 = `https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_transport/MapServer/41/query?where=1%3D1&outFields=DATE_,TIME,SEVERITY,ACCIDENT_TYPE,ACCIDENT_DESCRIPTION,RENDER,DATE_TIME_CONVERTED,SEVERITY_DESCRIPTION,CASUALTIES&outSR=4326&f=geojson`
fetch(url1, {method: 'GET', headers: {"Accept": "application/json"}})
    .then((response) => response.json())
    .then((json) => heat(json))

console.log("url1: " + url1);