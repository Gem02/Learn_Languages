import React, { useState } from "react";
import { FaMicrophone, FaVolumeUp, FaStar } from "react-icons/fa";
import Layout from '../components/ui/Layout';


const SpeakingPage = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleStartRecording = () => {
    setIsRecording(true);
    setFeedback("Listening...");
    // Simulate recording with AI (replace with real logic)
    setTimeout(() => {
      setIsRecording(false);
      setFeedback("Great job! Your pronunciation is 85% accurate.");
    }, 3000);
  };

  return (
    <Layout >
    <div className="py-6 sm:px-6 mt-16">
      <h1 className="text-3xl font-bold mb-4 dark:text-slate-200">Speaking Practice</h1>
      <div className="border p-4 rounded-lg mb-4">
        <p className="text-lg dark:text-slate-400">&quot;The quick brown fox jumps over the lazy dog.&quot;</p>
      </div>
      <button
        onClick={handleStartRecording}
        className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white ${
          isRecording ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
        }`}
        disabled={isRecording}
      >
        <FaMicrophone className="mr-2" />
        {isRecording ? "Recording..." : "Start Recording"}
      </button>
      {feedback && <div className="mt-4 text-xl text-center dark:text-slate-400">{feedback}</div>}
    </div>
    </Layout>
  );
};

export default SpeakingPage;
