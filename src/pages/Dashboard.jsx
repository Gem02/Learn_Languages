import Layout from '../components/ui/Layout';

const Dashboard = () => {
  return (
    <Layout>
        <div className="pt-20 w-full">
            <div className=" flex w-full">
                {/* Main Content Area */}
                <main className="w-full">

                    {/* Dashboard Content */}
                    <section>
                    {/* Welcome Section */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <h2 className="text-xl font-bold text-gray-800">Welcome, John!</h2>
                        <p className="text-gray-600 mt-2">
                        Here’s a quick overview of your progress and upcoming tasks.
                        </p>
                    </div>

                    {/* Grid for Widgets */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-6">
                        {/* Progress Widget */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Your Progress</h3>
                            <div className="relative w-full h-4 bg-gray-300 rounded-lg">
                                <div
                                className="absolute top-0 left-0 h-4 bg-blue-500 rounded-lg"
                                style={{ width: "30%" }}
                                ></div>
                            </div>
                            <p className="mt-3 text-gray-600">
                                70% completed towards your next goal!
                            </p>
                        </div>

                        {/* Upcoming Activities Widget */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">
                                Upcoming Activities
                            </h3>
                            <ul className="space-y-3">
                                <li className="text-gray-600">
                                <span className="font-semibold">Lesson 5:</span> Advanced Grammar - Dec 15
                                </li>
                                <li className="text-gray-600">
                                <span className="font-semibold">Speaking Practice:</span> Pronunciation - Dec 16
                                </li>
                                <li className="text-gray-600">
                                <span className="font-semibold">Quiz:</span> Vocabulary Challenge - Dec 17
                                </li>
                            </ul>
                        </div>

                        {/* Recent Achievements Widget */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">
                                Recent Achievements
                            </h3>
                            <ul className="space-y-3">
                                <li className="text-gray-600">
                                🏆 Completed <span className="font-semibold">Lesson 4: Basic Tenses</span>
                                </li>
                                <li className="text-gray-600">
                                ⭐ Achieved <span className="font-semibold">Perfect Score</span> in Quiz 3
                                </li>
                            </ul>
                        </div>
                    </div>
                    </section>
                </main>
            </div>
        </div>
    </Layout>
  );
};

export default Dashboard;
