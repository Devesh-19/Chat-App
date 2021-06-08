import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
	.initializeApp({
		apiKey: "AIzaSyB6FmqaBpb6iou-M-0Zuqav8zfuQo7amIw",
		authDomain: "message-bay.firebaseapp.com",
		projectId: "message-bay",
		storageBucket: "message-bay.appspot.com",
		messagingSenderId: "1026844278849",
		appId: "1:1026844278849:web:eac2a448c3a98c3f0086c0",
	})
	.auth();
