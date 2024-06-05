var map;

function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
 center: {lat: -34.397, lng: 150.644},
 zoom: 8,
 gestureHandling: 'cooperative'
 });

 var locations = [
 {lat: -34.397, lng: 150.644, content: 'Location 1'},
 {lat: -35.397, lng: 151.644, content: 'Location 2'}
 ];

 locations.forEach(function(location) {
 var marker = new google.maps.Marker({
 position: {lat: location.lat, lng: location.lng},
 map: map
 });

 var infowindow = new google.maps.InfoWindow({
 content: location.content
 });

 marker.addListener('click', function() {
 infowindow.open(map, marker);
 });
 });
}