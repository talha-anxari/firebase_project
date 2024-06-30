// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDUtu72_0qAe-o8qdCGDm1IdMA26DTOX28",
  authDomain: "my-first-project-835c8.firebaseapp.com",
  projectId: "my-first-project-835c8",
  storageBucket: "my-first-project-835c8.appspot.com",
  messagingSenderId: "340828040792",
  appId: "1:340828040792:web:7cd185a48f96aede38a42d",
  measurementId: "G-CK0QSVW5RT",
};

const userName = document.getElementById("user_name"),
  password = document.getElementById("password"),
  loginBtn = document.getElementById("signup_btn");

const SignInUserName = document.getElementById("sign_in_user_name"),
  SignInPassword = document.getElementById("sign_in_password"),
  SignInLoginBtn = document.getElementById("sign_in_btn");

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

loginBtn.addEventListener("click", createUserAccount);

SignInLoginBtn.addEventListener("click", signInUser);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // console.log(`User is Sign In`);
    const uid = user.uid;
  } else {
    // console.log(`User is'nt Sign In`)
  }
});

function createUserAccount() {
  createUserWithEmailAndPassword(auth, userName.value, password.value)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("User Account", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    //   alert(errorMessage);
      // ..
    });
}
function signInUser(){
    signInWithEmailAndPassword(auth, SignInUserName.value, SignInPassword.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("User Account", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    //   alert(errorMessage);
    });

// console.log(SignInUserName.value);
// console.log(SignInPassword.value);
}