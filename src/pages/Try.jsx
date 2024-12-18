import { useState } from "react";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
];

const TryPage = () => {
  const [selectedTab, setSelectedTab] = useState("translate");
  const [textInput, setTextInput] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [analysisResult, setAnalysisResult] = useState("");

  const handleTranslate = async () => {
    // Mock translation API call
    setTranslatedText(`Translated text in ${languages.find(lang => lang.code === selectedLanguage)?.name}`);
  };

  const handleAnalyze = async () => {
    // Mock AI vs. Human detection API call
    setAnalysisResult("This text was likely written by a Human with 85% confidence.");
  };

  return (
    <div className=" mt-11 lg:mt-14 min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-blue-500 text-center mt-10 text-white p-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Try Our AI Tools</h1>
        <p className="mt-2 text-sm sm:text-lg">Experience the power of AI for free!</p>
      </header>

      {/* Tab Navigation */}
      <div className="flex justify-center mt-2 sm:mt-8 space-x-1">
        <button
          onClick={() => setSelectedTab("translate")}
          className={`px-2 text-sm sm:px-4 py-2 rounded-t-lg ${
            selectedTab === "translate" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          Translation Tool
        </button>
        <button
          onClick={() => setSelectedTab("analyze")}
          className={` px-1 text-sm sm:px-4 py-2 rounded-t-lg ${
            selectedTab === "analyze" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          AI vs. Human Text Detector
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white m-4 shadow-md rounded-lg mx-auto w-[95%] max-w-5xl p-2 sm:p-6">
        {selectedTab === "translate" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Text Translation</h2>
            <textarea
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="Enter text to translate..."
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            ></textarea>
            <div className="mt-4 flex items-center space-x-4">
              <select
                className="p-2 border rounded-md"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
              <button
                onClick={handleTranslate}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Translate
              </button>
            </div>
            {translatedText && (
              <div className="mt-4 p-3 bg-gray-100 rounded border">
                <p className="font-semibold">Translation:</p>
                <p>{translatedText}</p>
              </div>
            )}
          </div>
        )}

        {selectedTab === "analyze" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">AI vs. Human Text Detector</h2>
            <textarea
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="Paste text to analyze..."
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            ></textarea>
            <button
              onClick={handleAnalyze}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Analyze Text
            </button>
            {analysisResult && (
              <div className="mt-4 p-3 bg-gray-100 rounded border">
                <p className="font-semibold">Analysis Result:</p>
                <p>{analysisResult}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TryPage;
