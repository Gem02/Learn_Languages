import React, { useState, useEffect } from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Layout from '../components/ui/Layout';
import { db, auth } from '../config/firebase';
import { collection, getDocs, doc, updateDoc, query, limit } from 'firebase/firestore';


const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questionsRef = collection(db, "questions");
        const q = query(questionsRef, limit(10)); // Get only 10 questions
        const questionsSnapshot = await getDocs(q);
        const questionsData = questionsSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setQuestions(questionsData);
      } catch (error) {
        setError("Error fetching questions: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchUser = async () => {
      try {
        const userDocRef = doc(db, "users", auth.currentUser?.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) setUser(userDoc.data());
      } catch (error) {
        setError("Error fetching user: " + error.message);
      }
    };


    if (auth.currentUser) { // Check for authentication
      fetchQuestions();
      fetchUser();
    } else {
      // Redirect to login if not authenticated
      window.location.href = "/login";
    }


  }, []);

  const handleAnswer = async (answer) => {
    if (answer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
      await updateQuizScore();
    }
  };

  const updateQuizScore = async () => {
    try {
      if (!auth.currentUser) return; // Don't proceed if not logged in
      const userDocRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userDocRef, {
        quizzesCompleted: (user?.quizzesCompleted || 0) + 1,
        totalScore: (user?.totalScore || 0) + score, //add total score
        quizScore: score, //keep last quiz score
      });
    } catch (error) {
      setError("Error saving score: " + error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Layout>
      <div className="py-6 sm:px-6 mt-16">
        <h1 className="text-3xl dark:text-slate-200 font-bold mb-4">Quiz</h1>
        {!showResults ? (
          <div>
            <h2 className="text-xl dark:text-slate-400 mb-2">
              {questions[currentQuestion].question}
            </h2>
            <ul>
              {questions[currentQuestion].options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="p-3 mb-2 hover:bg-blue-100 dark:hover:bg-gray-950 dark:text-slate-400 cursor-pointer"
                >
                  {option}
                </li>
              ))}
            </ul>
            <div className="text-sm mt-4 dark:text-slate-300">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-xl dark:text-slate-400 mb-4">
              You scored {score} out of {questions.length}!
            </h2>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default QuizPage;