import { useState } from "react";
import {Spinner} from '../components/ui/TextSpinner'
import { translateText, analyzeText } from '../utils/api';



 const TryPage = () => {
  const [selectedTab, setSelectedTab] = useState("translate");
  const [translateTextInput, setTranslateTextInput] = useState("");
  const [analyzeTextInput, setAnalyzeTextInput] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [analysisResult, setAnalysisResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" }
  ];

  const handleTranslate = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const translated = await translateText(translateTextInput, selectedLanguage);
      setTranslatedText(translated);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnalyze = async () => {
    if (!analyzeTextInput) return;
    setIsLoading(true);
    setError(null);

    try {
      const result = await analyzeText(analyzeTextInput);
      const feedback = result?.feedback || "No feedback";
      setAnalysisResult(feedback);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-16 min-h-screen bg-gray-100 dark:text-slate-200 dark:bg-slate-900 text-gray-800">
      {/* Header */}
      <header className="bg-blue-500 text-center mt-10 text-white p-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Try Our AI Tools</h1>
        <p className="mt-2 text-sm sm:text-lg">Experience the power of AI for free!</p>
      </header>

      {/* Tab Navigation */}
      <div className="flex justify-center mt-2 sm:mt-8 space-x-1">
        <button
          onClick={() => setSelectedTab("translate")}
          className={`px-2 text-sm sm:px-4 py-2 rounded-t-lg ${selectedTab === "translate" ? "bg-blue-500 text-white" : "bg-gray-200 dark:text-slate-200 dark:bg-slate-950"}`}
        >
          Translation Tool
        </button>
        <button
          onClick={() => setSelectedTab("analyze")}
          className={`px-1 text-sm sm:px-4 py-2 rounded-t-lg ${selectedTab === "analyze" ? "bg-blue-500 text-white" : "bg-gray-200 dark:text-slate-200 dark:bg-slate-950"}`}
        >
          AI vs. Human Text Detector
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-800 rounded border">
          {error}
        </div>
      )}

      {/* Tab Content */}
      <div className="bg-white dark:bg-slate-950 m-4 shadow-md rounded-lg mx-auto w-[95%] max-w-5xl p-2 sm:p-6">
        {selectedTab === "translate" && (
          <div>
            <h2 className="text-xl dark:text-slate-200 font-semibold mb-4">Text Translation</h2>
            <textarea
              className="w-full p-3 border dark:border-1 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-900"
              rows="4"
              placeholder="Enter text to translate..."
              value={translateTextInput}
              onChange={(e) => setTranslateTextInput(e.target.value)}
            ></textarea>
            <div className="mt-4 flex items-center space-x-4">
              <select
                className="p-2 border rounded-md dark:bg-slate-900"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
              <button onClick={handleTranslate} className="px-4 py-2 flex justify-center items-center gap-2 bg-blue-500 text-white rounded hover:bg-blue-600" disabled={isLoading} >
                { isLoading ? (<Spinner />) : ''}
                {isLoading ? `Translating...` : "Translate"}
              </button>
            </div>
            {translatedText && (
              <div className="mt-4 p-3 bg-gray-100 dark:bg-slate-900 rounded border">
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
              className="w-full p-3 border dark:border-1 dark:border-slate-600 dark:bg-slate-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="Paste text to analyze..."
              value={analyzeTextInput}
              onChange={(e) => setAnalyzeTextInput(e.target.value)}
            ></textarea>
            <button
              onClick={handleAnalyze}
              className="mt-4 px-4 py-2 flex justify-center items-center gap-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              disabled={isLoading}
            >
              { isLoading ? (<Spinner />) : ''}
              {isLoading ? `Analyzing...` : "Analyze Text"}
            </button>
            {analysisResult && (
              <div className="mt-4 p-3 bg-gray-100 dark:bg-slate-900 rounded border">
                <p className="font-semibold">Analysis Result:</p>
                <p>{analysisResult}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default TryPage;