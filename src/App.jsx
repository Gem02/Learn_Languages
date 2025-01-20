import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/ui/NavBar";
import LogedNav from "./components/ui/LogedNav";
import Footer from "./components/ui/Footer";
import Home from "./pages/Home";
import Sample from "./pages/Test";
import GrammarCorrection from "./pages/GrammarCorrection";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Learn from "./pages/Learn";
import TryPage from "./pages/Try";
import PracticePage from "./pages/Practice";
import Dashboard from "./pages/Dashboard";
import MainLessonPage from "./pages/MainLessonPage";
import ProfilePage from "./pages/Profile";
import HelpPage from "./pages/Help";
import SettingsPage from "./pages/Settings";
import LearningPage from "./pages/LearningTool";
import SpeakingPage from "./pages/SpeakingPage";
import GrammerPage from "./pages/GrammerPage";
import VocabularyPage from "./pages/VocabularyPage";
import ExercisePage from './pages/Exercise';
import { MenuContextProvider } from "./context/MenuBarContext";
import { UserContextProvider } from "./context/user";
import {useAdminContext} from './admin/context/useAdmin';
import {AdminContextProvider} from "./admin/context/admin";
import { useUserContext } from "./context/useUser";
import React, {  useEffect } from "react";
import { useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AdminRoute } from "./admin/config/RouteProtector";
import AdminRoutes from "./admin/AdminRoutes";
import ProtectedRoute from './utils/ProtectedRoute';
import ReadingLesson from './pages/ReadLesson';
import QuizPage from './pages/QuizPage';


const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const {adminPage, setAdminPage} = useAdminContext()
  const { user } = useUserContext(); 
  setAdminPage(false);

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  return (
    <div className="w-full bg-white dark:bg-slate-950 flex flex-col min-h-screen">
      {/* Navigation Bar */}
      {!adminPage && (user ? <LogedNav /> : <Navbar />)}
      
      {/* Main Content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/signup" element={user ? <Navigate to="/dashboard" /> : <Signup />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/try" element={<TryPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/help" element={<HelpPage />} />

          {/* protected routes */}
         
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/lesson" element={<ProtectedRoute><MainLessonPage /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
            <Route path="/learning" element={<ProtectedRoute><LearningPage /></ProtectedRoute>} />
            <Route path="/exercisePage" element={<ProtectedRoute><ExercisePage /></ProtectedRoute>} />
            <Route path="/speakingPage" element={<ProtectedRoute><SpeakingPage /></ProtectedRoute>} />
            <Route path="/vocabularyPage" element={<ProtectedRoute><VocabularyPage /></ProtectedRoute>} />
            <Route path="/grammerPage" element={<ProtectedRoute><GrammerPage /></ProtectedRoute>} />
            <Route path="/grammar-correction" element={<ProtectedRoute><GrammarCorrection /></ProtectedRoute>} />  
            <Route path="/readingPage" element={<ProtectedRoute><ReadingLesson /></ProtectedRoute>} />
            <Route path="/quizPage" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />
          {/* Admin Dashboard */}
          <Route path="/admin/*"
            element={
              <React.Suspense fallback={<p>Loading...</p>}>
                <AdminRoute>
                  <AdminRoutes />
                </AdminRoute>
              </React.Suspense>
            }
          />
        </Routes>
      </div>

      {/* Footer */}
      {!user && <Footer />}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <UserContextProvider>
      <AdminContextProvider>
        <MenuContextProvider>
          <AppContent />
        </MenuContextProvider>
      </AdminContextProvider>
    </UserContextProvider>
  </QueryClientProvider>
);

export default App;
