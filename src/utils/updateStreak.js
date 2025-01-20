import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const updateStreak = async ({
  user,
  lastUpdated,
  streak,
  setStreak,
  setLastUpdated,
}) => {
  if (!user || !user.uid) {
    console.error("User is undefined or invalid.");
    return;
  }

  try {
    const today = new Date().toISOString().split("T")[0]; // Get current date as YYYY-MM-DD

    if (lastUpdated === today) return; // No need to update if already updated today

    // Check if the streak is consecutive
    const isConsecutive =
      lastUpdated &&
      Math.abs(new Date(today).getTime() - new Date(lastUpdated).getTime()) ===
        86400000;

    const newStreak = isConsecutive ? streak + 1 : 1;

    const userRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      // Update existing user document
      await updateDoc(userRef, {
        dailyStreak: {
          streakCount: newStreak,
          lastUpdated: today,
        },
      });
    } else {
      
      await setDoc(userRef, {
        dailyStreak: {
          streakCount: newStreak,
          lastUpdated: today,
        },
      });
    }

    // Update local state
    setStreak(newStreak);
    setLastUpdated(today);
  } catch (error) {
    console.error("Error updating streak:", error);
  }
};
