 // Your web app's Firebase configuration
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

user_name= localStorage.getItem("user_name");

room_name= localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();


function redirectToRoomName(name)
{
      localStorage.setItem("room_name",name);
      window.location="Lets_page.html";

}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function send() {

    msg= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message:msg,
        likes:0
    });

    document.getElementById("msg").value ="";
}
