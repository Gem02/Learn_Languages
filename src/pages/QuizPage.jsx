import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/ui/Layout";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import LoadingDots from "../components/ui/LoadingDots";
import { db } from "../config/firebase";
import { useUserContext } from "../context/useUser";

const QuizPage = () => {
  const location = useLocation();
  const data = location.state;
  const currentId = data?.currentLessonId;
  const language = data?.selectedLanguage;
  const navigate = useNavigate();
  const { learningData, user } = useUserContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [allQuestions, setAllQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [retryCount, setRetryCount] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log("the user data is", user)
    const fetchQuestions = async () => {
      if (!currentId || !language) {
        setError("Lesson ID or language not provided.");
        return;
      }

      try {
        setLoading(true);
        const questionsRef = doc(db, "lessonQuestions", currentId);
        const questionsDoc = await getDoc(questionsRef);

        if (questionsDoc.exists()) {
          const data = questionsDoc.data();
          const languageQuestions = data.languages[language];
          if (languageQuestions && Array.isArray(languageQuestions)) {
            setAllQuestions(languageQuestions);
            setQuestions(getRandomQuestions(languageQuestions, 10));
          } else {
            setError("No questions available for the selected language.");
          }
        } else {
          setError("No such document found.");
        }
      } catch (err) {
        setError("An error occurred while fetching questions.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [currentId, language]);

  const getRandomQuestions = (questions, count) => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const handleRetry = () => {
    if (retryCount < 2) {
      setQuestions(getRandomQuestions(allQuestions, 10));
      setRetryCount(retryCount + 1);
      setCurrentStep(1);
      setAnswers({});
      setShowModal(false);
    }
  };

  const handleOptionChange = (questionIndex, selectedOption) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: selectedOption,
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        correct++;
      }
    });
    return correct;
  };

  const handleSubmit = async () => {
    const totalScore = calculateScore();
    setScore(totalScore);
    setShowModal(true);
  };

  const handleNextLesson = async () => {
    try {
      const userRef = doc(db, "quizProgress", user.uid);
      const userDoc = await getDoc(userRef);
  
      if (!userDoc.exists()) {
        // Create the document with initial data
        await setDoc(userRef, {
          languageProficiency: {
            [language]: {
              [user.lastLesson]: {
                score: 0,
                attempts: 0,
                completed: false,
              },
            },
          },
        });
      }
  
      // After ensuring the document exists, fetch the updated document
      const updatedDoc = await getDoc(userRef);
      const userData = updatedDoc.data();
      const languageData = userData.languageProficiency?.[language] || {};
      const currentTopic = user?.lastLesson;
      const topicProgress = languageData[currentTopic];
  
      // Prepare updated data
      const updatedData = {
        ...languageData,
        [currentTopic]: {
          score,
          attempts: (topicProgress?.attempts || 0) + 1,
          completed: true,
        },
      };
  
      // Update the document with the new progress
      await updateDoc(userRef, {
        [`languageProficiency.${language}`]: updatedData,
      });
  
      // Navigate to the next lesson
      navigate("/readingPage", {
        state: {
          nextLesson: learningData.lessons.indexOf(currentTopic) + 1,
        },
      });
    } catch (err) {
      console.error("Error updating progress:", err);
      setError("Failed to save progress. Please try again later.");
    }
  };
  

  if (loading) return <LoadingDots />;

  if (error) {
    return (
      <Layout>
        <div className="max-w-7xl mt-16 mx-auto p-4">
          <p className="text-red-500">{error}</p>
        </div>
      </Layout>
    );
  }

  const currentQuestion = questions[currentStep - 1];

  return (
    <Layout>
      <div className="bg-gray-100 mt-16 dark:bg-slate-900 text-gray-900 dark:text-gray-300 min-h-screen p-2 sm:p-6">
        <header className="text-center mb-6">
          <h1 className="text-xl sm:text-3xl font-bold">Quiz on {user?.lastLesson}</h1>
          <p className="text-sm">Test your knowledge before you continue.</p>
        </header>

        <div className="mb-6">
          <div className="relative w-full h-2 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-blue-500 transition-all"
              style={{
                width: `${questions.length > 0 ? (currentStep / questions.length) * 100 : 0}%`,
              }}
            ></div>
          </div>
          <p className="text-center mt-2">
            Step {currentStep} of {questions.length}
          </p>
        </div>

        <div className="bg-white text-sm sm:text-base dark:bg-slate-950 shadow-md rounded-md p-6">
          {currentQuestion && (
            <div>
              <p className="mb-4 font-semibold">{currentQuestion.question}</p>
              <ul className="space-y-2">
                {currentQuestion.options.map((option, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <input
                      type="radio"
                      id={`option-${currentStep}-${index}`}
                      name={`question-${currentStep}`}
                      value={option}
                      checked={answers[currentStep - 1] === option}
                      onChange={() => handleOptionChange(currentStep - 1, option)}
                    />
                    <label htmlFor={`option-${currentStep}-${index}`}>{option}</label>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-700 disabled:opacity-50"
          >
            <ChevronLeft /> Previous
          </button>
          {currentStep === questions.length ? (
            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600"
            >
              <Check /> Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
            >
              Next <ChevronRight />
            </button>
          )}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-md shadow-lg w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Your Score</h2>
              <p>
                You answered {score} out of {questions.length} questions correctly.
              </p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={handleRetry}
                  disabled={retryCount >= 2}
                  className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 disabled:opacity-50"
                >
                  Retry
                </button>
                <button
                  onClick={handleNextLesson}
                  className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                >
                  Next Lesson
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default QuizPage;
