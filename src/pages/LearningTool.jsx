import { useState } from "react";
import { FaQuestionCircle, FaVolumeUp, FaBookOpen, FaLanguage } from "react-icons/fa";
import Modal from "react-modal";

Modal.setAppElement("#root");

const LearningTools = () => {
  const [activeTab, setActiveTab] = useState("quiz");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent("");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "quiz":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Quiz Section</h2>
            <p>Test your knowledge with fun and interactive quizzes.</p>
            <button
              onClick={() => openModal("Start your quiz now!")}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Start Quiz
            </button>
          </div>
        );
      case "speaking":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Speaking Practice</h2>
            <p>Improve your speaking skills with interactive AI assistance.</p>
            <button
              onClick={() => openModal("Start speaking practice with AI!")}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Practice Speaking
            </button>
          </div>
        );
      case "vocabulary":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Vocabulary Builder</h2>
            <p>Learn new words and expand your vocabulary.</p>
            <button
              onClick={() => openModal("Explore new words and meanings!")}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Build Vocabulary
            </button>
          </div>
        );
      case "grammar":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Grammar Exercises</h2>
            <p>Enhance your grammar skills with tailored exercises.</p>
            <button
              onClick={() => openModal("Start grammar exercises!")}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Practice Grammar
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 mt-16">
      {/* Tab Navigation */}
      <div className="flex justify-around mb-6">
        <button
          onClick={() => setActiveTab("quiz")}
          className={`flex items-center px-4 py-2 border-b-4 ${
            activeTab === "quiz" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-600"
          }`}
        >
          <FaQuestionCircle className="mr-2" />
          Quiz
        </button>
        <button
          onClick={() => setActiveTab("speaking")}
          className={`flex items-center px-4 py-2 border-b-4 ${
            activeTab === "speaking" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-600"
          }`}
        >
          <FaVolumeUp className="mr-2" />
          Speaking
        </button>
        <button
          onClick={() => setActiveTab("vocabulary")}
          className={`flex items-center px-4 py-2 border-b-4 ${
            activeTab === "vocabulary" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-600"
          }`}
        >
          <FaBookOpen className="mr-2" />
          Vocabulary
        </button>
        <button
          onClick={() => setActiveTab("grammar")}
          className={`flex items-center px-4 py-2 border-b-4 ${
            activeTab === "grammar" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-600"
          }`}
        >
          <FaLanguage className="mr-2" />
          Grammar
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white p-6 rounded shadow">{renderContent()}</div>

      {/* React Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="bg-white p-6 w-3/4 mx-auto mt-20 rounded shadow-md"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h3 className="text-xl font-semibold mb-4">Modal Content</h3>
        <p className="mb-6">{modalContent}</p>
        <button
          onClick={closeModal}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default LearningTools;
