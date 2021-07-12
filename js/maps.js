    function initMap() {
    const myLatLng = { lat: 32.014222, lng: 35.849722 };
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLatLng,
});
    new google.maps.Marker({
    position: myLatLng,
    map,
    title: "We are Here!",
});
}

