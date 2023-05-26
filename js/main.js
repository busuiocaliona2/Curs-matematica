const firebaseConfig = {
    apiKey: "AIzaSyDqNECkFr9rKnonU0KBroIE3_F6hlDJT7E",
    authDomain: "cursuri-3d37e.firebaseapp.com",
    projectId: "cursuri-3d37e",
    storageBucket: "cursuri-3d37e.appspot.com",
    messagingSenderId: "1014777248055",
    appId: "1:1014777248055:web:64e22543b19d01e1c982b2",
    measurementId: "G-TD5RZ33QVR"
  };

const postareBtn = document.getElementById('postare-btn');
const admin = "JevLH5WrUNSgg1vpBPWxoUxXKzf1"

  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();

// referinta la colectia teme din Baza de date
const temeDb = db.collection("teme");



let user = null;

const yearElement = document.getElementById('year');

if (yearElement) {
    let date = new Date();
    
    yearElement.innerHTML = date.getFullYear() + " ©";
}

function mobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "") {
        x.className = "mobile";
    } else {
        x.className = "";
    }
}

function refresh() {
    window.location.reload();
}


function isAdmin() {
if (user == null) {
    return false;
}

return admin == user.uid;


}

function formatareData(stamp) {
    let data = new Date(stamp);
    let an = data.getFullYear();
    let luna = data.getMonth() + 1;
    let zi = data.getDate();

    let result = zi + "-" + luna + "-" + an;

    return result;
}

auth.onAuthStateChanged( function(fuser) {
user = fuser;
if (isAdmin() == true) {
 postareBtn.style.display = "block";
}
else {
    postareBtn.style.display = "none";
}

document.querySelector("body").style.display = "block";

});