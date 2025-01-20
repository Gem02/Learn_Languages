import { useContext } from 'react';
import AdminContext from './admin';

export const useAdminContext = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('error from admin context api');
  }
  return context;
};
