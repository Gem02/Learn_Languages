import { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { getDoc, doc } from 'firebase/firestore';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [learningData, setLearningData] = useState({
    language: '',
    difficultyLevel: '',
    lastLesson: '',
    lessons : ['greetings-1', 'introduction-1', 'numbers-1', 'directions-1', 'emergency-1', 'market-1',  'opinions-1', 'narration-1', 'love-1', 'polite-1' , 'wisesayings-1' ],
    lessonsDesc: ["Greetings", "Introduction", "Numbers", "Directions", "Emergency", "Market", "Opinions", "Narration", "Love", "Polite", "Idioms" ],
  });
  const updateLastLesson = (newLesson) => {
    setLearningData((prevData) => ({
      ...prevData,
      lastLesson: newLesson,
    }));
  };
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const userDocRef = doc(db, 'users', currentUser.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            console.log('ok na')
            setUser(userDoc.data());
          } else {
            setUser(userDoc.data());
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (userData) => {
    try {
      const userDocRef = doc(db, 'users', userData.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        setUser({
          ...userData,
          ...userDoc.data(),
        });
      } else {
        setUser(userData);
      }
    } catch (error) {
      console.error("Error during login fetch:", error);
      setUser(userData);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateLastLesson, login, logout, loading, learningData, setLearningData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;