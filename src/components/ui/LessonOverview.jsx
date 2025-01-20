import PropTypes from "prop-types";

export const LessonOverview = ({ mainLanguage, lessonsOutline, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-800 w-full max-w-lg mx-4 rounded-lg shadow-lg">
        {mainLanguage ? (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-slate-200">
              {mainLanguage} - Preview Lessons
            </h2>
            <div className="mt-4 max-h-64 overflow-y-auto space-y-2 custom-scrollbar">
              <ul className="space-y-2">
                {Array.isArray(lessonsOutline) &&
                  lessonsOutline.map((lesson, index) => (
                    <li
                      key={lesson.id || index}
                      className="p-2 bg-gray-100 dark:bg-slate-900 dark:text-slate-300 rounded hover:bg-gray-200 cursor-pointer"
                      onClick={() => alert("Just hold on here for now")}
                    >
                      {lesson}
                    </li>
                  ))}
              </ul>
            </div>
            <button
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        ) : (
          <div className="p-10">
            <p className="text-lg font-medium text-slate-700 dark:text-slate-300">
              No language selected
            </p>
            <button
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};



// Add PropType validation
LessonOverview.propTypes = {
  mainLanguage: PropTypes.string.isRequired,
  lessonsOutline: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  closeModal: PropTypes.func.isRequired,
};
