var firebaseConfig = {
    apiKey: "AIzaSyCo28RIxZmK74SvGCZdgcMqIzYbwMlfKX4",
    authDomain: "letschat-c7efc.firebaseapp.com",
    databaseURL: "https://letschat-c7efc-default-rtdb.firebaseio.com",
    projectId: "letschat-c7efc",
    storageBucket: "letschat-c7efc.appspot.com",
    messagingSenderId: "225592694858",
    appId: "1:225592694858:web:45081151ecfed1f5e1eeb3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();

function logout() {
   window.location="index.html";
}
