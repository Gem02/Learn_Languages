import React from "react";
import AdminLayout from '../components/AdminLayout';
import { createLanguage, createCategory, createLesson } from "../components/createHelpers";

const App = () => {
  const handleCreateLanguage = async () => {
    await createLanguage("english", {
      name: "English",
      code: "en",
      flag_url: "https://example.com/english-flag.png",
    });
  };

  const handleCreateCategory = async () => {
    await createCategory("english", "grammar", {
      name: "Grammar",
      description: "Learn sentence structures and rules.",
    });
  };

  const handleCreateLesson = async () => {
    await createLesson("english", "grammar", "basic-greetings", {
      title: "Basic Greetings",
      content: "Hello, how are you?",
      media: ["https://example.com/audio.mp3", "https://example.com/image.png"],
      difficulty: "Beginner",
    });
  };

  return (
    <AdminLayout>
        <div>
        <button onClick={handleCreateLanguage}>Create Language</button>
        <button onClick={handleCreateCategory}>Create Category</button>
        <button onClick={handleCreateLesson}>Create Lesson</button>
        </div>
    </AdminLayout>
  );
};

export default App;
