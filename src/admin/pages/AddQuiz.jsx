import { useState } from "react";
import { BookOpen, HelpCircle, PlusCircle} from "lucide-react";
import AdminLayout from '../components/AdminLayout';

const AddQuizPage = () => {
  const [selectedTab, setSelectedTab] = useState("quiz");

  const tabs = [
    { name: "Quiz Questions", value: "quiz", icon: <HelpCircle className="mr-2" /> },
    { name: "Vocabulary", value: "vocabulary", icon: <BookOpen className="mr-2" /> },
  ];

  const TabContent = () => {
    if (selectedTab === "quiz") {
      return (
        <form className="space-y-4">
          <div>
            <label htmlFor="question" className="block text-sm font-medium">
              Question
            </label>
            <textarea
              id="question"
              className="w-full border rounded-lg p-2 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300"
              placeholder="Enter the quiz question"
            ></textarea>
          </div>
          <div>
            <label htmlFor="options" className="block text-sm font-medium">
              Options
            </label>
            {[...Array(4)].map((_, i) => (
              <input
                key={i}
                type="text"
                className="w-full mb-2 border rounded-lg p-2 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300"
                placeholder={`Option ${i + 1}`}
              />
            ))}
          </div>
          <div>
            <label htmlFor="answer" className="block text-sm font-medium">
              Correct Answer
            </label>
            <input
              id="answer"
              type="text"
              className="w-full border rounded-lg p-2 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300"
              placeholder="Enter the correct answer"
            />
          </div>
        </form>
      );
    }

    if (selectedTab === "vocabulary") {
      return (
        <form className="space-y-4">
          <div>
            <label htmlFor="word" className="block text-sm font-medium">
              Word
            </label>
            <input
              id="word"
              type="text"
              className="w-full border rounded-lg p-2 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300"
              placeholder="Enter the word"
            />
          </div>
          <div>
            <label htmlFor="meaning" className="block text-sm font-medium">
              Meaning
            </label>
            <textarea
              id="meaning"
              className="w-full border rounded-lg p-2 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300"
              placeholder="Enter the meaning"
            ></textarea>
          </div>
          <div>
            <label htmlFor="example" className="block text-sm font-medium">
              Example Usage
            </label>
            <textarea
              id="example"
              className="w-full border rounded-lg p-2 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300"
              placeholder="Provide an example sentence"
            ></textarea>
          </div>
        </form>
      );
    }

    return null;
  };

  return (
    <AdminLayout>
      <div className="px-3 py-5 sm:p-6 bg-gray-100 dark:bg-slate-950 min-h-screen">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-300">Add New Content</h1>
          <p className="text-slate-700 dark:text-slate-400">
            Select a category and fill in the details below
          </p>
        </header>
        <div className="bg-white dark:bg-slate-900 shadow-md rounded-lg p-2 sm:p-6">
        <div className="flex justify-around sm:justify-center gap-4 mb-6 border-b pb-3 dark:border-slate-700 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedTab(tab.value)}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors text-sm font-medium w-full sm:w-auto ${
                  selectedTab === tab.value
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 dark:bg-slate-700 dark:text-slate-300"
                } hover:bg-blue-400 hover:text-white`}
              >
                {tab.icon} {tab.name}
              </button>
            ))}
          </div>

          <TabContent />
          <div className="text-center mt-6">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition">
              <PlusCircle className="inline-block mr-2" /> Add Content
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddQuizPage;
