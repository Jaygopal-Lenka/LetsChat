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
   row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
   //End code
   });});}
getData();

function logout() {
   window.location="index.html";
}


function addRoom() {

   room_name= document.getElementById("room_name_input").value;

   firebase.database().ref("/").child(room_name).update({
         purpose: "adding room name"});

   localStorage.setItem("room_name",room_name);

   window.location= "LetsChat_page.html"
}
