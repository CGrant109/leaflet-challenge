// geojson url
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// define the createMap function
function createMap(response) {

    // Initial parameters to create map
    var centerCoordinates = [37.0902, -110.7129];
    var mapZoom = 5;

    // Create the map object with options
    var myMap = L.map("map", {
        center: centerCoordinates,
        zoom: mapZoom
    });

    // Create the tile layer that will be the background of our map
    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/light-v10",
        accessToken: API_KEY
    }).addTo(myMap);

    // Create a GeoJSON layer containing the features array on the response object
    L.geoJSON(response, {

        // use pointToLayer to create circle markers for each data's coordinates
        pointToLayer: function(feature, latlng) {
            return L.circleMarker(latlng, {
                radius: markerSize(feature.properties.mag),
                fillColor: magColor(feature.properties.mag),
                color: "#000",
                weight: 0.3,
                opacity: 0.5,
                fillOpacity: 1
            });
        },

        // Run the onEachFeature function once for each piece of data in the array
        onEachFeature: onEachFeature
    }).addTo(myMap)

    // Binding a pop-up to each layer
    function onEachFeature(feature, layer) {

        // date formatter for popup
        var format = d3.timeFormat("%d-%b-%Y at %H:%M");

        layer.bindPopup(`<strong>Place: </strong> ${feature.properties.place}<br><strong>Time: </strong>${format(new Date(feature.properties.time))}<br><strong>Magnitude: </strong>${feature.properties.mag}`);
    };

    // Set up the legend
    var legend = L.control({ position: "bottomright" });
    legend.onAdd = function() {
        var div = L.DomUtil.create("div", "info legend");
        var magnitudes = [0, 1, 2, 3, 4, 5];
        var labels = [];
        var legendInfo = "<h5>Magnitude</h5>";

        div.innerHTML = legendInfo;

        // go through each magnitude item to label and color the legend
        // push to labels array as list item
        for (var i = 0; i < magnitudes.length; i++) {
            labels.push('<li style="background-color:' + magColor(magnitudes[i] + 1) + '"> <span>' + magnitudes[i] + (magnitudes[i + 1] ? '&ndash;' + magnitudes[i + 1] + '' : '+') + '</span></li>');
        }

        // add each label list item to the div under the <ul> tag
        div.innerHTML += "<ul>" + labels.join("") + "</ul>";

        return div;
    };

    // Adding legend to the map
    legend.addTo(myMap);

}; // end createMap function

// Define a markerSize function that will give each city a different marker radius based on earthquake magnitude
function markerSize(magnitude) {
    return magnitude * 5;
}

// Define a color function that sets the colour of a marker based on earthquake magnitude
function magColor(magnitude) {
    if (magnitude <= 1) {
        return "#a7fb09"
    } else if (magnitude <= 2) {
        return "#dcf900"
    } else if (magnitude <= 3) {
        return "#f6de1a"
    } else if (magnitude <= 4) {
        return "#fbb92e"
    } else if (magnitude <= 5) {
        return "#faa35f"
    } else {
        return "#ff5967"
    }
};

// Perform an API call to the USGS earthquakes API to get earthquake information. 
d3.json(url, function(response) {

    // Call createMap with response.features
    createMap(response.features);

});