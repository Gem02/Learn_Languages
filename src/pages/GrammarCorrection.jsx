import { useState } from "react";

const GrammarCorrection = () => {
  const [inputText, setInputText] = useState("");
  const [correctedText, setCorrectedText] = useState("");

  const handleCorrection = async () => {
    // Placeholder for AI integration
    const response = await fakeAPICall(inputText);
    setCorrectedText(response);
  };

  // Simulate API call
  const fakeAPICall = (text) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Corrected version of: ${text}`);
      }, 1000);
    });

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Grammar Correction</h2>
      <textarea
        className="w-full border p-4 rounded mb-4"
        rows="5"
        placeholder="Type your sentence here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        onClick={handleCorrection}
      >
        Correct Sentence
      </button>
      {correctedText && (
        <div className="mt-6 p-4 bg-gray-100 rounded shadow">
          <h3 className="font-bold">Corrected Sentence:</h3>
          <p>{correctedText}</p>
        </div>
      )}
    </div>
  );
};

export default GrammarCorrection;
