import {useState, useEffect} from 'react';
import Layout from '../components/ui/Layout';
import { FaBook} from "react-icons/fa";
import {useUserContext} from '../context/useUser'; 
import { doc, getDoc } from "firebase/firestore";
import {db} from '../config/firebase';
  

const Dashboard = () => {
    const {user} = useUserContext();
    const [languageScores, setLanguageScores] = useState({
      completedLessons: 0,
      totalLessons: 0,
    });
    
    const languages = user?.learningLanguages

    

    useEffect(() => {
      const fetchLanguageScores = async () => {
        try {
          const userRef = doc(db, "quizProgress", user.uid);
          const userDoc = await getDoc(userRef);
    
          if (userDoc.exists()) {
            const data = userDoc.data();
            const scores = {};
            let completedLessons = 0;
            const totalLessons = languages.length * 10; // 10 lessons per language
    
            languages.forEach((language) => {
              const languageData = data.languageProficiency?.[language] || {};
    
              let totalScore = 0;
              let totalQuizzes = 0;
    
              Object.values(languageData).forEach((lesson) => {
                if (lesson.score !== undefined) {
                  totalScore += lesson.score;
                  totalQuizzes += 1;
                }
                if (lesson.completed) {
                  completedLessons += 1;
                }
              });
    
              scores[language] =
                totalQuizzes > 0 ? ((totalScore / totalQuizzes) * 10).toFixed(1) : "0";
            });
    
            setLanguageScores({
              ...scores, // Language-specific scores
              completedLessons,
              totalLessons,
            });
          } else {
            console.warn("User document does not exist.");
          }
        } catch (error) {
          console.error("Error fetching quiz scores:", error);
        }
      };
    
      if (languages?.length > 0) {
        fetchLanguageScores();
      }
    }, [languages, user.uid]);
    
    
  return (
    <Layout>
        <div className="pt-20 w-full">
            <div className=" flex w-full">
                {/* Main Content Area */}
                <main className="w-full">

                    {/* Welcome Section */}
                    <div className="bg-white rounded-lg shadow-md p-6 dark:bg-slate-950 mb-6">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-slate-200">Welcome, {user?.name || 'User'}</h2>
                        <p className="text-gray-600 dark:text-slate-400 mt-2">
                        Here’s a quick overview of your progress and upcoming tasks.
                        </p>
                    </div>

                    {/* Grid for Widgets */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-6">
                        {/* Progress Widget */}
                        <div className="bg-white rounded-lg shadow-md p-6 dark:bg-slate-950">
                          <h3 className="text-lg font-bold text-gray-800 dark:text-slate-200 mb-4">
                            Overall Progress
                          </h3>
                          <div className="relative w-full h-4 bg-gray-300 rounded-lg">
                            <div
                              className="absolute top-0 left-0 h-4 bg-blue-500 rounded-lg"
                              style={{
                                width: `${
                                  (languageScores.completedLessons / languageScores.totalLessons) * 100
                                }%`,
                              }}
                            ></div>
                          </div>
                          <p className="mt-3 text-gray-600 dark:text-slate-400">
                            {languageScores.completedLessons} out of {languageScores.totalLessons} lessons completed.
                          </p>
                          {languageScores.completedLessons && (<p className="text-blue-600 font-bold mt-2">
                            {(
                              (languageScores.completedLessons / languageScores.totalLessons) * 100).toFixed(1)}{" "}
                            % completed! Keep going!
                          </p>)}
                        </div>


                        {/* Upcoming Activities Widget */}
                        <div className="bg-white rounded-lg shadow-md p-6 dark:bg-slate-950">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-slate-200 mb-4">
                                Upcoming Activities
                            </h3>
                            <p className='gray-600 dark:text-slate-400'>Stay tuned for your next tasks and challenges. Check back soon!</p>
                            {/* <ul className="space-y-3">
                                <li className="text-gray-600 dark:text-slate-400">
                                <span className="font-semibold">Lesson 5:</span> Advanced Grammar - Dec 15
                                </li>
                                <li className="text-gray-600 dark:text-slate-400">
                                <span className="font-semibold">Speaking Practice:</span> Pronunciation - Dec 16
                                </li>
                                <li className="text-gray-600 dark:text-slate-400">
                                <span className="font-semibold">Quiz:</span> Vocabulary Challenge - Dec 17
                                </li>
                            </ul> */}
                        </div>

                        {/* Recent Achievements Widget */}
                        <div className="bg-white rounded-lg shadow-md p-6 dark:bg-slate-950">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-slate-200 mb-4">
                                Recent Achievements
                            </h3>
                            <p className='gray-600 dark:text-slate-400'>Keep learning to unlock new milestones. Great job so far!</p>
                            {/* <ul className="space-y-3">
                                <li className="text-gray-600 dark:text-slate-400">
                                🏆 Completed <span className="font-semibold">Lesson 4: Basic Tenses</span>
                                </li>
                                <li className="text-gray-600 dark:text-slate-400">
                                ⭐ Achieved <span className="font-semibold">Perfect Score</span> in Quiz 3
                                </li>
                            </ul> */}
                        </div>
                    </div>

                    {/* Dashboard Content */}
                    {/* Languages Section */}
                    <section className="mb-8 mt-6">
                      <h2 className="text-xl font-bold dark:text-slate-200 mb-4 flex items-center space-x-2">
                        <FaBook className="text-blue-600" />
                        <span>Languages</span>
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                          {languages?.map((language, index) => (
                            <div
                              key={index}
                              className="bg-white dark:bg-slate-950 shadow-md rounded-lg p-6 flex flex-col items-center"
                            >
                              <h3 className="text-xl font-bold dark:text-slate-200">{language}</h3>
                              <div className="relative w-32 h-32 my-4">
                                <div
                                  className="absolute inset-0 rounded-full"
                                  style={{
                                    background: `conic-gradient(#2563eb ${languageScores[language] * 3.6}deg, #D1D5DB 0deg)`,
                                  }}
                                ></div>
                                <div className="absolute inset-2 rounded-full bg-white dark:bg-slate-950"></div>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                  <span className="text-2xl font-bold dark:text-slate-200">
                                    {languageScores[language] || "N/A"}
                                  </span>
                                  <p className="text-gray-500 text-sm dark:text-gray-400">Avg. Score</p>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>

                    </section>
                </main>
            </div>
        </div>
    </Layout>
  );
};

export default Dashboard; 
