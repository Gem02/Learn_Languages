import { useContext } from 'react';
import UserContext from './user';

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('error using the context api');
  }
  return context;
};
