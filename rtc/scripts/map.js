// This script has been modified from the leaflet quickstart guide
console.log("Map Script has started....")
// Start of Start gude script
var map = L.map('map').setView([51.45, -2.555], 12);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; {<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Humanitarian OSM Team, Hosted by OSM FR}>'
}).addTo(map);
// End of start guide script
console.log("Map Script successful!")