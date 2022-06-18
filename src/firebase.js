import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { functions } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCjmANmhZ9veHYI-oetvaw1-Xhv7VJMrbI",
  authDomain: "specno-onboard.firebaseapp.com",
  projectId: "specno-onboard",
  storageBucket: "specno-onboard.appspot.com",
  messagingSenderId: "447292576693",
  appId: "1:447292576693:web:25e4244ca0608970597ffc",
  measurementId: "G-2H2H1KER3S",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
var storage = firebase.storage();
export default storage;

export const generateUserDocument = async (user, Department, Admin, Age) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, name, surname, ID } = user;
    try {
      await userRef.set({
        email,
        name,
        surname,
        ID,
        ...Department,
        ...Admin,
        ...Age,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
// In majority of the code there are try catch implementations
