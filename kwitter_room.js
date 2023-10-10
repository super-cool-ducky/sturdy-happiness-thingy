// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCmUHIhxUqWMaFW0ZY4SHJUsdPLU9sTwUM",
      authDomain: "kwitter-dc5e2.firebaseapp.com",
      databaseURL: "https://kwitter-dc5e2-default-rtdb.firebaseio.com",
      projectId: "kwitter-dc5e2",
      storageBucket: "kwitter-dc5e2.appspot.com",
      messagingSenderId: "91200822398",
      appId: "1:91200822398:web:f5c40fd5efee2ee4ce8c2f"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"

      });

         localStorage.setItem("room_name", room_name);

         window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
     window.location = "kwitter.html";
}

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}