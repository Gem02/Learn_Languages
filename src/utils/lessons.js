import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export const fetchLessons = async ({ setLessonsOutline }) => {
  try {
    
    const lessonsCollection = collection(db, "lessons");

    const querySnapshot = await getDocs(lessonsCollection);

    if (querySnapshot.empty) {
      console.warn("No lessons found in the collection.");
      return [];
    }

    const lessonUIDs = querySnapshot.docs.map((doc) => doc.id);
    console.log("Lesson UIDs: success");

     setLessonsOutline(lessonUIDs);

    return lessonUIDs;
  } catch (error) {
    console.error("Error fetching lesson UIDs:", error.message);
    throw new Error("Failed to fetch lessons.");
  }
};


