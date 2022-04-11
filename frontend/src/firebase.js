import initializeApp from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.REACT_FIREBASE_API_KEY,
	authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_FIREBASE_PROJECTID,
	storageBucket: process.env.REACT_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;
