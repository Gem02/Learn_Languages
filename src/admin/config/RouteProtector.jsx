import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export const AdminRoute = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(true); 

    return isAdmin ? children : <Navigate to="/" />;
};
