import { useState, useEffect } from "react";
import { FaCheckCircle, FaTimesCircle, FaBookOpen, FaKeyboard, FaMicrophone } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";
import Modal from "react-modal";

Modal.setAppElement("#root");

const questions = [
  { id: 1, question: "Which of these sentences is correct?", options: ["She go to the market.", "She goes to the market.", "She going to the market."], correct: 1 },
  { id: 2, question: "What is the plural of 'child'?", options: ["Childs", "Children", "Childrens"], correct: 1 },
  { id: 3, question: "Select the synonym of 'happy'.", options: ["Sad", "Joyful", "Angry"], correct: 1 },
];

const PracticePage = () => {
  const [activeTab, setActiveTab] = useState("quizzes");
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);

  const tabs = [
    { id: "quizzes", label: "Quizzes", icon: <FaBookOpen /> },
    { id: "speaking", label: "Speaking Practice", icon: <FaMicrophone /> },
    { id: "vocabulary", label: "Vocabulary", icon: <FaKeyboard /> },
  ];

  useEffect(() => {
    if (!quizStarted) return;

    const totalDuration = 120; // Total time in seconds
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsModalOpen(true);
          setProgress(100); // Ensure progress bar reaches 100%
          return 0;
        }
        const newTime = prev - 1;
        setProgress(((totalDuration - newTime) / totalDuration) * 100);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizStarted]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    resetQuiz();
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleAnswerClick = (index) => {
    const isCorrect = questions[currentQuestion].correct === index;
    setFeedback(isCorrect ? "correct" : "incorrect");
    setAnswers((prev) => [...prev, { question: questions[currentQuestion], selected: index, isCorrect }]);
    if (isCorrect) {
      setScore((prev) => prev + 1);
      setProgress((prev) => Math.min(prev + 100 / questions.length, 100));
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setFeedback(null);
    } else {
      setIsModalOpen(true);
    }
  };

  const resetQuiz = () => {
    setProgress(0);
    setTimeLeft(120);
    setCurrentQuestion(0);
    setScore(0);
    setFeedback(null);
    setAnswers([]);
    setQuizStarted(false);
  };

  return (
    <div className="min-h-screen mt-16 bg-slate-50 dark:bg-slate-900">
      {/* Sidebar Tabs */}
      <div className="w-full bg-blue-600 text-white">
        <div className="pt-6 px-4 text-center border-b border-blue-600">
          <h1 className="text-2xl font-bold">Practice</h1>
          <p className="mt-2 text-sm">Sharpen your language skills</p>
        </div>
        <ul className="flex flex-wrap gap-3 justify-center pb-5">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => handleTabClick(tab.id)}
                className={`w-full flex items-center px-6 py-3 space-x-3 ${
                  activeTab === tab.id ? "bg-blue-800" : "hover:bg-blue-600"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <main className="flex flex-col w-full items-center p-2 sm:p-6 mt-4">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div className="text-lg font-semibold text-blue-800 dark:text-slate-200">
            Current Language: <span className="font-bold">English</span>
            
          </div>
          <div className="flex items-center space-x-4">
            <IoMdTimer className="text-2xl text-blue-600" />
            <span className="text-blue-700 text-lg font-semibold">
              {formatTime(timeLeft)}
            </span>
          </div>
        </header>

        {/* Progress Bar */}
        <div className="relative md:w-9/12 w-full h-4 bg-gray-300 dark:bg-gray-700 rounded-lg mb-6">
          <div
            className="absolute top-0 left-0 h-4 rounded-lg bg-blue-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Main Quiz Content */}
        <div className="bg-white md:w-9/12 w-full dark:bg-slate-950 shadow-lg rounded-lg p-6 relative">
          {activeTab === "quizzes" && (
            <div>
              {!quizStarted ? (
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-slate-300">
                    Ready to start the quiz?
                  </h3>
                  <button
                    onClick={() => setQuizStarted(true)}
                    className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Start Quiz
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-4 text-slate-700 dark:text-slate-300">
                    {questions[currentQuestion].question}
                  </h3>
                  <div className="space-y-4">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerClick(index)}
                        className="w-full px-4 py-2 bg-blue-100 border border-blue-500 text-blue-700 rounded-lg hover:bg-blue-200"
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  {/* Feedback Section */}
                  {feedback && (
                    <div
                      className={`mt-4 flex items-center space-x-2 ${
                        feedback === "correct" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {feedback === "correct" ? (
                        <FaCheckCircle className="text-3xl" />
                      ) : (
                        <FaTimesCircle className="text-3xl" />
                      )}
                      <span className="text-lg font-semibold">
                        {feedback === "correct" ? "Correct!" : "Try Again!"}
                      </span>
                    </div>
                  )}
                  <button
                    onClick={handleNextQuestion}
                    className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    {currentQuestion < questions.length - 1
                      ? "Next Question"
                      : "Finish Quiz"}
                  </button>
                </>
              )}
            </div>
          )}
          {activeTab !== "quizzes" && (
            <div className="text-gray-600 text-center py-20">
              <p className="text-lg">This section is under development.</p>
            </div>
          )}
        </div>
      </main>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="bg-white rounded-lg shadow-lg p-6 w-3/4 mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center"
      >
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Quiz Completed!</h2>
        <p className="text-lg mb-4">Your Score: {score} / {questions.length}</p>
        <ul className="space-y-3">
          {answers.map((answer, index) => (
            <li
              key={index}
              className={`p-4 rounded-lg ${
                answer.isCorrect
                  ? "bg-green-100 border-green-400"
                  : "bg-red-100 border-red-400"
              }`}
            >
              <p>
                <strong>Question:</strong> {answer.question.question}
              </p>
              <p>
                <strong>Your Answer:</strong>{" "}
                {answer.question.options[answer.selected]}
              </p>
              <p>
                <strong>
                  {answer.isCorrect ? "Correct!" : "Wrong Answer!"}
                </strong>
              </p>
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            resetQuiz();
            setIsModalOpen(false);
          }}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Restart Quiz
        </button>
      </Modal>
    </div>
  );
};

export default PracticePage;
