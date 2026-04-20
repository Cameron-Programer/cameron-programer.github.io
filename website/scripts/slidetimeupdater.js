// This script ...

const d = Date();

console.log("Date Get Script has started...")
let timetable = "https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_transport/MapServer/41/query?where=1%3D1&outFields=DATE_&outSR=4326&f=json"
fetch(timetable, { method: 'GET', headers: { "Accept": "application/json" } })
    .then(response => response.json())
    .then((json) => console.log(json))
console.log("Date Get Script Successful!");

/* WIP
let f = timetable.DATE_[0];
let l = timetable.DATE_[timetable.length - 1];

console.log("f: ", f)
console.log("l: ", l)
*/

let slider = document.getElementById("timeslider")
let label = document.getElementById("timelabel")
slider.min = 0
//import min max data from the below fields
//https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_transport/MapServer/41/query?where=1%3D1&outFields=DATE_&outSR=4326&f=json

slider.addEventListener("change", () => {
    label.textContent = slider.value
})