import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BookOpenIcon,
  EditIcon,
  MicIcon,
  ClipboardListIcon,
  CheckCircleIcon,
} from "lucide-react";

const ExercisePage = () => {
  const [currentSection, setCurrentSection] = useState("quiz");

  const renderSection = () => {
    switch (currentSection) {
      case "quiz":
        return <QuizSection />;
      case "vocabulary":
        return <VocabularySection />;
      case "grammar":
        return <GrammarSection />;
      default:
        return <QuizSection />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 mt-16 dark:bg-slate-950 text-gray-900 dark:text-slate-300 flex flex-col items-center p-6">
      <header className="w-full max-w-5xl flex justify-between items-center border-b border-gray-300 dark:border-slate-700 pb-4 mb-6">
        <h1 className="text-3xl font-bold">Practice Exercises</h1>
        <nav className="flex gap-4">
          <NavLink
            to="/quiz"
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-700 rounded-md"
            onClick={() => setCurrentSection("quiz")}
          >
            <ClipboardListIcon size={20} /> Quiz
          </NavLink>
          <NavLink
            to="/vocabulary"
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-700 rounded-md"
            onClick={() => setCurrentSection("vocabulary")}
          >
            <BookOpenIcon size={20} /> Vocabulary
          </NavLink>
          <NavLink
            to="/grammar"
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-700 rounded-md"
            onClick={() => setCurrentSection("grammar")}
          >
            <EditIcon size={20} /> Grammar
          </NavLink>
        </nav>
      </header>

      <main className="w-full max-w-5xl bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6">
        {renderSection()}
      </main>
    </div>
  );
};

const QuizSection = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Quiz</h2>
    <p className="mb-4">Answer the following multiple-choice questions:</p>
    {/* Example Question */}
    <div className="p-4 border border-gray-300 dark:border-slate-700 rounded-md mb-4">
      <p className="mb-2">1. What is the capital of France?</p>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <input type="radio" id="paris" name="question1" />
          <label htmlFor="paris">Paris</label>
        </li>
        <li className="flex items-center gap-2">
          <input type="radio" id="rome" name="question1" />
          <label htmlFor="rome">Rome</label>
        </li>
        <li className="flex items-center gap-2">
          <input type="radio" id="berlin" name="question1" />
          <label htmlFor="berlin">Berlin</label>
        </li>
      </ul>
    </div>
  </div>
);

const VocabularySection = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Vocabulary</h2>
    <p className="mb-4">Match the words to their meanings:</p>
    <div className="p-4 border border-gray-300 dark:border-slate-700 rounded-md">
      {/* Example Vocabulary Match */}
      <p className="mb-2">1. Define the word "Euphoria":</p>
      <input
        type="text"
        placeholder="Type your answer here..."
        className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-md"
      />
    </div>
  </div>
);

const GrammarSection = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Grammar</h2>
    <p className="mb-4">Correct the grammatical errors in the following sentence:</p>
    <div className="p-4 border border-gray-300 dark:border-slate-700 rounded-md">
      <p className="mb-2 italic">She don’t know the answer to the question.</p>
      <input
        type="text"
        placeholder="Correct the sentence here..."
        className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-md"
      />
    </div>
  </div>
);

export default ExercisePage;
