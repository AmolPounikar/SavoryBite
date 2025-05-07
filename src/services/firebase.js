import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASU4Zq_HzZx7ibltPDmuCWqgSZ3WpSndA",
    authDomain: "catering-services-20004.firebaseapp.com",
    projectId: "catering-services-20004",
    storageBucket: "catering-services-20004.firebasestorage.app",
    messagingSenderId: "596349948936",
    appId: "1:596349948936:web:2cb9fd6e0a950185b4adbd",
    measurementId: "G-DLTFJG0KH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Admin authentication function
export const loginAdmin = async (email, password) => {
    try {
        // Only allow specific admin email
        if (email !== "admin@gmail.com") {
            throw new Error("Only admin users are allowed to login");
        }

        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store user info in sessionStorage
        sessionStorage.setItem("isAdmin", "true");
        sessionStorage.setItem("adminUid", user.uid);

        return user;
    } catch (error) {
        console.error("Firebase login error:", error);
        throw error;
    }
};

// Logout function
export const logoutAdmin = async () => {
    try {
        await signOut(auth);
        // Clear session storage
        sessionStorage.removeItem("isAdmin");
        sessionStorage.removeItem("adminUid");
        return true;
    } catch (error) {
        console.error("Firebase logout error:", error);
        throw error;
    }
};

export { auth };
