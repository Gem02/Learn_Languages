import { useState } from "react";
import { FaLanguage, FaSearch, FaPlay, FaMicrophone, FaCommentDots, FaPenFancy } from "react-icons/fa";
import Layout from '../components/ui/Layout';


const MainLessonPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = ["English", "Spanish", "French", "German", "Japanese"];

  return (
    <Layout>
      <div className="py-20 flex">
        <div className="flex flex-col  bg-gray-100 min-h-screen">
          {/* Header */}
          <header className="flex items-center flex-wrap justify-between p-6 bg-white shadow-md">
            <div>
              <h1 className="text-lg font-bold">Learn {selectedLanguage}</h1>
              <p className="text-gray-600 mt-2">AI-powered lessons for mastering languages.</p>
            </div>
            <div className="flex items-center flex-wrap gap-2 mt-2">
              {/* Language Selector */}
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded bg-white shadow-sm"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
              <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                <FaSearch className="mr-2" />
                Search Lessons
              </button>
            </div>
          </header>

          {/* Main Content */}
          <main className="p-6">
            {/* AI Recommendations */}
            <section className="mb-8">
              <h2 className="text-lg font-bold mb-4">AI-Powered Recommendations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FeatureCard
                  icon={<FaPlay />}
                  title="Speaking Practice"
                  description="Simulated conversations with real-time feedback."
                />
                <FeatureCard
                  icon={<FaMicrophone />}
                  title="Pronunciation Checker"
                  description="AI evaluates your pronunciation and fluency."
                />
                <FeatureCard
                  icon={<FaPenFancy />}
                  title="Writing Feedback"
                  description="Get real-time corrections for grammar and structure."
                />
              </div>
            </section>

            {/* Featured Lessons */}
            <section className="mb-8">
              <h2 className="text-lg font-bold mb-4">Featured Lessons for {selectedLanguage}</h2>
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
          </main>
        </div>
      </div>
    </Layout>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 shadow rounded-lg hover:shadow-lg transition-shadow">
    <div className="flex items-center space-x-4 mb-4">
      <div className="text-blue-500 text-lg">{icon}</div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

// Lesson Card Component
const LessonCard = ({ title, description, icon }) => (
  <div className="bg-white p-6 shadow rounded-lg hover:shadow-lg transition-shadow">
    <div className="flex items-center space-x-4 mb-4">
      <div className="text-blue-500 text-lg">{icon}</div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

export default MainLessonPage;
