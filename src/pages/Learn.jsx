import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

const languages = [
  { name: "English", description: "Learn the basics of English.", id: 1 },
  { name: "Spanish", description: "Start your Spanish journey.", id: 2 },
  { name: "French", description: "Master French greetings.", id: 3 },
];

const sampleLessons = {
  English: [
    { title: "Lesson 1: Greetings", id: "greetings" },
    { title: "Lesson 2: Basic Grammar", id: "grammar" },
    { title: "Lesson 3: Common Phrases", id: "phrases" },
  ],
  Spanish: [
    { title: "Lesson 1: Hola & Adiós", id: "hola" },
    { title: "Lesson 2: Numbers in Spanish", id: "numbers" },
    { title: "Lesson 3: Ordering Food", id: "food" },
  ],
  French: [
    { title: "Lesson 1: Bonjour & Salut", id: "bonjour" },
    { title: "Lesson 2: Counting in French", id: "counting" },
    { title: "Lesson 3: Asking for Directions", id: "directions" },
  ],
};

const Learn = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const navigate = useNavigate();

  const openModal = (language) => {
    setSelectedLanguage(language);
  };

  const closeModal = () => {
    setSelectedLanguage(null);
  };

  const goToLessonDetail = (lessonId) => {
    navigate(`/lessons/${lessonId}`);
  };

  return (
    <div className="mt-11 lg:mt-14 min-h-screen bg-gray-100 dark:bg-slate-900 text-gray-800">
      {/* Header Section */}
      <header className="text-center py-10 bg-gradient-to-b from-blue-600 to-blue-400 text-white">
        <h1 className="text-2xl md:text-4xl font-bold">Start Your Language Learning Journey</h1>
        <p className="mt-2 sm:text-lg">
          Discover interactive lessons and exercises for free.
        </p>
        <div className="mt-6 flex items-center flex-wrap justify-center gap-2">
          <Link to={"/signup"}
            className="px-6 text-sm dark:text-slate-200 py-2 bg-white dark:bg-slate-950 text-blue-600 font-medium rounded hover:bg-gray-100 w-full sm:w-auto sm:mx-[0] mx-[5%] "
          >Sign Up to Unlock All Features </Link>
          <button className="px-6 text-sm py-2 bg-blue-600 font-medium rounded hover:bg-blue-700 w-full sm:w-auto sm:mx-[0] mx-[5%]">
            Browse Languages
          </button>
        </div>
      </header>

      {/* Languages Section */}
      <section className="py-10">
        <h2 className="text-center text-2xl font-semibold  dark:text-slate-100">Explore Languages</h2>
        <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6">
          {languages.map((language) => (
            <div
              key={language.id}
              className="bg-white dark:bg-slate-950  p-4 shadow-md rounded-lg hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold dark:text-slate-100">{language.name}</h3>
              <p className="text-gray-600 dark:text-slate-400 mt-2">{language.description}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => openModal(language)}
              >
                Preview Lessons
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedLanguage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 w-full max-w-lg mx-4 rounded-lg shadow-lg">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-600 dark:text-slate-200">
                {selectedLanguage.name} - Preview Lessons
              </h2>
              <ul className="mt-4 space-y-2">
                {sampleLessons[selectedLanguage.name]?.map((lesson) => (
                  <li
                    key={lesson.id}
                    className="p-2 bg-gray-100 dark:bg-slate-900 dark:text-slate-300 rounded hover:bg-gray-200 cursor-pointer"
                    onClick={() => goToLessonDetail(lesson.id)}
                  >
                    {lesson.title}
                  </li>
                ))}
              </ul>
              <button
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Learn;
