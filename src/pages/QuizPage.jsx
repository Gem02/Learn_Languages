import React, { useState } from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Layout from '../components/ui/Layout';

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Madrid", "Rome"],
      correct: "Paris",
    },
    {
      question: "Which language is used for web development?",
      options: ["Python", "C++", "JavaScript", "Java"],
      correct: "JavaScript",
    },
  ];

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  return (
    <Layout>
    <div className="py-6 sm:px-6 mt-16">
      <h1 className="text-3xl font-bold mb-4">Quiz</h1>
      {!showResults ? (
        <div>
          <h2 className="text-xl mb-2">
            {questions[currentQuestion].question}
          </h2>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleAnswer(option)}
                className="p-3 mb-2 border rounded hover:bg-blue-100 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
          <div className="text-sm mt-4">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl mb-4">
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
