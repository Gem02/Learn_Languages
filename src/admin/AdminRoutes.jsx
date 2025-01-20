import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import AdminUserPage from './pages/AdminUsers';
import AddQuizPage from './pages/AddQuiz';
import AdminReportsPage from './pages/Reports';
import AdminSettingsPage from './pages/AdminSettings';
import ManualUpload from './pages/ManualUpload';
import AdminProtectedRoute from '../admin/utils/AdminProtected';
import {useAdminContext} from './context/useAdmin';


const AdminRoutes = () => {
  const {setAdminPage} = useAdminContext()
  setAdminPage(true);
 return(
  <div>
    <Routes>
      <Route path="/dashboard" element={<AdminProtectedRoute><AdminDashboard /></AdminProtectedRoute>} />
      <Route path="/users" element={<AdminProtectedRoute><AdminUserPage /></AdminProtectedRoute>} />
      <Route path="/addQuestions" element={<AdminProtectedRoute><AddQuizPage /></AdminProtectedRoute>} />
      <Route path='/reports' element={<AdminProtectedRoute><AdminReportsPage /></AdminProtectedRoute>} />
      <Route  path='/settings' element={<AdminProtectedRoute><AdminSettingsPage /></AdminProtectedRoute>} />
      <Route path='/upload' element={<AdminProtectedRoute><ManualUpload /></AdminProtectedRoute>} />
    </Routes>
  </div>
 )
};

export default AdminRoutes;
