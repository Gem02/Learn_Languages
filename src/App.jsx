import { Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/NavBar";
import LogedNav from './components/ui/LogedNav';
import Footer from "./components/ui/Footer";
import Home from "./pages/Home";
import Sample from "./pages/Test";
import GrammarCorrection from "./pages/GrammarCorrection";
import Signup from './pages/Signup'
import Login from './pages/Login'
import Learn from './pages/Learn'
import TryPage from './pages/Try'
import PracticePage from './pages/Practice'
import Dashboard from './pages/Dashboard'
import MainLessonPage from './pages/MainLessonPage'
import ProfilePage from './pages/Profile'
import HelpPage from './pages/Help'
import SettingsPage from './pages/Settings'
import LearningPage from './pages/LearningTool'
import QuizPage from './pages/QuizPage'
import SpeakingPage from './pages/SpeakingPage'
import GrammerPage from './pages/GrammerPage'
import VocabularyPage from './pages/VocabularyPage'
import {useState} from 'react'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  console.log(setLoggedIn)
  return (
    
    <div className=" w-full flex flex-col min-h-screen">
        {loggedIn ? (<LogedNav />) : (<Navbar />)}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/try" element={<TryPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lesson" element={<MainLessonPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/quizPage" element={<QuizPage />} />
          <Route path="/speakingPage" element={<SpeakingPage />} />
          <Route path="/vocabularyPage" element={<VocabularyPage />} />
          <Route path="/grammerPage" element={<GrammerPage />} />
          <Route path="/learn" element={<GrammarCorrection />} />
          <Route path="/sample" element={<Sample />} />
        </Routes>
      </div>
      {loggedIn ? null : (<Footer />)}
    </div>
    
  );
};

export default App;
