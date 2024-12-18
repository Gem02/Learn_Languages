import React from "react";
import { FaBookOpen, FaRandom } from "react-icons/fa";
import Layout from '../components/ui/Layout';

const VocabularyPage = () => {
  const words = [
    { word: "Astute", meaning: "Having an ability to assess situations accurately" },
    { word: "Resilient", meaning: "Able to withstand or recover quickly from difficulties" },
  ];

  return (
    <Layout>
    <div className="py-6 sm:px-6 mt-16">
      <h1 className="text-3xl dark:text-slate-200 font-bold mb-4">Vocabulary Builder</h1>
      <div className="space-y-4">
        {words.map((entry, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl dark:text-slate-200 font-semibold">{entry.word}</h2>
            <p className="text-sm dark:text-slate-400 text-gray-600">{entry.meaning}</p>
          </div>
        ))}
      </div>
      <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
        <FaRandom className="mr-2" />
        Discover New Word
      </button>
    </div>
    </Layout>
  );
};

export default VocabularyPage;
