
import { FaEdit } from "react-icons/fa";
import Layout from '../components/ui/Layout';

const GrammarPage = () => {
  const tips = [
    { rule: "Subject-Verb Agreement", example: "She runs fast. (Correct)" },
    { rule: "Tense Consistency", example: "He went to the store and bought milk. (Correct)" },
  ];

  return (
    <Layout>
    <div className=" py-6 sm:px-6 mt-16">
      <h1 className="text-3xl font-bold mb-4">Grammar Practice</h1>
      <div className="space-y-4">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{tip.rule}</h2>
            <p className="text-sm text-gray-600">{tip.example}</p>
          </div>
        ))}
      </div>
      <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center">
        <FaEdit className="mr-2" />
        Start Grammar Quiz
      </button>
    </div>
    </Layout>
  );
};

export default GrammarPage;
