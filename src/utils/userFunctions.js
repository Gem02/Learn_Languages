import { updatePassword, reauthenticateWithCredential, EmailAuthProvider} from "firebase/auth";
import {doc, updateDoc, getDoc} from 'firebase/firestore';
import {db} from '../config/firebase';

export const updateUserPassword = async (
    auth,
    setResponse,
    password,
    currentPassword = null,
    setLoading
  ) => {
    try {
      if (!auth.currentUser) {
        setResponse({type:'warning', message:"No user is logged in."});
        return;
      }
      if (!password) {
        setResponse({type:'warning', message:"Password field is required"});
        return;
      }
  
      setLoading(true);
  
      // Reauthenticate only if currentPassword is provided
      if (currentPassword) {
        const credential = EmailAuthProvider.credential(
          auth.currentUser.email,
          currentPassword
        );
        await reauthenticateWithCredential(auth.currentUser, credential);
      }
  
      // Update the password
      await updatePassword(auth.currentUser, password);
      setResponse({type:'success', message:"Password updated successfully."});
      console.log("Password updated successfully.");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setResponse({type:'error', message:"Incorrect current password."});
      } else if (error.code === "auth/weak-password") {
        setResponse({type:'warning', message:"Password should be at least 6 characters."});
      } else {
        setResponse({type:'error', message:"An error occurred while updating the password."});
      }
      console.error("Error updating password:", error);
    } finally {
      setLoading(false);
    }
};
  

export const updateName = async ( user, setResponse, newName, setLoading) => {
  try {
    if (!user?.uid || !newName) {
      setResponse({type:'warning', message:"User is not logged in."});
      return;
    }

    setLoading(true);

    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, { name: newName });

    setResponse({type:'success', message:"Name updated successfully."});
    console.log("Name updated successfully in Firestore.");
  } catch (error) {
    setResponse({type:'error', message:"An error occurred while updating the name."});
    console.error("Error updating name in Firestore:", error);
  } finally {
    setLoading(false);
  }
};
  
export const fetchUserData = async (uid) => {
  try {
    const userDocRef = doc(db, `users/${uid}`);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      return userDoc.data();
    } 
  } catch (error) {
    if (error) {
      throw new Error("User not found");
    }
  }
  
};
  