var response = document.getElementById("response");
var closestVendor = "<b>Closest vendor address:</b> 123 Nowhere St, Sometown ZT, 12345</p>";

function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    response.innerHTML = "<b>Latitude:</b> " + position.coords.latitude +
        "<br><b>Longitude:</b> " + position.coords.longitude;

    var location = { lat: position.coords.latitude, lng: position.coords.longitude };
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: location });
    var marker = new google.maps.Marker({ position: location, map: map });

    document.getElementById("vendor").style.display = "block";

    document.getElementById("offline-button").style.display = "block";
    document.getElementById("vendor").innerHTML = closestVendor;
    localStorage.setItem('closestVendor', closestVendor);
}

function offlineLocation() {
    var setOfflineVendor = localStorage.getItem('closestVendor', closestVendor);
    document.getElementById("offline-location").innerHTML = setOfflineVendor;
    console.log(setOfflineVendor);
}