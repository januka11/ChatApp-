document.getElementById("send").addEventListener("click", function () {
  var message = document.getElementById("message").value;
  if (message.trim() !== "") {
    firebase.database().ref("messages").push().set({
      "message": message
    }).then(() => {
      console.log("Message sent successfully!");
    }).catch((error) => {
      console.error("Error sending message: ", error);
    });
    document.getElementById("message").value = ""; // Clear input field
  } else {
    console.log("Empty message not sent.");
  }
});
firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    firebase.auth().signInAnonymously()
      .then(() => {
        console.log("User signed in anonymously");
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  }
});
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMpbnMXfquqc4EC7uRGij9GJCqT4xxmSQ",
  authDomain: "chatapp-12923.firebaseapp.com",
  databaseURL: "https://chatapp-12923-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chatapp-12923",
  storageBucket: "chatapp-12923.firebasestorage.app",
  messagingSenderId: "898100836324",
  appId: "1:898100836324:web:0134c45a682ccc3307f9f1"
};

// Firebase Initialize
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Message Send Function
function sendMessage() {
    let messageInput = document.getElementById("messageInput");
    let message = messageInput.value;

    if (message.trim() !== "") {
        db.collection("messages").add({
            text: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            messageInput.value = "";
        }).catch(error => console.error("Error sending message: ", error));
    }
}

// Message Fetch and Display
db.collection("messages").orderBy("timestamp").onSnapshot(snapshot => {
    let messagesDiv = document.getElementById("messages");
    messagesDiv.innerHTML = "";
    snapshot.forEach(doc => {
        let msg = document.createElement("div");
        msg.textContent = doc.data().text;
        messagesDiv.appendChild(msg);
    });
});
