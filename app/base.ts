// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCLG2YQbX2Wh2elXxrQ2YZkNGMA4Zv8OGw",
	authDomain: "movix-73872.firebaseapp.com",
	projectId: "movix-73872",
	storageBucket: "movix-73872.appspot.com",
	messagingSenderId: "526690160624",
	appId: "1:526690160624:web:e7247896c00bd98c249735",
	measurementId: "G-L22B4BT68Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

export default app;
