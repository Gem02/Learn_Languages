import {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/useUser';
import { Navigate } from 'react-router-dom';

const AdminProtectedRoute = ({ children }) => {
  const { user, loading } = useUserContext();
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login", { replace: true });
    }

    /* if (!loading && !user?.admin) {
      navigate("/login", { replace: true });
    } */

  }, [user, loading, navigate]);

  useEffect(() => {
    const handleLoad = () => setIsNavigating(false);
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (loading || isNavigating) {
    return (
      <div className='flex space-x-2 justify-center items-center bg-opacity-50 bg-white h-screen dark:invert'>
        <span className='sr-only'>Loading...</span>
        <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
      </div>
    );
  }
  return user ? children : <Navigate to="/login" replace />;
  //return user?.admin ? children : <Navigate to="/login" replace />;
};

export default AdminProtectedRoute;