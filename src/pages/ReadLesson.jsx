import { useState, useEffect } from "react";
import Layout from "../components/ui/Layout";
import { FileText, Circle, Book, Check } from "lucide-react";
import { useUserContext } from "../context/useUser";
import { db } from "../config/firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import LoadingDots from "../components/ui/LoadingDots";
import {useNavigate, useLocation} from 'react-router-dom';

const ReadingLesson = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const stateData = location.state || '';
  const { user, learningData, login} = useUserContext();
  const [currentIndex, setCurrentIndex] = useState(learningData.lessons.indexOf(user?.lastLesson) || 0);
  const [lesson, setLesson] = useState(null);
  const [lessonMain, setLessonMain] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "english";


 // Fetch lesson data
 const fetchLessonData = async (lessonId) => {
  try {
    setLoading(true);
    setError(null);

    const lessonRef = doc(db, "lessons", lessonId);
    const lessonDoc = await getDoc(lessonRef);

    if (!lessonDoc.exists()) {
      throw new Error("Lesson not found");
    }

    setLessonMain(lessonDoc.data());
  } catch (err) {
    console.error("Error fetching lesson:", err);
    setError("Unable to fetch the lesson. Please try again.");
  } finally {
    setLoading(false);
  }
};


  // Initial lesson fetch
  useEffect(() => {
    if (learningData?.lessons && learningData.lessons.length > 0 ) {
      if(stateData.nextLesson){
        fetchLessonData(learningData.lessons[stateData.nextLesson]);
        updateUserLesson(learningData.lessons[stateData.nextLesson]);
        return;
      }
      const initialLesson = user?.lastLesson || learningData.lessons[0];
      fetchLessonData(initialLesson);
    }
  }, [learningData]);


  const updateUserLesson = async (value) => {
    try {
      const userRef = doc(db, "users", user.uid);
  
      // Update the document
      await updateDoc(userRef, {
        [`languageProficiency.${selectedLanguage}`]: value,
        lastLesson: value,
      });
  
      // Fetch the updated document
      login(user);
      
    } catch (err) {
      console.error("Error updating progress:", err);
      setError("Failed to update progress.");
      return null;
    }
  };
  

  useEffect(() => {
    if (lessonMain) {
      const languageContent = lessonMain.languages.find(
        (lang) => lang.id === selectedLanguage
      );
      setLesson(languageContent || null);
    }
  }, [lessonMain, selectedLanguage]);


 


  const handleNext = async () => {
    if (!learningData?.lessons) return;
  
    const currentLessonId = learningData.lessons[currentIndex];
    
    // Retrieve current user progress for the language
    const userRef = doc(db, "quizProgress", user.uid);
    const userDoc = await getDoc(userRef);
  
    // Initialize data structure if user progress does not exist
    const userData = userDoc.exists() ? userDoc.data() : {};
    const languageData = userData.languageProficiency?.[selectedLanguage] || {};
  
    // Check progress for the current topic
    const currentTopic = user?.lastLesson || currentLessonId;
    const topicProgress = languageData[currentTopic];
  
    if (!topicProgress?.completed) {
      // Redirect to quiz page for the current lesson if not completed
      navigate('/quizPage', { state: { currentLessonId, selectedLanguage } });
      return;
    }
  
    // If the current topic is completed, move to the next lesson
    if (currentIndex < learningData.lessons.length - 1) {
      const nextIndex = currentIndex + 1;
      const nextLesson = learningData.lessons[nextIndex];
  
      setCurrentIndex(nextIndex);
      await updateUserLesson(nextLesson);
      await fetchLessonData(nextLesson);
  
      // Optionally, navigate to the next lesson's reading page
      navigate('/readingPage', { state: { nextLessonId: nextLesson } });
    } else {
      alert("This is the last lesson.");
    }
  };
  

  const handlePrevious = async () => {
    if (!learningData?.lessons) return;
    
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      const prevLesson = learningData.lessons[prevIndex];
      
      setCurrentIndex(prevIndex);
      await updateUserLesson(prevLesson);
      await fetchLessonData(prevLesson);
    } else {
      alert(currentIndex)
      alert("This is the first lesson");
    }
  };

  const handleQuiz = async() =>{
    const currentLessonId = learningData.lessons[currentIndex];
    // Check if quiz for current lesson is completed
    const quizRef = doc(db, "quizProgress", `${user.uid}_${currentLessonId}`);
    const quizSnapshot = await getDoc(quizRef);

    if (!quizSnapshot.exists() || !quizSnapshot.data()?.completed) {
      // Redirect to quiz page for the current lesson
      navigate('/quizPage', { state: { currentLessonId, selectedLanguage } });
      return;
    }
  }

  if (loading) {
    return <LoadingDots />;
  }

  if (error) {
    return (
      <Layout>
        <div className="max-w-7xl mt-16 mx-auto p-4">
          <p className="text-red-500">{error}</p>
        </div>
      </Layout>
    );
  }

  if (!lesson) {
    return (
      <Layout>
        <div className="max-w-7xl mt-16 mx-auto p-4">
          <p className="text-gray-500">No lesson content available.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="w-full p-2 sm:p-6 mt-16 rounded-lg">
        <div className="text-left mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-slate-800 dark:text-slate-200">
            {lesson?.name} - {lessonMain?.topic}
          </h1>
          <p className="text-gray-700 text-sm sm:text-base dark:text-gray-300 mt-3 sm:mt-5">
            {lesson?.content}
          </p>
        </div>

        {/* Render Examples */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-3xl font-bold mb-4 flex items-center text-blue-600">
            <FileText className="mr-1 sm:mr-2" />
            Examples
          </h2>
          {lesson?.examples.map((example, index) => (
            <div
              key={index}
              className="mb-8 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 flex items-center text-slate-700 dark:text-slate-200">
                <Circle className="mr-1 sm:mr-2 text-blue-500" />
                {example?.exampleName}
              </h3>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                {example?.exampleList?.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-2 list-none">
                    <Circle size={12} className="inline-block mr-1 sm:mr-2 text-gray-400" />
                    {typeof item === 'string' ? (
                      item
                    ) : (
                      <>
                        <span className="font-bold text-sm sm:text-base">{item?.phrase}</span>
                        {item?.meaning && (
                          <span className="ml-2 text-gray-500 text-sm sm:text-base dark:text-gray-300">
                            - {item?.meaning}
                          </span>
                        )}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Render Key Vocabulary */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center text-green-600">
            <Book className="mr-1 sm:mr-2" />
            Key Vocabulary
          </h2>
          <ul className="list-none space-y-3">
            {lesson?.keyVocabulary.map((vocabulary, index) => (
              <li
                key={index}
                className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md"
              >
                <Check className="mr-4 text-green-500" />
                <div>
                  
                  <span className="font-medium text-sm sm:text-base text-slate-700 dark:text-slate-200">
                    {vocabulary?.phrase}
                  </span>
                  <span className="ml-2 text-gray-500 text-sm sm:text-base dark:text-gray-300">
                    - {vocabulary?.usage}
                  </span>
                  {vocabulary?.translation && (
                    <span className="ml-2 text-blue-500 dark:text-blue-300">
                      ({vocabulary?.translation})
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <button onClick={handleQuiz} className="px-3 h-8 me-3 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 mt-5">Take a quiz on this now</button>
        </section>

        {/* Navigation */}
        <footer className="flex flex-col-reverse md:flex-row justify-between items-center text-left mt-12">
          <p className="text-gray-500 dark:text-gray-300 text-sm">
            {`Lesson ID: ${lessonMain?.id} | Difficulty: ${lessonMain?.difficulty}`}
          </p>
          <div className="flex mb-5">
            <button onClick={handlePrevious} className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" >
              <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
              </svg>
              Previous
            </button>
            <button onClick={handleNext} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" >
              Next
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>
          </div>
        </footer>
      </div>

    </Layout>
  );
};

export default ReadingLesson;
