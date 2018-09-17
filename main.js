let map = new google.maps.Map(document.getElementById('map'), {
  center: new google.maps.LatLng(34.043514, -118.266210),
  zoom: 10
});


document.querySelector("#locateMe").onclick = function (){
  //idk the following codes lol
  let successHandler = function(position) {
    console.log(position.coords.latitude, position.coords.longitude);
    let myLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);



  //reverse geocoding
  let geocoder = new google.maps.Geocoder();
  geocoder.geocode({
    location: myLocation
  }, function(geocoderResults) {
    console.log(geocoderResults);
  });

  let infoWindow = new google.maps.InfoWindow({
    content:'<strong>You are here!</strong>',
    position: myLocation
  });

  infoWindow.open(map);

};
let errorHandler = function(error) {};
let options = {};
navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options);

}
