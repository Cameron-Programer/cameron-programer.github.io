// This script ...

const param = new URLSearchParams(location.search)
var date;
let slider = document.getElementById("timeslider");
let label = document.getElementById("timelabel");

let timetable = "https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_transport/MapServer/41/query?where=1%3D1&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=DATE_&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=DATE_&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson"
fetch(timetable, { method: 'GET', headers: { "Accept": "application/json" } })
    .then(response => response.json())
    .then(minmax);

function minmax(json) {
    let f = json.features;
    let min = f[0].attributes.DATE_;
    let max = f[f.length-1].attributes.DATE_;
    slider.min = min;
    slider.max = max;
}

// This script function converts to and from unix time
// Unix time does NOT account for leap seconds

// 86400 seconds == 1 day since epoch
1000
function formatDate(time) {
  unixtime = time / 1000
  var date = new Date(unixtime * 1000);

  //console.log(date.toString());
  var day = String(date.getDate()).padStart(2, '0');
  var month = String(date.getMonth() + 1).padStart(2, '0');
  var year = date.getFullYear();
  
  return `${day}/${month}/${year}`;
}

slider.addEventListener("change", () => {
    //console.log(slider.value)
    //console.log(formatDate(slider.value));
    label.textContent = String(formatDate(slider.value));
})