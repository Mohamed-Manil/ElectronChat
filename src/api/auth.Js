import db from "../db/firestore";
import firebase from "firebase/app";
import "firebase/auth";

const createUserProfile = (userProfile) =>
  db.collection("profiles").doc(userProfile.uid).set(userProfile);

export const register = async ({ email, password, username, avatar }) => {
  try {
    const { user } = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const userProfile = {
      uid: user.uid,
      username,
      email,
      avatar,
      joinedChats: [],
    };
    await createUserProfile(userProfile);
    return userProfile;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const login = async ({ email, password }) =>
  await firebase.auth().signInWithEmailAndPassword(email, password);

export const logout = async () => await firebase.auth().signOut();

export const onAuthStateChanges = (onAuth) =>
  firebase.auth().onAuthStateChanged(onAuth);
