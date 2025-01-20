import { useState } from "react";
import { FileQuestion, SpellCheck, BookOpenCheck, ChevronLeft, ChevronRight, Check, } from "lucide-react";
import Layout from '../components/ui/Layout';
import { db } from "../config/firebase";
import { useUserContext } from "../context/useUser";

const ExercisePage = () => {
  const [activeTab, setActiveTab] = useState("quiz");
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5; 
  const language = localStorage.getItem("selectedLanguage") || "english";

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentStep(1); 
  };

    useEffect(() => {
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

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <Layout>
        <div className="bg-gray-100 mt-16 dark:bg-slate-900 text-gray-900 dark:text-gray-300 min-h-screen p-6">
        <header className="text-center mb-6">
            <h1 className="text-3xl font-bold">Exercise Page</h1>
            <p>Test your knowledge and improve your skills</p>
        </header>

        <div className="flex justify-center gap-4 mb-4">
            <button
            onClick={() => handleTabChange("quiz")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === "quiz"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-blue-200 dark:bg-slate-800 dark:hover:bg-slate-700"
            }`}
            >
            <FileQuestion /> Quiz
            </button>

            <button
            onClick={() => handleTabChange("vocabulary")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === "vocabulary"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-blue-200 dark:bg-slate-800 dark:hover:bg-slate-700"
            }`}
            >
            <SpellCheck /> Vocabulary
            </button>

            <button
            onClick={() => handleTabChange("grammar")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === "grammar"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-blue-200 dark:bg-slate-800 dark:hover:bg-slate-700"
            }`}
            >
            <BookOpenCheck /> Grammar
            </button>
        </div>

        <div className="mb-6">
            <div className="relative w-full h-2 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
                className="absolute top-0 left-0 h-full bg-blue-500 transition-all"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
            </div>
            <p className="text-center mt-2">
            Step {currentStep} of {totalSteps}
            </p>
        </div>

        <div className="bg-white dark:bg-slate-950 shadow-md rounded-md p-6">
            {activeTab === "quiz" && (
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
            )}
            {activeTab === "vocabulary" && (
            <div>
                <h2 className="text-xl font-bold mb-4">Vocabulary</h2>
                {/* <div>
                  <p>Match the word with its meaning: {currentStep}</p>
                  <ul className="space-y-2 mt-4">
                  <li>
                      <label className="flex items-center gap-2">
                      <input type="checkbox" name="vocabulary" value="Synonym" />{" "}
                      Synonym
                      </label>
                  </li>
                  <li>
                      <label className="flex items-center gap-2">
                      <input type="checkbox" name="vocabulary" value="Antonym" />{" "}
                      Antonym
                      </label>
                  </li>
                  </ul>
                </div> */}
            </div>
            )}
            {activeTab === "grammar" && (
            <div>
                <h2 className="text-xl font-bold mb-4">Grammar</h2>
                {/* <div>
                  <p>Correct the sentence:</p>
                  <p>"He go to school every day."</p>
                  <textarea
                  className="w-full mt-4 p-2 border rounded-md dark:bg-slate-800 dark:border-slate-700"
                  rows="3"
                  ></textarea>
                </div> */}
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
            {currentStep === totalSteps ? (
            <button
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
        </div>
    </Layout>
  );
};

export default ExercisePage;



{ answer: "Children"
category
: 
"Grammar"
createdAt
: 
"2024-12-27T00:00:00Z"
difficultyLevel
: 
"Beginner"
explanation
: 
"The correct plural form of 'child' is 'children'."
language
: 
"English"
options
: 
(4) ['Childs', 'Child', 'Children', 'Childrens']
question
: 
"What is the plural form of 'child'?"
type
: 
"grammar"
updatedAt
: 
"2024-12-27T00:00:00Z"}