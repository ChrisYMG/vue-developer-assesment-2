import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfk63yOpFPyqKNGqTViNqEO1qHjW3UK_s",
  authDomain: "vue-developer-assesment-2.firebaseapp.com",
  projectId: "vue-developer-assesment-2",
  storageBucket: "vue-developer-assesment-2.appspot.com",
  messagingSenderId: "716160564577",
  appId: "1:716160564577:web:63528f1bb1b714cc2e5920",
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount("#app");
