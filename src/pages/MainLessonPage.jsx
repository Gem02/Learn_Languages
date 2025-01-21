import { useState } from "react";
import { FaLanguage,  FaPlay, FaMicrophone, FaCommentDots,FaBook,FaBookOpen, FaBookReader, FaPenFancy } from "react-icons/fa";
import Layout from '../components/ui/Layout';
import {useNavigate} from 'react-router-dom';
import {useUserContext} from '../context/useUser';
import {doc, updateDoc} from 'firebase/firestore';
import {db} from '../config/firebase';
import {LessonOverview} from '../components/ui/LessonOverview';


const MainLessonPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "english"
  );
  const { user, learningData, setLearningData } = useUserContext();
  const [modal, setModal] = useState("");
  const navigate = useNavigate();
  const lessonsOutline = learningData?.lessonsDesc || [];

  const closeModal = () => {
    setModal("");
  };

  const handleLanguageChange = async (e) => {
    const selected = e.target.value;
    setSelectedLanguage(selected);
    // Save locally for immediate feedback
    localStorage.setItem("selectedLanguage", selected);

    try {
      if (user?.uid) {
        // Check `learningLanguages` from the context
        const learningLanguages = user.learningLanguages || [];

        if (!learningLanguages.includes(selected)) {
          // Update the context immediately
          const updatedLanguages = [...learningLanguages, selected];
          setLearningData((prev) => ({ ...prev, learningLanguages: updatedLanguages }));

          // Update Firebase with the new language
          const userDocRef = doc(db, "users", user.uid);
          await updateDoc(userDocRef, { learningLanguages: updatedLanguages });

          console.log("Language added successfully to Firebase");
        }
      }
    } catch (error) {
      console.log("Error updating language:", error);
    }
  };

  const handleStartLearning = () => {
    const initialLesson = learningData.lessons[0];
    setLearningData((prev) => ({ ...prev, lastLesson: initialLesson }));
    navigate("/readingPage", { state: { start: true } });
  };

  const handleContinueLearning = () => {
    navigate("/readingPage");
  };


  

  return (
    <Layout>
      <div className="py-20 flex">
        <div className="flex flex-col w-full  bg-gray-100 dark:bg-slate-900 min-h-screen">
          {/* Header */}
          <header className="w-full p-6 bg-white dark:bg-slate-950 shadow-md">
            <div>
              <h1 className="text-lg font-bold dark:text-slate-200">Learning {selectedLanguage}</h1>
              <p className="text-gray-600 mt-2 dark:text-slate-400">AI-powered lessons for mastering languages.</p>
            </div>
            <div className="mt-5">
              {/* Language Selector */}
              <p className=" text-slate-800 dark:text-slate-200 font-semibold">Select a language to read now from your list of languages.</p>
              <p className="text-slate-800 dark:text-slate-200 text-[11px]">You can add up to four(4) languages from settings</p>
              <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="mt-2 px-4 py-2 border border-gray-300 dark:border-gray-800 rounded bg-white dark:bg-slate-950 dark:text-slate-300 shadow-sm"
              >
                {user?.learningLanguages?.map((lang) => (
                  <option key={lang} value={lang}>
                      {lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </header>

          {/* Main Content */}
          <main className="p-6">

             {/* Getting started */}
            <section className="mb-8">
              <h2 className="text-lg font-bold mb-4 dark:text-slate-200">Get started with {selectedLanguage}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                { user?.lastLesson && (<FeatureCard
                  icon={<FaBookOpen />}
                  title="Continue Reading"
                  route={'/readingPage'}
                  btnText={'Continue'}
                  description={`Continue learning Greetings from where you stoped`}
                  onClick={handleContinueLearning}
                />)}
                <FeatureCard
                  icon={<FaBook />}
                  title="Start learning now"
                  btnText={'Start Learning'}
                  description={`Get started with the fundamentals of ${selectedLanguage}`}
                  onClick={handleStartLearning}
                />

                <FeatureCard
                  icon={<FaBookReader />}
                  route={''}
                  onClick={() => setModal('overview')}
                  btnText={'View lessons'}
                  title="Lessons overview"
                  description={`View lesson overview for learning ${selectedLanguage}`}
                />
              </div>
            </section>

            {/* Featured Lessons */}
            <section className="mb-8">
              <div className="flex  gap-2">
                <h2 className="text-lg font-bold mb-4 dark:text-slate-200">Featured Lessons for {selectedLanguage}</h2>
                <p className="ring-1 rounded text-sm font-bold px-3 py-1 h-fit dark:text-slate-300 text-slate-800">Coming Soon</p>  
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <LessonCard
                  title="Beginner Vocabulary"
                  description="Learn essential words and phrases."
                  icon={<FaLanguage />}
                />
                <LessonCard
                  title="Basic Grammar"
                  description="Master the foundational rules of grammar."
                  icon={<FaPenFancy />}
                />
                <LessonCard
                  title="Speaking Practice"
                  description="Engage in AI-powered conversations."
                  icon={<FaCommentDots />}
                />
              </div>
            </section>

            {/* AI Recommendations */}
            <section className="mb-8">
              <div className="flex  gap-2">
                <h2 className="text-lg font-bold mb-4 dark:text-slate-200">AI-Powered Recommendations</h2>
                <p className="ring-1 rounded text-sm font-bold px-3 py-1 h-fit dark:text-slate-300 text-slate-800">Coming Soon</p>  
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FeatureCard
                  icon={<FaPlay />}
                  btnText={"Start"}
                  title="Speaking Practice"
                  description="Simulated conversations with real-time feedback."
                />
                <FeatureCard
                  icon={<FaMicrophone />}
                  title="Pronunciation Checker"
                  btnText={"Start"}
                  description="AI evaluates your pronunciation and fluency."
                />
                <FeatureCard
                  icon={<FaPenFancy />}
                  title="Writing Feedback"
                  btnText={"Start"}
                  description="Get real-time corrections for grammar and structure."
                />
              </div>
            </section>

            {modal === 'overview' && (
              <LessonOverview mainLanguage={selectedLanguage} lessonsOutline={lessonsOutline} closeModal={closeModal} />
            )}

          </main>
        </div>
      </div>
    </Layout>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description, btnText, onClick }) => (
  <div className="bg-white dark:bg-slate-950 p-6 shadow rounded-lg hover:shadow-lg transition-shadow">
    <div className=" mb-4">
      <div className="text-blue-500 p-3 bg-slate-200 dark:bg-slate-900 w-fit rounded-full text-lg mb-5">{icon}</div>
      <div className="flex flex-col">
        <h3 className="text-lg font-bold dark:text-slate-200">{title}</h3>
        <p className="text-gray-600 dark:text-slate-400">{description}</p>
        <button
          onClick={onClick}
          className="mt-5 py-2 rounded bg-blue-700 text-white text-center hover:bg-blue-800"
        >
          {btnText}
        </button>
      </div>
    </div>
  </div>
);


// Lesson Card Component
const LessonCard = ({ title, description, icon }) => (
  <div className="bg-white dark:bg-slate-950 p-6 shadow rounded-lg hover:shadow-lg transition-shadow">
    <div className="flex items-center space-x-4 mb-4">
      <div className="text-blue-500 text-lg">{icon}</div>
      <div>
        <h3 className="text-lg font-bold dark:text-slate-200">{title}</h3>
        <p className="text-gray-600 dark:text-slate-400">{description}</p>
      </div>
    </div>
  </div>
);

export default MainLessonPage;
