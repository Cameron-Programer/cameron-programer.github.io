function heat(json) { 
	addressPoints = []

	for (let i = 0; i < json.features.length; i++) {
		const coords = json.features[i].geometry.coordinates;
		addressPoints[i] = [coords[0], coords[1]];
	}

	addressPoints = addressPoints.map(function (p) {return [p[0], p[1]]; });

	console.log(addressPoints)

	var heat = L.heatLayer(addressPoints).addTo(map);
}

