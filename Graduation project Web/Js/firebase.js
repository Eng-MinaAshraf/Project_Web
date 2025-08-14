import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { 
  getAuth, 
  GoogleAuthProvider 
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyA6gDKeyKJfbj3V_fIrkCJzXNS90jkFdUg",
    authDomain: "project-firebase-49e06.firebaseapp.com",
    projectId: "project-firebase-49e06",
    storageBucket: "project-firebase-49e06.firebasestorage.app",
    messagingSenderId: "728318998528",
    appId: "1:728318998528:web:c40649313d3596c6b080e5"
  };

  const app = initializeApp(firebaseConfig);

// الحصول على خدمة المصادقة
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };




