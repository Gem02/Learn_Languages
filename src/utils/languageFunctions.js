import {doc, updateDoc, getDoc, setDoc, arrayUnion} from 'firebase/firestore';
import { db } from "../config/firebase";  
    
    export const languagesToLearn = async (setResponse ,selectedLanguage, user, setLoading) => {
  
    if (!selectedLanguage) {
        setResponse({type:'warning', message:"No language selected."});  
      console.error("No language selected.");
      return;
    }
    setResponse({type:'success', message:"Selected language:"}, selectedLanguage);
    console.log("Selected language:", selectedLanguage);
  
    setLoading(true);
  
    try {
      if (user?.uid) {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
  
        if (userDocSnapshot.exists()) {
          const learningLanguages = userDocSnapshot.data().learningLanguages || [];
  
          if (!learningLanguages.includes(selectedLanguage)) {
            learningLanguages.push(selectedLanguage);
            await updateDoc(userDocRef, { learningLanguages });
          }
        } else {
          await setDoc(userDocRef, { learningLanguages: arrayUnion(selectedLanguage) });
        }
        setResponse({type:'success', message:"Language added successfully!"});
        console.log("Language added successfully to Firebase");
      } else {
        setResponse({type:'error', message:"User not authenticated."})
        console.error("User not authenticated.");
      }
    } catch (error) {
        setResponse({type:'error', message:"Error updating language:"});
      console.error("Error updating language:", error);
    } finally {
      setLoading(false);
    }
    };

    export const setMainLanguage = async (user, setResponse, selectedLanguage, setLoading) => {
    try {
        if (user?.uid) {
            setLoading(true);
            const userRef = doc(db, 'users', user.uid);
            await updateDoc(userRef, { mainLanguage: selectedLanguage });
            setResponse({type:'success', message:"Language Updated successfully"});
            console.log("Updated successfully");
        }
    } catch (error) {
        setResponse({type:'error', message:"An error occurred"});
        console.error("An error occurred:", error);
    } finally {
        setLoading(false);
    }
    };

    export const languageLearningNow = (selectedLanguage, setResponse) =>{
        localStorage.setItem("selectedLanguage", selectedLanguage);
        setResponse({type:'success', message:selectedLanguage})
    }

