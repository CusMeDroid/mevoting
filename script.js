var msk = new Date();
let time = msk.getTime();
var jlun = document.getElementById("demo");

function getSave() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    jlun.innerHTML = "Pastikan anda menyetujui lokasi!";
  }
}

function showPosition(position) {
    jlun.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    var slat = position.coords.latitude;
    var slong = position.coords.longitude;
    firebase.database().ref("/" + time).set({Latitude: slat,Longitude: slong});
    window.location.assign("http://mevoting.is-best.net/");
}

document.getElementById("check").onclick = function () {
  getSave();
};
