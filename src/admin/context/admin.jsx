import { createContext, useState, useEffect } from 'react';
import {useUserContext} from '../../context/useUser';

const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const { user, loading } = useUserContext;
  const [isAdmin, setIsAdmin] = useState(null);
  const [adminPage, setAdminPage] = useState(false);

  useEffect(() => {
    if (user && !loading) {
      setIsAdmin(user.admin);
    } else {
      setIsAdmin(null);
    }
  }, [user, loading]);

  return (
    <AdminContext.Provider value={{ isAdmin, loading, adminPage, setAdminPage }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContext;