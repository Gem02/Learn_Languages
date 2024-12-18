import { FaBook, FaStar, FaSearch, FaFilter, FaChartPie, FaPlayCircle, FaBookmark, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";

const LessonPage = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Quick Tools</h2>
          <ul className="space-y-4">
            <li className="flex items-center text-lg hover:text-purple-800">
              <FaBook className="mr-3" />
              All Lessons
            </li>
            <li className="flex items-center text-lg hover:text-purple-800">
              <FaChartPie className="mr-3" />
              Progress Tracker
            </li>
            <li className="flex items-center text-lg hover:text-purple-800">
              <FaPlayCircle className="mr-3" />
              Video Lessons
            </li>
            <li className="flex items-center text-lg hover:text-purple-800">
              <FaBookmark className="mr-3" />
              Saved Lessons
            </li>
            <li className="flex items-center text-lg hover:text-purple-800">
              <FaChalkboardTeacher className="mr-3" />
              Top Instructors
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Lessons</h1>
            <p className="text-gray-600">Browse and continue your learning journey.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-900">
              <FaSearch className="mr-2" />
              Search Lessons
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
              <FaFilter className="mr-2" />
              Filter
            </button>
          </div>
        </header>

        {/* Featured Lessons */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Lesson Card */}
            <LessonCard
              title="Mastering Vocabulary"
              description="Improve your vocabulary with advanced techniques."
              rating={4.5}
              icon={<FaBook />}
            />
            <LessonCard
              title="Speaking Skills"
              description="Enhance your speaking fluency and confidence."
              rating={4.8}
              icon={<FaUserGraduate />}
            />
            <LessonCard
              title="Grammar Essentials"
              description="Master grammar rules and improve your writing."
              rating={4.2}
              icon={<FaChalkboardTeacher />}
            />
          </div>
        </section>

        {/* Lesson Categories */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <div className="flex flex-wrap gap-4">
            <CategoryButton name="Vocabulary" />
            <CategoryButton name="Speaking" />
            <CategoryButton name="Grammar" />
            <CategoryButton name="Listening" />
            <CategoryButton name="Writing" />
            <CategoryButton name="Reading" />
          </div>
        </section>

        {/* Lesson Progress */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Continue Your Progress</h2>
          <div className="space-y-4">
            <ProgressTracker lesson="Speaking Skills" progress={75} />
            <ProgressTracker lesson="Grammar Essentials" progress={50} />
            <ProgressTracker lesson="Advanced Vocabulary" progress={30} />
          </div>
        </section>
      </main>
    </div>
  );
};

// Helper Components
const LessonCard = ({ title, description, rating, icon }) => {
  return (
    <div className="bg-white p-6 shadow rounded-lg hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4 mb-4">
        <div className="text-purple-800 text-3xl">{icon}</div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="flex items-center text-yellow-500">
          {Array(Math.floor(rating))
            .fill(0)
            .map((_, i) => (
              <FaStar key={i} />
            ))}
          {rating % 1 !== 0 && <FaStar className="half-star" />}
        </span>
        <span className="text-gray-600">{rating.toFixed(1)}</span>
      </div>
    </div>
  );
};

const CategoryButton = ({ name }) => {
  return (
    <button className="px-4 py-2 bg-gray-200 rounded hover:bg-purple-800 hover:text-white">
      {name}
    </button>
  );
};

const ProgressTracker = ({ lesson, progress }) => {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold">{lesson}</h3>
        <span className="text-sm text-gray-600">{progress}% Complete</span>
      </div>
      <div className="w-full bg-gray-300 h-2 rounded">
        <div
          className="bg-purple-800 h-2 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LessonPage;
