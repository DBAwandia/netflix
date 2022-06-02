import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyD7n4yMhTLoakLhpEDZxYtiL6nUFpFFoFc",
    authDomain: "netflix-clone-36e87.firebaseapp.com",
    projectId: "netflix-clone-36e87",
    storageBucket: "netflix-clone-36e87.appspot.com",
    messagingSenderId: "780365639385",
    appId: "1:780365639385:web:0389be845aab5f53ef58c8",
    measurementId: "G-H51JCXJ6EC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export { auth }