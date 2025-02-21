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

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Realtime Database Reference
const database = firebase.database();

// Function to Send Message
function sendMessage() {
    const message = "Hi"; // Replace with actual input message
    database.ref("messages").push().set({
        message: message,
        timestamp: Date.now()
    });
}

// Call sendMessage Function for Testing
sendMessage();
